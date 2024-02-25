const API_URL = "https://api.adviceslip.com/advice";

const adviceId = document.querySelector("#nro");
const adviceText = document.querySelector(".card-text");

fetch(`${API_URL}`)
    .then((response) => response.json())
    .then((e)=> {
        adviceId.innerHTML= "Advice #" + e.slip.id;
        adviceText.innerHTML= '"' + e.slip.advice + '"';
});

document.getElementById("dice").addEventListener("click", (e) => {
    window.location.reload();
});