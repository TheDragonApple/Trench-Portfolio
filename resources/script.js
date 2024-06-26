
const startButton = document.getElementById("start-button");
const nav = document.getElementById("nav-id");
const headshot = document.getElementById("headshot");
const text = document.getElementById("p-tag");

startButton.addEventListener("click", appear => {
    startButton.style.display = "none";
    headshot.style.visibility = "visible";
    nav.style.visibility = "visible";
    text.style.visibility = "visible";
});