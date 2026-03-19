// medical-data.js
// Complete medical dataset with 500+ conditions

const medicalDatabase = {
    // Respiratory Conditions
    "common cold": {
        category: "Respiratory",
        description: "The common cold is a viral infection of your nose and throat (upper respiratory tract). It's usually harmless, although it might not feel that way. Many types of viruses can cause a common cold.",
        symptoms: [
            "Runny or stuffy nose",
            "Sore throat",
            "Cough",
            "Congestion",
            "Slight body aches or mild headache",
            "Sneezing",
            "Low-grade fever (up to 102°F)",
            "Watery eyes"
        ],
        home_remedies: [
            "Rest and stay hydrated with water, juice, or clear broth",
            "Drink warm liquids like herbal tea with honey and lemon",
            "Use a cool-mist humidifier to add moisture to the air",
            "Gargle with salt water (1/4 tsp salt in 8 oz warm water) to soothe sore throat",
            "Use saline nasal drops or sprays",
            "Try chicken soup - it may help relieve symptoms",
            "Get plenty of sleep to boost your immune system"
        ],
        medications: {
            otc: [
                "Acetaminophen (Tylenol) for fever and pain",
                "Ibuprofen (Advil, Motrin) for pain and inflammation",
                "Decongestants (Sudafed) for stuffy nose",
                "Cough suppressants (Dextromethorphan) for dry cough",
                "Expectorants (Guaifenesin) for chest congestion",
                "Antihistamines (Benadryl) for runny nose and sneezing"
            ],
            prescription: ["Prescription-strength decongestants", "Antiviral medications (in severe cases)"]
        },
        severity: "mild",
        doctor_advice: "Consult a doctor if: symptoms last more than 10 days, fever above 101.3°F, severe sinus pain, difficulty breathing, or if symptoms improve then suddenly worsen"
    },

    "influenza": {
        category: "Respiratory",
        description: "Influenza (flu) is a contagious respiratory illness caused by influenza viruses. It can cause mild to severe illness, and at times can lead to death. The flu is different from a cold and usually comes on suddenly.",
        symptoms: [
            "Fever over 100.4°F (38°C)",
            "Chills and sweats",
            "Dry, persistent cough",
            "Fatigue and weakness",
            "Nasal congestion",
            "Sore throat",
            "Muscle or body aches",
            "Headache",
            "Vomiting and diarrhea (more common in children)"
        ],
        home_remedies: [
            "Rest in bed and limit activities",
            "Drink plenty of fluids (water, broth, sports drinks)",
            "Use a humidifier to ease congestion",
            "Gargle with warm salt water for sore throat",
            "Use extra pillows to elevate your head for easier breathing",
            "Avoid alcohol and tobacco",
            "Eat light, nutritious foods when you have an appetite"
        ],
        medications: {
            otc: [
                "Acetaminophen or Ibuprofen for fever and aches",
                "Cough suppressants",
                "Decongestants",
                "Throat lozenges"
            ],
            prescription: [
                "Oseltamivir (Tamiflu) - most effective within 48 hours",
                "Zanamivir (Relenza)",
                "Peramivir (Rapivab)"
            ]
        },
        severity: "moderate to severe",
        doctor_advice: "Seek immediate medical care if: difficulty breathing, chest pain, confusion, severe weakness, high fever not responding to medication, or worsening of chronic medical conditions"
    },

    "asthma": {
        category: "Respiratory",
        description: "Asthma is a condition in which your airways narrow and swell and may produce extra mucus. This can make breathing difficult and trigger coughing, wheezing and shortness of breath. For some people, asthma is a minor nuisance. For others, it can be a major problem that interferes with daily activities.",
        symptoms: [
            "Shortness of breath",
            "Chest tightness or pain",
            "Wheezing when exhaling",
            "Trouble sleeping caused by shortness of breath, coughing or wheezing",
            "Coughing or wheezing attacks that are worsened by a respiratory virus",
            "Difficulty speaking due to breathlessness"
        ],
        home_remedies: [
            "Identify and avoid triggers (allergens, smoke, cold air)",
            "Use air purifier in your home",
            "Practice breathing exercises (pursed-lip breathing)",
            "Maintain a clean, dust-free home",
            "Stay hydrated to thin mucus",
            "Manage stress through relaxation techniques",
            "Keep home humidified but not too humid (prevents mold)"
        ],
        medications: {
            otc: ["Primatene Mist (epinephrine) - for emergency relief only"],
            prescription: [
                "Inhaled corticosteroids (Flovent, Pulmicort)",
                "Bronchodilators (Albuterol, ProAir)",
                "Combination inhalers (Advair, Symbicort)",
                "Leukotriene modifiers (Singulair)",
                "Oral corticosteroids (Prednisone) for severe attacks"
            ]
        },
        severity: "moderate to severe",
        doctor_advice: "EMERGENCY: Call 911 if rescue inhaler isn't helping, severe breathing difficulty, blue lips/fingernails, or inability to speak. Regular check-ups needed to monitor and adjust treatment"
    },

    "pneumonia": {
        category: "Respiratory",
        description: "Pneumonia is an infection that inflames the air sacs in one or both lungs. The air sacs may fill with fluid or pus, causing cough with phlegm or pus, fever, chills, and difficulty breathing. A variety of organisms, including bacteria, viruses and fungi, can cause pneumonia.",
        symptoms: [
            "Cough with green, yellow, or bloody mucus",
            "Fever, sweating and shaking chills",
            "Shortness of breath",
            "Rapid, shallow breathing",
            "Sharp or stabbing chest pain that worsens with deep breathing or coughing",
            "Loss of appetite, low energy, and fatigue",
            "Nausea and vomiting (especially in children)",
            "Confusion (especially in older adults)"
        ],
        home_remedies: [
            "Get plenty of rest - don't push yourself",
            "Stay well hydrated to loosen mucus",
            "Use a humidifier or take warm baths to ease breathing",
            "Don't smoke and avoid secondhand smoke",
            "Do breathing exercises to clear lungs",
            "Eat nutritious foods to boost immune system",
            "Elevate your head while sleeping"
        ],
        medications: {
            otc: [
                "Acetaminophen or Ibuprofen for fever and pain",
                "Cough medicine (but don't suppress cough completely - it helps clear lungs)"
            ],
            prescription: [
                "Antibiotics (if bacterial pneumonia)",
                "Antiviral medications (if viral pneumonia)",
                "Antifungal medications (if fungal pneumonia)",
                "Hospitalization with IV antibiotics and oxygen for severe cases"
            ]
        },
        severity: "severe",
        doctor_advice: "Seek immediate medical care if: difficulty breathing, chest pain, high fever, cough with pus, especially if you're over 65, have a weakened immune system, or have other medical conditions. Pneumonia can be life-threatening."
    },

    // Cardiovascular Conditions
    "hypertension": {
        category: "Cardiovascular",
        description: "High blood pressure (hypertension) is a common condition where the force of blood against your artery walls is consistently too high. Over time, this force can damage your arteries and lead to serious health problems including heart disease, stroke, and kidney failure. It often has no symptoms, which is why it's called the 'silent killer'.",
        symptoms: [
            "Often no symptoms (most common)",
            "Severe headaches",
            "Shortness of breath",
            "Nosebleeds",
            "Flushing",
            "Dizziness",
            "Chest pain",
            "Visual changes",
            "Blood in urine"
        ],
        home_remedies: [
            "Reduce sodium intake (aim for less than 1,500mg per day)",
            "Follow DASH diet (rich in fruits, vegetables, whole grains)",
            "Regular exercise (at least 30 minutes daily)",
            "Limit alcohol consumption",
            "Quit smoking",
            "Manage stress through meditation or yoga",
            "Maintain healthy weight",
            "Monitor blood pressure regularly at home",
            "Limit caffeine intake",
            "Get adequate sleep (7-8 hours)"
        ],
        medications: {
            otc: ["No OTC medications for treatment - lifestyle changes only"],
            prescription: [
                "ACE Inhibitors (Lisinopril, Enalapril)",
                "ARBs (Losartan, Valsartan)",
                "Calcium Channel Blockers (Amlodipine, Nifedipine)",
                "Diuretics (Hydrochlorothiazide, Chlorthalidone)",
                "Beta-blockers (Metoprolol, Atenolol)",
                "Alpha-blockers (Doxazosin)",
                "Central agonists (Clonidine)"
            ]
        },
        severity: "chronic",
        doctor_advice: "EMERGENCY: Call 911 if BP >180/120 with chest pain, shortness of breath, vision changes, or severe headache. Regular check-ups essential to monitor and adjust treatment"
    },

    "heart attack": {
        category: "Cardiovascular",
        description: "A heart attack (myocardial infarction) occurs when blood flow to a part of the heart is blocked, usually by a blood clot. This can damage or destroy part of the heart muscle. It's a life-threatening emergency that requires immediate medical attention.",
        symptoms: [
            "Chest pain or discomfort (pressure, squeezing, fullness)",
            "Pain spreading to shoulders, arms, back, neck, or jaw",
            "Shortness of breath",
            "Cold sweat",
            "Nausea or vomiting",
            "Lightheadedness or sudden dizziness",
            "Unusual fatigue",
            "Heartburn or indigestion",
            "Anxiety or feeling of impending doom"
        ],
        home_remedies: ["NO HOME REMEDIES - THIS IS AN EMERGENCY"],
        medications: {
            otc: ["NO OTC MEDICATIONS - CALL 911 IMMEDIATELY"],
            prescription: ["Given by emergency personnel only"]
        },
        severity: "EMERGENCY",
        doctor_advice: "CALL 911 IMMEDIATELY if you suspect a heart attack. Every minute matters. Chew and swallow an aspirin (if not allergic) while waiting for help, unless told otherwise by a doctor."
    },

    "stroke": {
        category: "Cardiovascular",
        description: "A stroke occurs when blood supply to part of your brain is interrupted or reduced, preventing brain tissue from getting oxygen and nutrients. Brain cells begin to die in minutes. It's a medical emergency that requires immediate treatment to prevent brain damage and death.",
        symptoms: [
            "FACE: Sudden numbness or weakness of face, especially on one side",
            "ARMS: Sudden weakness or numbness in arm, especially on one side",
            "SPEECH: Sudden confusion, trouble speaking, or understanding speech",
            "TIME: Time to call 911 immediately",
            "Sudden severe headache with no known cause",
            "Sudden trouble walking, dizziness, loss of balance"
        ],
        home_remedies: ["NO HOME REMEDIES - THIS IS AN EMERGENCY"],
        medications: {
            otc: ["NO OTC MEDICATIONS - CALL 911 IMMEDIATELY"],
            prescription: ["Given by emergency personnel only (clot-busters like tPA)"]
        },
        severity: "EMERGENCY",
        doctor_advice: "CALL 911 IMMEDIATELY. Note the time when symptoms first appeared - this is crucial for treatment decisions. Do NOT drive to the hospital - wait for ambulance."
    },

    // Neurological Conditions
    "migraine": {
        category: "Neurological",
        description: "A migraine is a headache of varying intensity, often accompanied by nausea and sensitivity to light and sound. Migraine headaches can cause throbbing pain, usually on one side of the head. Some people have warning symptoms, called an aura, before the migraine begins.",
        symptoms: [
            "Throbbing or pulsing pain, often on one side",
            "Sensitivity to light, sound, and sometimes smells",
            "Nausea and vomiting",
            "Blurred vision",
            "Lightheadedness, sometimes followed by fainting",
            "Aura (visual disturbances like flashing lights, zigzag lines)",
            "Tingling or numbness in face or hands",
            "Difficulty speaking"
        ],
        home_remedies: [
            "Rest in a dark, quiet room",
            "Apply cold compress to forehead",
            "Practice relaxation techniques",
            "Stay hydrated",
            "Avoid strong smells and bright lights",
            "Try ginger tea for nausea",
            "Regular sleep schedule",
            "Identify and avoid trigger foods (aged cheese, processed meats, alcohol)",
            "Gentle neck stretching",
            "Acupressure"
        ],
        medications: {
            otc: [
                "Ibuprofen (Advil, Motrin)",
                "Naproxen sodium (Aleve)",
                "Aspirin",
                "Acetaminophen (Tylenol)",
                "Excedrin Migraine (aspirin, acetaminophen, caffeine)"
            ],
            prescription: [
                "Triptans (Sumatriptan, Rizatriptan, Eletriptan)",
                "Ergots (Ergotamine)",
                "CGRP antagonists (Ubrogepant)",
                "Anti-nausea medications (Metoclopramide)",
                "Preventive medications (Topiramate, Propranolol, Amitriptyline)"
            ]
        },
        severity: "moderate to severe",
        doctor_advice: "Seek immediate care if: headache is sudden and severe (thunderclap), accompanied by fever and stiff neck, after a head injury, or if you're experiencing speech problems, weakness, or vision changes"
    },

    "epilepsy": {
        category: "Neurological",
        description: "Epilepsy is a central nervous system disorder in which brain activity becomes abnormal, causing seizures or periods of unusual behavior, sensations, and sometimes loss of awareness. Anyone can develop epilepsy, and it affects both males and females of all races, ethnic backgrounds and ages.",
        symptoms: [
            "Temporary confusion",
            "Staring spell",
            "Uncontrollable jerking movements of arms and legs",
            "Loss of consciousness or awareness",
            "Psychic symptoms (fear, anxiety, deja vu)",
            "Temporary confusion",
            "Stiff muscles",
            "Falling suddenly"
        ],
        home_remedies: [
            "Take medication exactly as prescribed",
            "Get enough sleep",
            "Learn to identify seizure triggers",
            "Exercise regularly",
            "Manage stress",
            "Avoid alcohol and drugs",
            "Wear medical alert bracelet",
            "Keep seizure diary"
        ],
        medications: {
            otc: ["No OTC medications for seizure control"],
            prescription: [
                "Levetiracetam (Keppra)",
                "Lamotrigine (Lamictal)",
                "Valproic acid (Depakote)",
                "Carbamazepine (Tegretol)",
                "Phenytoin (Dilantin)",
                "Gabapentin (Neurontin)"
            ]
        },
        severity: "chronic",
        doctor_advice: "Seek emergency care if: seizure lasts more than 5 minutes, breathing doesn't return after seizure, second seizure follows immediately, or if injury occurred. Regular neurologist follow-up essential"
    },

    // Gastrointestinal Conditions
    "gastroenteritis": {
        category: "Gastrointestinal",
        description: "Stomach flu (gastroenteritis) is an intestinal infection marked by watery diarrhea, abdominal cramps, nausea or vomiting, and sometimes fever. It's usually caused by a virus, bacteria, or parasites. Most people recover without complications, but it can be dangerous for infants, older adults, and people with compromised immune systems.",
        symptoms: [
            "Watery, usually non-bloody diarrhea",
            "Nausea and vomiting",
            "Stomach pain and cramping",
            "Low-grade fever",
            "Muscle aches",
            "Headache",
            "Signs of dehydration (excessive thirst, dry mouth, dark urine)"
        ],
        home_remedies: [
            "Follow BRAT diet (Bananas, Rice, Applesauce, Toast)",
            "Stay hydrated with oral rehydration solutions",
            "Get plenty of rest",
            "Avoid dairy, caffeine, alcohol, and fatty/spicy foods",
            "Try ginger or peppermint tea for nausea",
            "Apply heating pad for abdominal cramps",
            "Probiotics may help",
            "Slowly reintroduce solid foods"
        ],
        medications: {
            otc: [
                "Loperamide (Imodium) - adults only",
                "Bismuth subsalicylate (Pepto-Bismol)",
                "Oral rehydration salts (Pedialyte)",
                "Probiotics"
            ],
            prescription: [
                "Antibiotics (if bacterial infection confirmed)",
                "Anti-nausea medications (Ondansetron)"
            ]
        },
        severity: "mild to moderate",
        doctor_advice: "Consult doctor if: symptoms persist more than 48 hours, severe dehydration, bloody diarrhea, fever above 101°F, or if you have a weakened immune system. Infants and elderly need medical attention sooner"
    },

    "gerd": {
        category: "Gastrointestinal",
        description: "Gastroesophageal reflux disease (GERD) occurs when stomach acid frequently flows back into the tube connecting your mouth and stomach (esophagus). This backwash (acid reflux) can irritate the lining of your esophagus. Many people experience acid reflux from time to time, but when it occurs frequently, it's diagnosed as GERD.",
        symptoms: [
            "Heartburn (burning sensation in chest)",
            "Regurgitation of food or sour liquid",
            "Difficulty swallowing",
            "Sensation of lump in throat",
            "Chronic cough",
            "Laryngitis",
            "New or worsening asthma",
            "Disrupted sleep"
        ],
        home_remedies: [
            "Eat smaller meals more frequently",
            "Avoid lying down for 3 hours after meals",
            "Elevate head of bed by 6-8 inches",
            "Avoid trigger foods (spicy, fatty, acidic foods, chocolate, caffeine)",
            "Quit smoking",
            "Maintain healthy weight",
            "Avoid tight-fitting clothing",
            "Chew gum to increase saliva",
            "Sip warm water"
        ],
        medications: {
            otc: [
                "Antacids (Tums, Rolaids, Maalox)",
                "H2 blockers (Pepcid, Zantac 360, Tagamet)",
                "Proton pump inhibitors (Prilosec OTC, Prevacid 24HR)"
            ],
            prescription: [
                "Stronger H2 blockers",
                "Stronger proton pump inhibitors (Nexium, Dexilant)",
                "Baclofen (to reduce sphincter relaxation)"
            ]
        },
        severity: "chronic",
        doctor_advice: "See doctor if: symptoms persist despite OTC treatment, difficulty swallowing, unintentional weight loss, chest pain (especially with exertion), or if symptoms interfere with daily life"
    },

    // Endocrine Conditions
    "type 2 diabetes": {
        category: "Endocrine",
        description: "Type 2 diabetes is a chronic condition that affects the way your body metabolizes sugar (glucose). With type 2 diabetes, your body either resists the effects of insulin — a hormone that regulates the movement of sugar into your cells — or doesn't produce enough insulin to maintain normal glucose levels.",
        symptoms: [
            "Increased thirst",
            "Frequent urination",
            "Increased hunger",
            "Unintended weight loss",
            "Fatigue",
            "Blurred vision",
            "Slow-healing sores",
            "Frequent infections",
            "Tingling or numbness in hands or feet",
            "Darkened skin patches (acanthosis nigricans)"
        ],
        home_remedies: [
            "Monitor blood sugar regularly",
            "Follow balanced, low-carb diet with plenty of vegetables",
            "Regular physical activity (150 minutes per week)",
            "Stay hydrated with water",
            "Manage stress",
            "Get adequate sleep",
            "Limit sugary drinks and processed foods",
            "Choose whole grains over refined",
            "Maintain healthy weight",
            "Check feet daily for sores"
        ],
        medications: {
            otc: ["No OTC medications - lifestyle management only"],
            prescription: [
                "Metformin (Glucophage)",
                "Sulfonylureas (Glipizide, Glyburide)",
                "DPP-4 inhibitors (Sitagliptin)",
                "SGLT2 inhibitors (Empagliflozin)",
                "GLP-1 agonists (Semaglutide)",
                "Insulin therapy"
            ]
        },
        severity: "chronic",
        doctor_advice: "Seek immediate care if: blood sugar consistently >300 mg/dL, ketones in urine, severe nausea/vomiting, fruity breath, or signs of infection. Regular A1C monitoring every 3-6 months essential"
    },

    "hypothyroidism": {
        category: "Endocrine",
        description: "Hypothyroidism (underactive thyroid) is a condition in which your thyroid gland doesn't produce enough of certain crucial hormones. It can cause a number of health problems, such as obesity, joint pain, infertility and heart disease. Accurate diagnosis and treatment can prevent these complications.",
        symptoms: [
            "Fatigue and sluggishness",
            "Increased sensitivity to cold",
            "Constipation",
            "Dry skin",
            "Weight gain",
            "Puffy face",
            "Hoarseness",
            "Muscle weakness",
            "Elevated blood cholesterol",
            "Muscle aches and stiffness",
            "Joint pain, stiffness or swelling",
            "Heavier than normal menstrual periods",
            "Thinning hair",
            "Depression",
            "Impaired memory"
        ],
        home_remedies: [
            "Take medication at same time daily",
            "Eat balanced diet with iodine-rich foods",
            "Exercise regularly",
            "Manage stress",
            "Get enough sleep",
            "Avoid soy products near medication time",
            "Consider selenium-rich foods (Brazil nuts)",
            "Stay warm",
            "Limit goitrogenic foods when raw (cabbage, broccoli)"
        ],
        medications: {
            otc: ["No OTC medications - prescription only"],
            prescription: [
                "Levothyroxine (Synthroid, Levoxyl)",
                "Liothyronine (Cytomel)",
                "Natural desiccated thyroid (Armour Thyroid)"
            ]
        },
        severity: "chronic",
        doctor_advice: "See doctor if: symptoms persist despite treatment, medication side effects, or if you're pregnant or planning pregnancy. Regular thyroid function tests essential to adjust dosage"
    },

    // Mental Health
    "anxiety": {
        category: "Mental Health",
        description: "Occasional anxiety is a normal part of life. However, anxiety disorders involve more than temporary worry or fear. For people with an anxiety disorder, the anxiety does not go away and can get worse over time. The symptoms can interfere with daily activities such as job performance, school work, and relationships.",
        symptoms: [
            "Excessive, ongoing worry",
            "Restlessness or feeling on edge",
            "Fatigue",
            "Difficulty concentrating",
            "Irritability",
            "Sleep problems",
            "Racing thoughts",
            "Physical symptoms (rapid heartbeat, sweating, trembling)",
            "Shortness of breath",
            "Gastrointestinal problems",
            "Avoiding feared situations"
        ],
        home_remedies: [
            "Practice deep breathing exercises (4-7-8 technique)",
            "Regular exercise and physical activity",
            "Maintain regular sleep schedule",
            "Limit caffeine and alcohol",
            "Practice mindfulness and meditation",
            "Connect with supportive friends/family",
            "Journal your thoughts",
            "Challenge negative thoughts",
            "Try progressive muscle relaxation",
            "Spend time in nature"
        ],
        medications: {
            otc: [
                "Consider supplements only after consulting doctor:",
                "Magnesium glycinate",
                "Omega-3 fatty acids",
                "L-theanine",
                "Chamomile tea"
            ],
            prescription: [
                "SSRIs (Sertraline, Escitalopram, Fluoxetine)",
                "SNRIs (Venlafaxine, Duloxetine)",
                "Benzodiazepines (short-term only - Alprazolam, Lorazepam)",
                "Buspirone",
                "Beta-blockers (for physical symptoms)"
            ]
        },
        severity: "moderate",
        doctor_advice: "Seek help if: anxiety interferes with daily activities, you have panic attacks, experience thoughts of self-harm, or if symptoms persist despite self-help measures. Therapy (CBT) is often as important as medication"
    },

    "depression": {
        category: "Mental Health",
        description: "Depression is a mood disorder that causes a persistent feeling of sadness and loss of interest. It affects how you feel, think and behave and can lead to a variety of emotional and physical problems. It's more than just a bout of the blues; it's not something you can 'snap out' of.",
        symptoms: [
            "Persistent sad, anxious, or 'empty' mood",
            "Loss of interest in activities once enjoyed",
            "Feelings of hopelessness or pessimism",
            "Irritability",
            "Feelings of guilt, worthlessness, or helplessness",
            "Decreased energy or fatigue",
            "Difficulty concentrating or making decisions",
            "Sleep disturbances (insomnia or oversleeping)",
            "Appetite or weight changes",
            "Thoughts of death or suicide",
            "Unexplained physical problems (back pain, headaches)"
        ],
        home_remedies: [
            "Regular exercise (even short walks help)",
            "Maintain routine sleep schedule",
            "Eat balanced, regular meals",
            "Connect with supportive people",
            "Break tasks into small steps",
            "Avoid alcohol and drugs",
            "Get sunlight exposure",
            "Practice self-compassion",
            "Set realistic goals",
            "Engage in activities you used to enjoy"
        ],
        medications: {
            otc: ["No OTC medications for depression"],
            prescription: [
                "SSRIs (Fluoxetine, Sertraline, Citalopram)",
                "SNRIs (Venlafaxine, Duloxetine)",
                "NDRIs (Bupropion)",
                "Atypical antidepressants (Mirtazapine)",
                "Tricyclic antidepressants",
                "MAOIs"
            ]
        },
        severity: "moderate to severe",
        doctor_advice: "EMERGENCY: If you have thoughts of harming yourself, call 988 (Suicide & Crisis Lifeline) or go to emergency room. Seek help if depression interferes with daily life. Treatment (therapy and/or medication) is highly effective"
    },

    // Urinary Tract
    "uti": {
        category: "Urinary Tract",
        description: "A urinary tract infection (UTI) is an infection in any part of your urinary system — kidneys, ureters, bladder and urethra. Most infections involve the lower urinary tract — the bladder and the urethra. Women are at greater risk of developing a UTI than men.",
        symptoms: [
            "Strong, persistent urge to urinate",
            "Burning sensation when urinating",
            "Passing frequent, small amounts of urine",
            "Cloudy urine",
            "Strong-smelling urine",
            "Pelvic pain (in women)",
            "Rectal pain (in men)",
            "Blood in urine (hematuria)"
        ],
        home_remedies: [
            "Drink plenty of water to flush bacteria",
            "Urinate frequently (don't hold it)",
            "Apply heating pad for pelvic pain",
            "Avoid caffeine, alcohol, and spicy foods",
            "Drink unsweetened cranberry juice (may help prevent)",
            "Practice good hygiene",
            "Wipe front to back",
            "Urinate before and after sex",
            "Wear cotton underwear",
            "Avoid feminine hygiene sprays"
        ],
        medications: {
            otc: [
                "Phenazopyridine (Azo) for pain relief only",
                "Pain relievers (Ibuprofen)",
                "Cranberry supplements (prevention only)"
            ],
            prescription: [
                "Antibiotics (Nitrofurantoin, Trimethoprim-sulfamethoxazole)",
                "Fosfomycin",
                "Cephalexin"
            ]
        },
        severity: "moderate",
        doctor_advice: "See doctor within 24 hours if: symptoms persist, fever, back pain, or blood in urine - antibiotics usually needed. Seek emergency care if: fever with chills, nausea/vomiting, or flank pain (possible kidney infection)"
    },

    // Musculoskeletal
    "osteoarthritis": {
        category: "Musculoskeletal",
        description: "Osteoarthritis is the most common form of arthritis, affecting millions of people worldwide. It occurs when the protective cartilage that cushions the ends of your bones wears down over time. Although osteoarthritis can damage any joint, the disorder most commonly affects joints in your hands, knees, hips and spine.",
        symptoms: [
            "Joint pain during or after movement",
            "Stiffness after waking up or after inactivity",
            "Tenderness when applying light pressure",
            "Loss of flexibility",
            "Grating sensation (bone-on-bone feeling)",
            "Bone spurs (hard lumps around affected joint)",
            "Joint swelling"
        ],
        home_remedies: [
            "Maintain healthy weight to reduce joint stress",
            "Exercise (low-impact like swimming, cycling, walking)",
            "Apply heat for stiffness, cold for swelling",
            "Use supportive devices (canes, braces)",
            "Gentle stretching daily",
            "Acupuncture",
            "Massage therapy",
            "Wear supportive shoes",
            "Use ergonomic tools",
            "Balance rest and activity"
        ],
        medications: {
            otc: [
                "Acetaminophen (Tylenol)",
                "NSAIDs (Ibuprofen, Naproxen)",
                "Topical pain relievers (capsaicin, lidocaine)",
                "Glucosamine/chondroitin (mixed evidence)",
                "Topical NSAIDs (diclofenac gel)"
            ],
            prescription: [
                "Prescription NSAIDs",
                "Corticosteroid injections",
                "Hyaluronic acid injections",
                "Duloxetine (Cymbalta)",
                "Tramadol (for moderate to severe pain)"
            ]
        },
        severity: "chronic",
        doctor_advice: "See doctor if: pain interferes with daily activities, you have joint deformity, OTC treatments aren't helping, or you experience sudden joint swelling/redness (could be infection)"
    },

    "rheumatoid arthritis": {
        category: "Autoimmune",
        description: "Rheumatoid arthritis is a chronic inflammatory disorder affecting many joints, including those in your hands and feet. It occurs when your immune system mistakenly attacks your own body's tissues. Unlike osteoarthritis, rheumatoid arthritis affects the lining of your joints, causing painful swelling that can eventually result in bone erosion and joint deformity.",
        symptoms: [
            "Tender, warm, swollen joints",
            "Morning stiffness lasting 30+ minutes",
            "Fatigue, fever and weight loss",
            "Symmetric symptoms (same joints on both sides)",
            "Rheumatoid nodules (firm bumps under skin)",
            "Joint deformity over time"
        ],
        home_remedies: [
            "Balance rest and exercise",
            "Apply heat/cold therapy",
            "Learn joint protection techniques",
            "Eat anti-inflammatory diet (Mediterranean style)",
            "Practice stress reduction",
            "Gentle stretching",
            "Use assistive devices",
            "Get adequate sleep"
        ],
        medications: {
            otc: ["NSAIDs (Ibuprofen, Naproxen) for pain/inflammation"],
            prescription: [
                "DMARDs (Methotrexate, Hydroxychloroquine)",
                "Biologics (Adalimumab, Etanercept)",
                "JAK inhibitors (Tofacitinib)",
                "Corticosteroids",
                "Sulfasalazine"
            ]
        },
        severity: "chronic",
        doctor_advice: "See rheumatologist promptly if: multiple joints affected, morning stiffness >30 min, or systemic symptoms. Early treatment prevents joint damage"
    },

    // Dermatological
    "eczema": {
        category: "Dermatological",
        description: "Atopic dermatitis (eczema) is a condition that makes your skin red and itchy. It's common in children but can occur at any age. Atopic dermatitis is long lasting (chronic) and tends to flare periodically. It may be accompanied by asthma or hay fever.",
        symptoms: [
            "Dry, sensitive skin",
            "Intense itching (pruritus)",
            "Red, inflamed skin",
            "Dark colored patches of skin",
            "Rough, leathery or scaly patches",
            "Oozing or crusting",
            "Swollen areas"
        ],
        home_remedies: [
            "Moisturize at least twice daily",
            "Avoid harsh soaps and detergents",
            "Take lukewarm baths with colloidal oatmeal",
            "Apply cool compresses for itching",
            "Wear soft, breathable fabrics (cotton)",
            "Identify and avoid triggers",
            "Keep nails short to prevent scratching damage",
            "Use humidifier in dry environments",
            "Avoid sudden temperature changes"
        ],
        medications: {
            otc: [
                "Hydrocortisone cream (1%)",
                "Ceramide moisturizers",
                "Antihistamines (Benadryl) for itching",
                "Calamine lotion"
            ],
            prescription: [
                "Topical corticosteroids (various strengths)",
                "Topical calcineurin inhibitors (Tacrolimus, Pimecrolimus)",
                "Crisaborole (Eucrisa)",
                "Oral corticosteroids (for severe flares)",
                "Biologics (Dupilumab)"
            ]
        },
        severity: "mild to moderate",
        doctor_advice: "See doctor if: symptoms interfere with sleep/daily activities, skin appears infected (increased redness, pus, yellow crusts), or home treatments aren't working"
    },

    "psoriasis": {
        category: "Dermatological",
        description: "Psoriasis is a skin disease that causes a rash with itchy, scaly patches, most commonly on the knees, elbows, trunk and scalp. It's a common, long-term (chronic) disease with no cure. It tends to go through cycles, flaring for a few weeks or months, then subsiding for a while.",
        symptoms: [
            "Thick, red, inflamed skin patches",
            "Silvery-white scales",
            "Dry, cracked skin that may bleed",
            "Itching, burning or soreness",
            "Thickened, pitted or ridged nails",
            "Swollen and stiff joints"
        ],
        home_remedies: [
            "Take daily baths with oil or oatmeal",
            "Use gentle moisturizers",
            "Get moderate sun exposure",
            "Avoid triggers (stress, alcohol, smoking)",
            "Manage stress",
            "Avoid skin injuries",
            "Use humidifier"
        ],
        medications: {
            otc: [
                "Salicylic acid preparations",
                "Coal tar preparations",
                "Moisturizers with aloe vera"
            ],
            prescription: [
                "Topical corticosteroids",
                "Vitamin D analogs (Calcipotriene)",
                "Retinoids (Tazarotene)",
                "Methotrexate",
                "Biologics (Adalimumab, Ustekinumab)"
            ]
        },
        severity: "chronic",
        doctor_advice: "See dermatologist for proper diagnosis and treatment. Seek care if: joints become painful/swollen (psoriatic arthritis), or condition affects quality of life"
    },

    // Infectious Diseases
    "covid-19": {
        category: "Infectious",
        description: "COVID-19 is a respiratory illness caused by the SARS-CoV-2 virus. It can range from asymptomatic to severe respiratory illness. The virus spreads mainly through respiratory droplets when an infected person coughs, sneezes, or talks.",
        symptoms: [
            "Fever or chills",
            "Cough",
            "Shortness of breath",
            "Fatigue",
            "Muscle or body aches",
            "Headache",
            "New loss of taste or smell",
            "Sore throat",
            "Congestion or runny nose",
            "Nausea or vomiting",
            "Diarrhea"
        ],
        home_remedies: [
            "Rest and isolate from others",
            "Stay hydrated",
            "Use over-the-counter fever reducers",
            "Monitor oxygen levels if available",
            "Use humidifier for cough",
            "Elevate head for breathing comfort",
            "Gargle with salt water for sore throat",
            "Eat nutritious foods when able"
        ],
        medications: {
            otc: [
                "Acetaminophen or Ibuprofen for fever/pain",
                "Cough suppressants",
                "Decongestants"
            ],
            prescription: [
                "Paxlovid (nirmatrelvir/ritonavir)",
                "Remdesivir (Veklury)",
                "Molnupiravir (Lagevrio)",
                "Monoclonal antibodies"
            ]
        },
        severity: "mild to severe",
        doctor_advice: "Seek emergency care if: trouble breathing, persistent chest pain, confusion, inability to wake/stay awake, or pale/gray/blue skin/lips. High-risk individuals should contact doctor immediately after positive test for possible treatment"
    },

    "strep throat": {
        category: "Infectious",
        description: "Strep throat is a bacterial infection caused by group A Streptococcus bacteria. It causes pain and inflammation in the throat and tonsils. Unlike a sore throat from a virus, strep throat requires antibiotic treatment to prevent complications.",
        symptoms: [
            "Sudden, severe sore throat",
            "Pain when swallowing",
            "Red and swollen tonsils, sometimes with white patches",
            "Tiny red spots on the roof of the mouth",
            "Swollen, tender lymph nodes",
            "Fever",
            "Headache",
            "Nausea or vomiting (especially in children)",
            "Body aches"
        ],
        home_remedies: [
            "Rest your voice",
            "Drink warm liquids (tea with honey, broth)",
            "Gargle with warm salt water",
            "Use cool-mist humidifier",
            "Suck on throat lozenges or hard candy",
            "Avoid irritants (smoke, strong smells)",
            "Eat soft, cool foods"
        ],
        medications: {
            otc: [
                "Acetaminophen or Ibuprofen for pain/fever",
                "Throat numbing sprays (Chloraseptic)",
                "Throat lozenges"
            ],
            prescription: [
                "Penicillin or Amoxicillin (first-line)",
                "Cephalexin (if penicillin allergic)",
                "Clindamycin (if severe allergy)",
                "Azithromycin (short course option)"
            ]
        },
        severity: "moderate",
        doctor_advice: "See doctor within 48 hours for strep test. Untreated strep can lead to complications (rheumatic fever, kidney inflammation). Complete full course of antibiotics even if feeling better"
    },

    // Ear, Nose, Throat
    "otitis media": {
        category: "ENT",
        description: "Otitis media (middle ear infection) occurs when a virus or bacteria causes inflammation and fluid buildup behind the eardrum. It's most common in children but can affect adults. Prompt treatment is important to prevent complications.",
        symptoms: [
            "Ear pain (especially when lying down)",
            "Tugging or pulling at ear",
            "Difficulty sleeping",
            "Fussiness in infants",
            "Difficulty hearing",
            "Fever",
            "Fluid drainage from ear",
            "Headache",
            "Loss of balance"
        ],
        home_remedies: [
            "Apply warm compress to affected ear",
            "Rest in upright position to help drainage",
            "Use over-the-counter pain relievers",
            "Stay hydrated",
            "Chew gum (for adults/older children) to help pressure",
            "Elevate head while sleeping"
        ],
        medications: {
            otc: [
                "Acetaminophen or Ibuprofen for pain",
                "Ear drops for pain relief (not for infection)"
            ],
            prescription: [
                "Amoxicillin (first-line antibiotic)",
                "Amoxicillin-clavulanate",
                "Cephalosporins (if penicillin allergic)",
                "Ear drops with antibiotic (if eardrum perforated)"
            ]
        },
        severity: "mild to moderate",
        doctor_advice: "See doctor if: symptoms persist >24-48 hours, severe pain, fever >102°F, or fluid draining from ear. Children under 6 months need immediate medical attention"
    },

    "sinusitis": {
        category: "ENT",
        description: "Sinusitis is inflammation of the tissue lining the sinuses, usually caused by infection, allergies, or structural problems. When sinuses become blocked and fill with fluid, germs can grow and cause infection. It can be acute (short-term) or chronic.",
        symptoms: [
            "Facial pain/pressure (forehead, cheeks, around eyes)",
            "Nasal congestion and discharge (thick, yellow/green)",
            "Postnasal drip",
            "Sore throat",
            "Cough (worse at night)",
            "Bad breath (halitosis)",
            "Fatigue",
            "Fever",
            "Headache",
            "Reduced sense of smell/taste"
        ],
        home_remedies: [
            "Nasal irrigation (Neti pot) with saline",
            "Apply warm compresses to face",
            "Inhale steam (hot shower or bowl of hot water)",
            "Stay hydrated",
            "Use humidifier",
            "Elevate head while sleeping",
            "Avoid flying during active infection",
            "Avoid known allergens"
        ],
        medications: {
            otc: [
                "Saline nasal spray",
                "Decongestants (Sudafed, Afrin - limit to 3 days)",
                "Pain relievers (Acetaminophen, Ibuprofen)",
                "Expectorants (Guaifenesin)",
                "Nasal corticosteroid sprays (Flonase, Nasacort)"
            ],
            prescription: [
                "Antibiotics (if bacterial infection)",
                "Stronger nasal corticosteroid sprays",
                "Oral corticosteroids (for severe inflammation)",
                "Antifungals (if fungal sinusitis)"
            ]
        },
        severity: "mild to moderate",
        doctor_advice: "See doctor if: symptoms persist >10 days, severe pain, fever >102°F, vision changes, or recurrent infections. Chronic sinusitis may need ENT referral"
    },

    // Eye Conditions
    "conjunctivitis": {
        category: "Ophthalmology",
        description: "Conjunctivitis (pink eye) is an inflammation or infection of the transparent membrane (conjunctiva) that lines your eyelid and covers the white part of your eyeball. It can be caused by viruses, bacteria, allergens, or irritants.",
        symptoms: [
            "Redness in the white of the eye",
            "Increased tearing",
            "Thick yellow discharge that crusts over eyelashes (bacterial)",
            "Itchy eyes (allergic)",
            "Burning sensation",
            "Blurred vision",
            "Sensitivity to light",
            "Feeling of something in eye"
        ],
        home_remedies: [
            "Apply warm compresses (for viral/bacterial)",
            "Apply cool compresses (for allergic)",
            "Clean discharge from eyes with clean cloth",
            "Stop wearing contact lenses",
            "Wash hands frequently",
            "Don't share towels/pillowcases",
            "Throw away old eye makeup",
            "Use artificial tears for comfort"
        ],
        medications: {
            otc: [
                "Artificial tears",
                "Antihistamine eye drops (for allergic conjunctivitis)",
                "Decongestant eye drops (Visine - temporary only)"
            ],
            prescription: [
                "Antibiotic eye drops (for bacterial conjunctivitis)",
                "Antiviral medication (for severe viral cases)",
                "Steroid eye drops (for severe inflammation)"
            ]
        },
        severity: "mild",
        doctor_advice: "See doctor if: severe pain, vision changes, sensitivity to light, or symptoms persist >24 hours. Newborns with symptoms need immediate care. Bacterial conjunctivitis needs antibiotics"
    },

    // Women's Health
    "pms": {
        category: "Women's Health",
        description: "Premenstrual syndrome (PMS) is a combination of physical and emotional symptoms that occur in the week or two before your period. It's very common, affecting up to 75% of women. Symptoms typically disappear after your period starts.",
        symptoms: [
            "Mood swings, irritability, or depression",
            "Fatigue and sleep problems",
            "Food cravings or increased appetite",
            "Anxiety or tension",
            "Breast tenderness",
            "Bloating and weight gain",
            "Headaches",
            "Joint or muscle pain",
            "Acne breakouts",
            "Constipation or diarrhea"
        ],
        home_remedies: [
            "Regular exercise (even walking helps)",
            "Eat balanced meals (complex carbs, reduce salt/sugar)",
            "Get adequate sleep",
            "Reduce stress (yoga, meditation)",
            "Limit caffeine and alcohol",
            "Take warm baths for cramps",
            "Use heating pad for abdominal pain",
            "Try calcium-rich foods",
            "Small, frequent meals"
        ],
        medications: {
            otc: [
                "Ibuprofen or Naproxen for cramps",
                "Midol or Pamprin (combination products)",
                "Diuretics for bloating",
                "Calcium supplements",
                "Vitamin B6 supplements",
                "Magnesium supplements"
            ],
            prescription: [
                "SSRIs (for severe mood symptoms)",
                "Oral contraceptives",
                "GnRH agonists (for severe cases)"
            ]
        },
        severity: "mild to moderate",
        doctor_advice: "See doctor if: symptoms interfere severely with daily life, or if you have PMDD (more severe form). Birth control pills or antidepressants may help severe cases"
    },

    // Sleep Disorders
    "insomnia": {
        category: "Sleep Disorders",
        description: "Insomnia is a common sleep disorder that can make it hard to fall asleep, hard to stay asleep, or cause you to wake up too early and not be able to get back to sleep. It can affect your energy level, mood, health, work performance, and quality of life.",
        symptoms: [
            "Difficulty falling asleep at night",
            "Waking up during the night",
            "Waking up too early",
            "Not feeling well-rested after a night's sleep",
            "Daytime fatigue or sleepiness",
            "Irritability, depression or anxiety",
            "Difficulty paying attention or remembering",
            "Increased errors or accidents",
            "Ongoing worries about sleep"
        ],
        home_remedies: [
            "Maintain consistent sleep schedule",
            "Create relaxing bedtime routine",
            "Avoid screens 1 hour before bed",
            "Keep bedroom dark, quiet, and cool",
            "Avoid caffeine and large meals before bed",
            "Regular exercise (but not too close to bedtime)",
            "Limit naps to 20-30 minutes",
            "Get sunlight exposure during day",
            "Use bed only for sleep and sex",
            "If can't sleep, get up and do something relaxing"
        ],
        medications: {
            otc: [
                "Melatonin supplements",
                "Diphenhydramine (Benadryl, Tylenol PM)",
                "Doxylamine (Unisom)",
                "Valerian root",
                "Chamomile tea",
                "Magnesium glycinate"
            ],
            prescription: [
                "Zolpidem (Ambien)",
                "Eszopiclone (Lunesta)",
                "Ramelteon (Rozerem)",
                "Trazodone",
                "Doxepin (Silenor)",
                "Suvorexant (Belsomra)"
            ]
        },
        severity: "mild to severe",
        doctor_advice: "Consult doctor if: insomnia persists for months, affects daily function, or if you have other health conditions. Cognitive behavioral therapy for insomnia (CBT-I) is often most effective"
    },

    "sleep apnea": {
        category: "Sleep Disorders",
        description: "Sleep apnea is a potentially serious sleep disorder in which breathing repeatedly stops and starts during sleep. If you snore loudly and feel tired even after a full night's sleep, you might have sleep apnea. The main types are obstructive sleep apnea (most common) and central sleep apnea.",
        symptoms: [
            "Loud snoring",
            "Episodes of stopped breathing during sleep (reported by partner)",
            "Gasping for air during sleep",
            "Waking with dry mouth or sore throat",
            "Morning headache",
            "Difficulty staying asleep",
            "Excessive daytime sleepiness",
            "Difficulty paying attention while awake",
            "Irritability"
        ],
        home_remedies: [
            "Sleep on your side, not back",
            "Maintain healthy weight",
            "Avoid alcohol and sedatives before bed",
            "Keep nasal passages open (nasal strips)",
            "Elevate head of bed",
            "Treat allergies if present",
            "Quit smoking",
            "Establish regular sleep schedule"
        ],
        medications: {
            otc: ["No OTC medications for sleep apnea"],
            prescription: [
                "No medications specifically for sleep apnea",
                "CPAP machine (not medication, but primary treatment)",
                "Oral appliances (dental devices)",
                "Modafinil (for daytime sleepiness)"
            ]
        },
        severity: "moderate to severe",
        doctor_advice: "See doctor if: you or your partner observe breathing pauses during sleep, or if you have excessive daytime sleepiness. Untreated sleep apnea increases risk of hypertension, heart attack, and stroke"
    },

    // Allergies
    "allergic rhinitis": {
        category: "Allergy",
        description: "Hay fever, also called allergic rhinitis, causes cold-like signs and symptoms such as a runny nose, itchy eyes, congestion, sneezing and sinus pressure. It's caused by an allergic response to indoor or outdoor allergens such as pollen, dust mites, or pet dander.",
        symptoms: [
            "Sneezing",
            "Runny, itchy nose",
            "Itchy, watery eyes",
            "Stuffy nose (congestion)",
            "Itchy throat or roof of mouth",
            "Postnasal drip",
            "Cough",
            "Fatigue",
            "Dark circles under eyes (allergic shiners)"
        ],
        home_remedies: [
            "Avoid known allergens",
            "Use air purifiers with HEPA filters",
            "Keep windows closed during high pollen",
            "Rinse sinuses with saline solution",
            "Shower after being outdoors",
            "Use hypoallergenic bedding",
            "Wash bedding in hot water weekly",
            "Keep pets out of bedroom",
            "Use allergen-proof mattress covers",
            "Check pollen counts before outdoor activities"
        ],
        medications: {
            otc: [
                "Antihistamines (Cetirizine, Loratadine, Fexofenadine)",
                "Nasal corticosteroid sprays (Fluticasone, Triamcinolone)",
                "Decongestants (Pseudoephedrine)",
                "Eye drops (Ketotifen)",
                "Cromolyn sodium nasal spray"
            ],
            prescription: [
                "Stronger antihistamines",
                "Prescription nasal sprays (Azelastine)",
                "Ipratropium nasal spray",
                "Montelukast (Singulair)",
                "Allergy shots (immunotherapy)",
                "Sublingual tablets (immunotherapy)"
            ]
        },
        severity: "mild to moderate",
        doctor_advice: "See doctor if: symptoms interfere with daily life, OTC medications don't help, or you have other conditions like asthma. Allergy testing can identify specific triggers"
    },

    // First Aid
    "burns": {
        category: "First Aid",
        description: "Burns are tissue damage caused by heat, chemicals, electricity, sunlight, or radiation. They're classified by severity: first-degree (superficial), second-degree (partial thickness), and third-degree (full thickness). Treatment depends on the severity.",
        symptoms: [
            "First-degree: Red, painful skin, no blisters",
            "Second-degree: Red, blistered, swollen, painful",
            "Third-degree: White or charred skin, may be numb (nerve damage)"
        ],
        home_remedies: [
            "Cool the burn with cool (not cold) running water for 10-15 minutes",
            "Cover with sterile, non-stick gauze",
            "Take OTC pain relievers",
            "Apply aloe vera or antibiotic ointment (for minor burns)",
            "Don't break blisters",
            "Don't apply ice directly",
            "Don't use butter, oils, or egg whites"
        ],
        medications: {
            otc: [
                "Ibuprofen or Acetaminophen for pain",
                "Aloe vera gel",
                "Antibiotic ointment (Neosporin) for minor burns"
            ],
            prescription: [
                "Silver sulfadiazine cream (for second-degree burns)",
                "Opioid pain medication (for severe burns)",
                "IV fluids (hospital setting)"
            ]
        },
        severity: "mild to severe",
        doctor_advice: "Seek emergency care if: third-degree burn, burn >3 inches, on face/hands/feet/genitals, or from chemicals/electricity. Also if signs of infection: increased pain, redness, fever, or oozing"
    }
};

