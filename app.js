const userInput = document.getElementById('user-input');
const wordCount = document.getElementById('word-count');

userInput.addEventListener('input', () => {
    const text = userInput.value.trim();
    const words = text.split(/\s+/);
    wordCount.textContent = words.length;
});