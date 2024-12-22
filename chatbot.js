

const chatMessages = document.getElementById("chat-messages");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");

// Extended chatbot responses
const responses = {
    "hello": "Hi! How are you?",
    "hi": "Hello!",
    "how are you": "I'm good, thanks!",
    "what is your name": "I'm Chatbot!",
    "what is 20+10":"answer is 30",
    "what can you do": "I can chat, tell jokes, and provide information.",
    "joke": "Why did the computer go to the doctor? It had a virus!",
    "who created you": "I was created by a team of developers.",
    "what is your purpose": "My purpose is to assist and entertain users.",
    "default": "Sorry, I didn't understand that.",
    "thanks": "You're welcome!",
    "goodbye": "Goodbye! Have a great day!",
    "help": "What do you need help with?"
};

sendButton.addEventListener("click", () => {
    const userMessage = userInput.value.trim();
    if (userMessage !== "") {
        // Display user message
        const userMessageElement = document.createElement("div");
        userMessageElement.classList.add("message", "user-message");
        userMessageElement.textContent = userMessage;
        chatMessages.appendChild(userMessageElement);

        // Get chatbot response
        let response;
        if (userMessage.toLowerCase() in responses) {
            response = responses[userMessage.toLowerCase()];
        } else {
            response = responses.default;
        }

        // Display chatbot response
        const botMessageElement = document.createElement("div");
        botMessageElement.classList.add("message", "bot-message");
        botMessageElement.textContent = response;
        chatMessages.appendChild(botMessageElement);

        // Scroll to bottom of chat messages
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Clear user input
        userInput.value = "";
    }
});


