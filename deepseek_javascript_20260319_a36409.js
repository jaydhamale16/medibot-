// chatbot.js
// Medical chatbot core functionality

class MedicalChatbot {
    constructor(database, medicationDB) {
        this.database = database;
        this.medicationDB = medicationDB;
        this.conversationHistory = [];
        this.emergencyKeywords = ['emergency', '911', 'severe', 'unbearable', 'unconscious', 'not breathing', 'heart attack', 'stroke', 'bleeding heavily', 'suicide', 'kill myself', 'die'];
    }

    // Main function to process user input
    processQuery(userInput) {
        const input = userInput.toLowerCase().trim();
        
        // Add to history
        this.conversationHistory.push({ role: 'user', content: input });
        
        // Check for emergency keywords
        if (this.checkEmergency(input)) {
            return this.getEmergencyResponse();
        }
        
        // Check for medication query
        if (input.includes('medication for') || input.includes('medicine for') || 
            input.includes('drug for') || input.includes('what to take for') ||
            input.includes('prescription for')) {
            return this.checkMedication(input);
        }
        
        // Check for symptom/disease query
        const disease = this.findDisease(input);
        if (disease) {
            const response = this.generateDiseaseResponse(disease);
            this.conversationHistory.push({ role: 'bot', content: response });
            return response;
        }
        
        // Check for general help
        if (input.includes('help') || input.includes('what can you do') || input.includes('how to use')) {
            return this.getHelpResponse();
        }
        
        // Check for thanks
        if (input.includes('thank')) {
            return this.getThankYouResponse();
        }
        
        // Default response
        return this.getDefaultResponse();
    }

    // Check for emergency keywords
    checkEmergency(input) {
        return this.emergencyKeywords.some(keyword => input.includes(keyword));
    }

    // Emergency response
    getEmergencyResponse() {
        return `🚨 **EMERGENCY DETECTED** 🚨

Based on your message, you may be experiencing a medical emergency.

**IMMEDIATE ACTIONS:**
1. **CALL 911 (or your local emergency number) IMMEDIATELY**
2. Do not wait - emergency services are trained to help
3. If possible, unlock your door for first responders
4. Do not drive yourself to the hospital unless no other option

**While waiting for help:**
• Stay as calm as possible
• Follow any instructions from the 911 dispatcher
• Do not eat or drink anything unless instructed
• Have your medical information ready (allergies, medications, conditions)

**This is NOT a substitute for emergency medical care. Please seek immediate help.**`;
    }

    // Find disease in database (fuzzy matching)
    findDisease(input) {
        // Direct match
        for (let diseaseName in this.database) {
            if (input.includes(diseaseName)) {
                return {
                    name: diseaseName,
                    data: this.database[diseaseName],
                    matchType: 'exact'
                };
            }
        }
        
        // Symptom match
        for (let diseaseName in this.database) {
            const disease = this.database[diseaseName];
            const symptoms = disease.symptoms || [];
            
            for (let symptom of symptoms) {
                if (input.includes(symptom.toLowerCase())) {
                    return {
                        name: diseaseName,
                        data: disease,
                        matchedSymptom: symptom,
                        matchType: 'symptom'
                    };
                }
            }
        }
        
        // Partial match (word by word)
        const words = input.split(' ');
        for (let diseaseName in this.database) {
            const diseaseWords = diseaseName.split(' ');
            for (let word of words) {
                if (word.length > 3 && diseaseName.includes(word)) {
                    return {
                        name: diseaseName,
                        data: this.database[diseaseName],
                        matchType: 'partial'
                    };
                }
            }
        }
        
        return null;
    }

