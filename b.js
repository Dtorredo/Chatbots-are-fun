document.addEventListener("DOMContentLoaded", function() {
    let userInput = document.getElementById("user-input");
    let sendButton = document.getElementById("send-button");
    let chatBox = document.getElementById("chat-messages");

    sendButton.style.display = "block";  // Ensure send button is visible

    function appendMessage(sender, message) {
        if (!message) return; // Prevent displaying "undefined"
        let messageDiv = document.createElement("div");
        messageDiv.classList.add("message", sender);
        messageDiv.innerHTML = `<p>${message}</p>`;
        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight;  // Auto-scroll
    }

    async function sendMessage() {
        let userText = userInput.value.trim();
        if (userText === "") return;

        appendMessage("user", userText); // Show user message

        try {
            let response = await fetch("http://127.0.0.1:5000/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: userText })
            });

            let data = await response.json();
            console.log("Chatbot response:", data); // Debugging log

            // Show only one response
            appendMessage("bot", data.response || "Sorry, I didn't understand.");

        } catch (error) {
            appendMessage("bot", "Error: Could not connect to the chatbot.");
            console.error("Error:", error);
        }

        userInput.value = ""; // Clear input
    }

    sendButton.addEventListener("click", sendMessage);
    userInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});
