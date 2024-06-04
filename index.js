const API_URL = "https://api.openai.com/v1/chat/completions"


function displayResult() {
    const input = document.getElementById('inputField').value;
    const resultBox = document.getElementById('resultBox');
    resultBox.value = `You entered: ${input}`;
}