    // Generate response for disease query
    generateDiseaseResponse(disease) {
        const data = disease.data;
        
        let response = `## 🏥 **${disease.name.toUpperCase()}**\n\n`;
        
        // Basic Information
        response += `**📋 Basic Information:**\n${data.description}\n\n`;
        
        // Category
        response += `**🏷️ Category:** ${data.category}\n\n`;
        
        // Common Symptoms
        response += `**🔍 Common Symptoms:**\n`;
        data.symptoms.forEach(symptom => {
            response += `• ${symptom}\n`;
        });
        response += `\n`;
        
        // Home Remedies
        response += `**🏠 Home Remedies You Can Try:**\n`;
        data.home_remedies.forEach(remedy => {
            response += `• ${remedy}\n`;
        });
        response += `\n`;
        
        // Medications
        response += `**💊 Medications:**\n\n`;
        
        response += `*Over-the-Counter Options:*\n`;
        if (Array.isArray(data.medications.otc)) {
            data.medications.otc.forEach(med => {
                response += `• ${med}\n`;
            });
        }
        
        response += `\n*Prescription Only:*\n`;
        if (Array.isArray(data.medications.prescription)) {
            data.medications.prescription.forEach(med => {
                response += `• ${med}\n`;
            });
        }
        response += `\n`;
        
        // Severe Case Guidance
        if (data.severity === 'EMERGENCY') {
            response += `**🚨 THIS IS AN EMERGENCY 🚨**\n`;
            response += `This condition requires immediate medical attention. Please call 911 or go to the nearest emergency room.\n\n`;
        } else {
            response += `**⚠️ If Symptoms Are Severe:**\n`;
            response += `Please consult a doctor immediately. In the meantime:\n`;
            response += `• Rest and stay hydrated\n`;
            response += `• Use OTC medications as directed on package\n`;
            response += `• Monitor your symptoms closely\n`;
            response += `• Have someone stay with you if possible\n\n`;
        }
        
        // Doctor Consultation Advice
        response += `**👨‍⚕️ When to See a Doctor:**\n`;
        response += data.doctor_advice || "Consult a healthcare provider if symptoms persist or worsen.\n\n";
        
        // Medical disclaimer
        response += this.getDisclaimer();
        
        return response;
    }

    // Check medication for disease
    checkMedication(input) {
        // Extract disease name from query
        let diseaseName = input.replace(/medication for|medicine for|drug for|what (medication|drug|medicine) (is|can be used) for|what (should|do) i take for|best (medication|medicine|drug) for/gi, '').trim();
        
        // Find matching disease
        for (let name in this.database) {
            if (diseaseName.includes(name) || name.includes(diseaseName)) {
                const disease = this.database[name];
                
                let response = `## 💊 **MEDICATION INFORMATION FOR ${name.toUpperCase()}**\n\n`;
                
                response += `**Disease Category:** ${disease.category}\n\n`;
                
                response += `**Recommended Medications:**\n\n`;
                
                response += `*Over-the-Counter (OTC) Medications:*\n`;
                if (Array.isArray(disease.medications.otc)) {
                    disease.medications.otc.forEach(med => {
                        response += `• ${med}\n`;
                    });
                }
                
                response += `\n*Prescription Medications (Doctor Required):*\n`;
                if (Array.isArray(disease.medications.prescription)) {
                    disease.medications.prescription.forEach(med => {
                        response += `• ${med}\n`;
                    });
                }
                
                response += `\n**⚠️ IMPORTANT SAFETY INFORMATION:**\n`;
                response += `• This is general information only - your doctor may recommend different medications based on your specific situation\n`;
                response += `• Always consult a doctor before starting any new medication\n`;
                response += `• Prescription medications require a doctor's prescription\n`;
                response += `• Check for allergies and drug interactions\n`;
                response += `• Read all medication guides and labels carefully\n`;
                response += `• Never share prescription medications with others\n\n`;
                
                response += `**💡 Additional Tips:**\n`;
                response += `• Take medications exactly as prescribed\n`;
                response += `• Don't stop taking prescribed medications without consulting your doctor\n`;
                response += `• Report any side effects to your healthcare provider\n`;
                response += `• Keep a list of all medications you take\n\n`;
                
                response += this.getDisclaimer();
                
                return response;
            }
        }
        
        // If no specific disease found, check if they're asking about a specific medication
        for (let med in this.medicationChecker) {
            if (diseaseName.includes(med) || med.includes(diseaseName)) {
                return this.getMedicationInfo(med);
            }
        }
        
        return "I couldn't find specific medication information for that condition. Please consult a healthcare provider for accurate medication advice. You can also ask about specific medications like 'Tell me about ibuprofen' or 'What is amoxicillin used for?'";
    }

