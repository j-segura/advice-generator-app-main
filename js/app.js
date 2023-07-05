const URL = 'https://api.adviceslip.com/advice';
const response = document.querySelector('#items');
const advice = document.getElementById('advice');
const adviceNum = document.getElementById('adviceNum');
const btn = document.getElementById('btn');

document.addEventListener('DOMContentLoaded', callAPI);

btn.addEventListener('click', callAPI);

// async await
async function callAPI() {
    
    const reponse = await fetch(URL);
    const data = await reponse.json();
    adviceNum.innerHTML = `Advice #${data.slip.id}`;
    advice.innerHTML = `"${data.slip.advice}"`;

}
