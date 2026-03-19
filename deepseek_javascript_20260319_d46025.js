// main.js
// Handles all UI interactions

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeChatbot();
    setupEventListeners();
    setupAutoResize();
});

// Setup event listeners
function setupEventListeners() {
    const input = document.getElementById('userInput');
    
    // Focus on input
    setTimeout(() => input.focus(), 500);
    
    // Handle input changes
    input.addEventListener('input', function() {
        autoResize(this);
    });
}

// Auto-resize textarea
function setupAutoResize() {
    const textarea = document.getElementById('userInput');
    textarea.addEventListener('input', function() {
        autoResize(this);
    });
}

function autoResize(element) {
    element.style.height = 'auto';
    element.style.height = (element.scrollHeight) + 'px';
}

// Send message
async function sendMessage() {
    const input = document.getElementById('userInput');
    const message = input.value.trim();
    
    if (message === '') return;
    
    // Disable input temporarily
    input.disabled = true;
    
    // Add user message to chat
    addMessageToChat(message, 'user');
    
    // Clear input
    input.value = '';
    input.style.height = 'auto';
    
    // Check for emergency keywords to show banner
    if (checkForEmergency(message)) {
        showEmergencyBanner();
    }
    
    // Show typing indicator
    showTypingIndicator();
    
    // Get bot response with slight delay for natural feel
    setTimeout(() => {
        try {
            const response = getChatbotResponse(message);
            removeTypingIndicator();
            addMessageToChat(response, 'bot');
        } catch (error) {
            console.error('Error getting response:', error);
            removeTypingIndicator();
            addMessageToChat("I'm having trouble processing your request. Please try again.", 'bot');
        } finally {
            // Re-enable input
            input.disabled = false;
            input.focus();
        }
    }, 600);
}

// Check for emergency keywords
function checkForEmergency(message) {
    const emergencyKeywords = ['emergency', '911', 'severe', 'unbearable', 'unconscious', 'not breathing', 'heart attack', 'stroke', 'bleeding heavily', 'suicide', 'kill myself', 'die'];
    const lowerMessage = message.toLowerCase();
    return emergencyKeywords.some(keyword => lowerMessage.includes(keyword));
}

// Show emergency banner
function showEmergencyBanner() {
    const banner = document.getElementById('emergencyBanner');
    banner.style.display = 'flex';
    
    // Auto hide after 30 seconds
    setTimeout(() => {
        hideEmergencyBanner();
    }, 30000);
}

function hideEmergencyBanner() {
    document.getElementById('emergencyBanner').style.display = 'none';
}

// Add message to chat
function addMessageToChat(message, sender) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    
    const headerDiv = document.createElement('div');
    headerDiv.className = 'message-header';
    
    if (sender === 'bot') {
        headerDiv.innerHTML = '<i class="fas fa-robot bot-icon"></i><span class="message-sender">MediCare AI</span>';
    } else {
        headerDiv.innerHTML = '<i class="fas fa-user user-icon"></i><span class="message-sender">You</span>';
    }
    
    const textDiv = document.createElement('div');
    textDiv.className = 'message-text';
    
    // Format the message
    textDiv.innerHTML = formatMessage(message);
    
    contentDiv.appendChild(headerDiv);
    contentDiv.appendChild(textDiv);
    messageDiv.appendChild(contentDiv);
    
    chatMessages.appendChild(messageDiv);
    
    // Scroll to bottom smoothly
    messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Format message with markdown-like syntax
function formatMessage(text) {
    if (!text) return '';
    
    // Convert headers (## Title)
    text = text.replace(/## (.*?)(\n|$)/g, '<h2>$1</h2>');
    
    // Convert bold (**text**)
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Convert italic (*text*)
    text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
    
    // Convert bullet points (•)
    text = text.replace(/• (.*?)(\n|$)/g, '• $1<br>');
    
    // Convert numbered lists
    text = text.replace(/(\d+)\. (.*?)(\n|$)/g, '$1. $2<br>');
    
    // Convert line breaks
    text = text.replace(/\n/g, '<br>');
    
    // Convert multiple <br> to paragraphs
    text = text.replace(/(<br>){3,}/g, '<br><br>');
    
    return text;
}

// Show typing indicator
function showTypingIndicator() {
    const chatMessages = document.getElementById('chatMessages');
    
    // Remove existing typing indicator if any
    removeTypingIndicator();
    
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot-message';
    typingDiv.id = 'typingIndicator';
    
    typingDiv.innerHTML = `
        <div class="message-content">
            <div class="message-header">
                <i class="fas fa-robot bot-icon"></i>
                <span class="message-sender">MediCare AI</span>
            </div>
            <div class="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    `;
    
    chatMessages.appendChild(typingDiv);
    typingDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Remove typing indicator
function removeTypingIndicator() {
    const indicator = document.getElementById('typingIndicator');
    if (indicator) {
        indicator.remove();
    }
}

// Handle Enter key
function handleKeyPress(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
    }
}

// Quick query from suggestion chips
function quickQuery(query) {
    const input = document.getElementById('userInput');
    input.value = query;
    input.focus();
    sendMessage();
}

// Clear chat
function clearChat() {
    if (confirm('Clear all chat messages?')) {
        const chatMessages = document.getElementById('chatMessages');
        chatMessages.innerHTML = `
            <div class="message bot-message">
                <div class="message-content">
                    <div class="message-header">
                        <i class="fas fa-robot bot-icon"></i>
                        <span class="message-sender">MediCare AI</span>
                    </div>
                    <div class="message-text">
                        <h2>👋 Welcome Back!</h2>
                        <p>Chat cleared. How can I help you with your medical questions today?</p>
                        <div class="warning-box">
                            <i class="fas fa-exclamation-circle"></i>
                            <span>Remember: For emergencies, call 911 immediately!</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

// Voice input (basic implementation)
function toggleVoice() {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        
        recognition.lang = 'en-US';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;
        
        recognition.start();
        
        recognition.onresult = function(event) {
            const speechResult = event.results[0][0].transcript;
            document.getElementById('userInput').value = speechResult;
            sendMessage();
        };
        
        recognition.onerror = function(event) {
            alert('Voice recognition error. Please try again or type your question.');
        };
    } else {
        alert('Voice recognition is not supported in your browser. Please type your question.');
    }
}

// Modal functions
function showAbout() {
    document.getElementById('aboutModal').style.display = 'flex';
}

function showPrivacy() {
    alert('Privacy Policy: We do not store any of your personal information or chat history. All conversations are private and local to your browser.');
}

function showContact() {
    alert('For support or questions, please contact: support@medicare-ai.com\n\nNote: This is a demo - do not use for actual medical emergencies.');
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const aboutModal = document.getElementById('aboutModal');
    if (event.target === aboutModal) {
        aboutModal.style.display = 'none';
    }
};