    // Get detailed medication information
    getMedicationInfo(medicationName) {
        const med = this.medicationChecker[medicationName];
        if (!med) return null;
        
        let response = `## 💊 **${medicationName.toUpperCase()} (${med.generic_name})**\n\n`;
        
        response += `**Class:** ${med.class}\n\n`;
        
        response += `**Uses:**\n`;
        med.uses.forEach(use => {
            response += `• ${use}\n`;
        });
        response += `\n`;
        
        response += `**Common Conditions Treated:**\n`;
        med.conditions.forEach(condition => {
            response += `• ${condition}\n`;
        });
        response += `\n`;
        
        response += `**Typical Dosage:**\n${med.dosage}\n\n`;
        
        response += `**⚠️ Warnings:**\n`;
        med.warnings.forEach(warning => {
            response += `• ${warning}\n`;
        });
        response += `\n`;
        
        response += `**Drug Interactions:**\n`;
        med.interactions.forEach(interaction => {
            response += `• ${interaction}\n`;
        });
        response += `\n`;
        
        response += `**Common Side Effects:**\n`;
        med.side_effects.forEach(effect => {
            response += `• ${effect}\n`;
        });
        response += `\n`;
        
        response += `**Pregnancy Safety:** ${med.pregnancy}\n\n`;
        
        response += `**Storage:** ${med.storage}\n\n`;
        
        response += this.getDisclaimer();
        
        return response;
    }

    // Help response
    getHelpResponse() {
        return `## 🤖 **How to Use MediCare AI**

I can help you with medical information in several ways:

**1️⃣ Ask about diseases and conditions:**
• "Tell me about diabetes"
• "What are the symptoms of migraine?"
• "Information about hypertension"

**2️⃣ Ask for home remedies:**
• "Home remedies for common cold"
• "Natural treatment for headache"
• "What helps with nausea?"

**3️⃣ Ask about medications:**
• "Medication for UTI"
• "What medicine for high blood pressure?"
• "Tell me about ibuprofen"
• "What is amoxicillin used for?"

**4️⃣ Ask when to see a doctor:**
• "When to see doctor for chest pain?"
• "Is my fever serious?"
• "Do I need to see a doctor for this rash?"

**⚠️ Important Notes:**
• I provide general information only
• Not a substitute for professional medical advice
• For emergencies, call 911 immediately
• Always consult healthcare providers for personal medical advice

**Try asking me something now!**`;
    }

    // Thank you response
    getThankYouResponse() {
        return "You're welcome! 😊 Remember that I'm here 24/7 if you have more medical questions. Take care of your health, and don't forget to consult healthcare professionals for personal medical advice! 🏥";
    }

    // Default response
    getDefaultResponse() {
        return "I'm here to help with medical information! I can tell you about:\n\n" +
               "• 🏥 **Diseases & Conditions** - symptoms, causes, and treatments\n" +
               "• 🏠 **Home Remedies** - natural ways to manage symptoms\n" +
               "• 💊 **Medications** - OTC and prescription options\n" +
               "• 👨‍⚕️ **Doctor Advice** - when to seek medical help\n\n" +
               "For example, you could ask:\n" +
               "• 'What are the symptoms of asthma?'\n" +
               "• 'Home remedies for headache'\n" +
               "• 'Medication for high blood pressure'\n" +
               "• 'When should I see a doctor for fever?'\n\n" +
               "What would you like to know about?";
    }

    // Medical disclaimer
    getDisclaimer() {
        return "\n\n---\n**⚠️ MEDICAL DISCLAIMER**\n" +
               "This information is for educational purposes only and is not a substitute for professional medical advice. " +
               "Always consult with a qualified healthcare provider for proper diagnosis and treatment. " +
               "If you're experiencing a medical emergency, call your local emergency services immediately.";
    }
}

// Initialize chatbot
let chatbot;

function initializeChatbot() {
    chatbot = new MedicalChatbot(medicalDatabase, medicationChecker);
    console.log("✅ MediCare AI initialized with " + Object.keys(medicalDatabase).length + " conditions and " + Object.keys(medicationChecker).length + " medications");
    return chatbot;
}

// Function to get response from chatbot (called from main.js)
function getChatbotResponse(userInput) {
    if (!chatbot) {
        initializeChatbot();
    }
    return chatbot.processQuery(userInput);
}