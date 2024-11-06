function sendMessage() {
    const userInput = document.getElementById("user-input");
    const message = userInput.value.trim();

    if (message) {
        // Add user message to chat
        addMessageToChat(message, "user-message");

        // Clear input field
        userInput.value = "";

        // Generate bot response
        setTimeout(() => {
            const botResponse = getBotResponse(message);
            addMessageToChat(botResponse, "bot-message");
        }, 500);
    }
}

function addMessageToChat(message, className) {
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");
    messageElement.className = `message ${className}`;
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);

    // Scroll to the latest message
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(message) {
    // Simple bot responses (you can customize or expand this)
    if (message.toLowerCase().includes("hello")) {
        return "Hi there! How can I help you today?";
    } else if (message.toLowerCase().includes("how are you")) {
        return "I'm just a bot, but thanks for asking!";
    } else {
        return "I'm here to chat! Ask me anything.";
    }
}
