


const socket = io(); // Define socket outside of the function

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim();
    
    if (message !== '') {
        // Emit the message to the server
        socket.emit('user-message', message);
        // Clear the input after emitting the message
        messageInput.value = '';
    }
}

// Event listener
document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('message-input').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        sendMessage();
    }
});

const chatMessages = document.querySelector('.chat-messages');

// Listen for incoming messages
socket.on('message', (message) => {
    // Create a new message element
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = message;

    // Append the message element to the chat
    chatMessages.appendChild(messageElement);

    // Scroll to the bottom of the chat
    chatMessages.scrollTop = chatMessages.scrollHeight;
});
