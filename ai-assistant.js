// Neon AI Core Logic
let aiActive = false;

function toggleAI() {
    const window = document.getElementById('aiWindow');
    aiActive = !aiActive;
    if (aiActive) {
        window.classList.add('active');
        document.getElementById('aiInput').focus();
    } else {
        window.classList.remove('active');
    }
}

function handleAIKey(e) {
    if (e.key === 'Enter') sendAIMessage();
}

const AI_RESPONSES = {
    "hello": "Greetings. I am online and ready to assist with your tech transition.",
    "hi": "Hello. How can I augment your hardware ecosystem today?",
    "phone": "Our smartphone collection features the latest 5G titan-class devices. You can find them in the 'Phones' section.",
    "iphone": "The iPhone 15 Pro is currently our most sought-after mobile unit. Would you like to view the specs?",
    "laptop": "NEON's laptop array provides unmatched computational power. I recommend the Neon Blade for pro workflows.",
    "gaming": "For elite performance, our Gaming Gear section offers low-latency peripherals and high-refresh consoles.",
    "shipping": "We provide hyper-speed global shipping. Most gear arrives within 3-5 standard Earth days.",
    "help": "I can provide hardware specs, shipping status, and product recommendations. What are you looking to upgrade?",
    "thanks": "You are welcome. Operational efficiency is my primary directive.",
    "default": "I've processed your query but don't have a specific data point. Would you like to connect with a human technician via WhatsApp?"
};

function sendAIMessage() {
    const input = document.getElementById('aiInput');
    const msg = input.value.trim();
    if (!msg) return;

    appendMessage('user', msg);
    input.value = '';

    // Simulate thinking
    setTimeout(() => {
        const response = getAIResponse(msg);
        appendMessage('ai', response);
    }, 800);
}

function getAIResponse(query) {
    const q = query.toLowerCase();
    for (const key in AI_RESPONSES) {
        if (q.includes(key)) return AI_RESPONSES[key];
    }
    return AI_RESPONSES["default"];
}

function appendMessage(type, text) {
    const container = document.getElementById('aiMessages');
    const div = document.createElement('div');
    div.className = `message ${type}`;
    div.innerHTML = `<p>${text}</p>`;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
}