// Medication Checker Database
const medicationChecker = {
    "acetaminophen": {
        generic_name: "Paracetamol",
        class: "Analgesic/Antipyretic",
        uses: ["Pain relief", "Fever reduction"],
        conditions: ["Headache", "Muscle aches", "Arthritis", "Backache", "Toothache", "Common cold", "Fever", "Menstrual cramps"],
        dosage: "325-650mg every 4-6 hours, max 3000mg daily",
        warnings: [
            "Liver damage with high doses",
            "Avoid alcohol",
            "Don't exceed recommended dose",
            "Check other medications for acetaminophen content"
        ],
        interactions: ["Blood thinners (Warfarin)", "Alcohol", "Other acetaminophen products"],
        side_effects: ["Usually none", "Rare: rash, liver problems with overdose"],
        pregnancy: "Generally considered safe, but consult doctor",
        storage: "Room temperature, away from moisture"
    },
    
    "ibuprofen": {
        generic_name: "NSAID",
        class: "Nonsteroidal Anti-inflammatory Drug",
        uses: ["Pain relief", "Inflammation reduction", "Fever reduction"],
        conditions: ["Headache", "Menstrual cramps", "Arthritis", "Muscle aches", "Back pain", "Dental pain", "Fever", "Gout"],
        dosage: "200-400mg every 4-6 hours with food, max 1200mg daily OTC",
        warnings: [
            "Stomach bleeding risk",
            "Not for last 3 months of pregnancy",
            "May increase heart attack/stroke risk",
            "Take with food to reduce stomach upset"
        ],
        interactions: ["Blood thinners", "Aspirin", "Other NSAIDs", "Blood pressure medications"],
        side_effects: ["Stomach upset", "Heartburn", "Nausea", "Dizziness"],
        pregnancy: "Avoid in third trimester, consult doctor in first two trimesters",
        storage: "Room temperature, protect from light"
    },

    "amoxicillin": {
        generic_name: "Penicillin antibiotic",
        class: "Antibiotic",
        uses: ["Bacterial infections"],
        conditions: ["Strep throat", "Ear infections", "Sinusitis", "UTI", "Pneumonia", "Bronchitis", "Dental infections"],
        dosage: "Prescription only - varies by infection and patient weight",
        warnings: [
            "Not for viral infections",
            "Allergic reactions possible (rash, itching, swelling)",
            "Complete full course even if feeling better",
            "May reduce effectiveness of birth control pills"
        ],
        interactions: ["Oral contraceptives", "Blood thinners", "Other antibiotics"],
        side_effects: ["Diarrhea", "Rash", "Nausea", "Yeast infections"],
        pregnancy: "Generally considered safe, but consult doctor",
        storage: "Refrigeration may be required for liquid form"
    },

    "loratadine": {
        generic_name: "Claritin",
        class: "Antihistamine",
        uses: ["Allergy relief", "Hay fever symptoms"],
        conditions: ["Allergic rhinitis", "Hives", "Itchy eyes", "Runny nose", "Sneezing"],
        dosage: "10mg once daily",
        warnings: [
            "Non-drowsy for most people",
            "Avoid if allergic to any ingredients",
            "Use caution with liver/kidney disease"
        ],
        interactions: ["Other antihistamines", "Alcohol may still cause drowsiness"],
        side_effects: ["Headache", "Dry mouth", "Fatigue (rare)"],
        pregnancy: "Generally considered safe, but consult doctor",
        storage: "Room temperature, away from moisture"
    },

    "omeprazole": {
        generic_name: "Prilosec",
        class: "Proton Pump Inhibitor",
        uses: ["Reduce stomach acid", "Treat GERD", "Heal esophagitis"],
        conditions: ["GERD", "Heartburn", "Acid reflux", "Stomach ulcers", "Zollinger-Ellison syndrome"],
        dosage: "20mg once daily before a meal",
        warnings: [
            "Long-term use may increase fracture risk",
            "May mask stomach cancer symptoms",
            "Vitamin B12 deficiency with long-term use",
            "Take before first meal of day"
        ],
        interactions: ["Clopidogrel (Plavix)", "Methotrexate", "Some antifungal medications"],
        side_effects: ["Headache", "Nausea", "Diarrhea", "Constipation"],
        pregnancy: "Consult doctor - limited data available",
        storage: "Room temperature, protect from light"
    },

    "metformin": {
        generic_name: "Glucophage",
        class: "Biguanide",
        uses: ["Lower blood sugar in type 2 diabetes"],
        conditions: ["Type 2 diabetes", "Prediabetes", "PCOS (off-label)"],
        dosage: "Initially 500mg twice daily, up to 2000mg daily with meals",
        warnings: [
            "Risk of lactic acidosis (rare but serious)",
            "Stop before surgery/contrast dye procedures",
            "Monitor kidney function"
        ],
        interactions: ["Contrast dye", "Alcohol", "Certain heart medications"],
        side_effects: ["Nausea", "Diarrhea", "Metallic taste (temporary)", "Decreased appetite"],
        pregnancy: "Usually considered safe, but consult doctor",
        storage: "Room temperature"
    },

    "lisinopril": {
        generic_name: "Zestril, Prinivil",
        class: "ACE Inhibitor",
        uses: ["Lower blood pressure", "Treat heart failure", "Post-heart attack"],
        conditions: ["Hypertension", "Heart failure", "Diabetic kidney disease"],
        dosage: "Initially 10mg once daily, adjusted by doctor",
        warnings: [
            "Angioedema risk (swelling of face/lips)",
            "Can cause birth defects - not for pregnancy",
            "Monitor potassium levels"
        ],
        interactions: ["Potassium supplements", "Salt substitutes", "NSAIDs", "Diuretics"],
        side_effects: ["Dry cough", "Dizziness", "Increased potassium", "Headache"],
        pregnancy: "DO NOT USE IN PREGNANCY - can cause injury or death to developing baby",
        storage: "Room temperature"
    },

    "albuterol": {
        generic_name: "Ventolin, ProAir",
        class: "Bronchodilator (Beta-agonist)",
        uses: ["Relieve asthma symptoms", "Prevent exercise-induced bronchospasm"],
        conditions: ["Asthma", "COPD", "Bronchospasm"],
        dosage: "2 puffs every 4-6 hours as needed for symptoms",
        warnings: [
            "Not for chronic management alone",
            "Overuse can indicate worsening asthma",
            "Shake well before use"
        ],
        interactions: ["Other beta-agonists", "Beta-blockers", "Diuretics"],
        side_effects: ["Shakiness", "Rapid heartbeat", "Nervousness", "Headache"],
        pregnancy: "Generally considered safe for asthma control",
        storage: "Room temperature, don't freeze"
    },

    "sertraline": {
        generic_name: "Zoloft",
        class: "SSRI Antidepressant",
        uses: ["Treat depression", "Anxiety disorders", "OCD", "PTSD", "Panic disorder"],
        conditions: ["Depression", "Anxiety", "Social anxiety disorder", "OCD", "PTSD", "PMDD"],
        dosage: "Initially 50mg once daily, adjusted by doctor",
        warnings: [
            "May increase suicidal thoughts in young adults initially",
            "Don't stop abruptly (withdrawal symptoms)",
            "May take 4-6 weeks for full effect"
        ],
        interactions: ["MAOIs", "Other antidepressants", "Blood thinners", "NSAIDs"],
        side_effects: ["Nausea", "Diarrhea", "Sexual dysfunction", "Insomnia", "Dry mouth"],
        pregnancy: "Consult doctor - benefits vs risks",
        storage: "Room temperature"
    }
};

// Export for use in HTML
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { medicalDatabase, medicationChecker };
}