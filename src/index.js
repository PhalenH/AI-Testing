import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



// const API_URL = "https://api.openai.com/v1/chat/completions"
// const API_Key = process.env.my_API_KEY

// function displayResult() {
//     const input = document.getElementById('inputField').value;
//     const resultBox = document.getElementById('resultBox');
//     resultBox.value = `You entered: ${input}`;
// }

// const data = {
//     model: 'text-davinci-003',
//     prompt: '',
//     max_tokens: 150,
//   };

// Make the API call using fetch
// fetch(API_URL, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer ${apiKey}`
//   },
//   body: JSON.stringify(data)
// })
// .then(response => response.json())
// .then(responseData => {
//   console.log(responseData.choices[0].text);
// })
// .catch(error => {
//   console.error('Error:', error);
// });
