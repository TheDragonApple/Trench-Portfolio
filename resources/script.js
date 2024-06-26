
const startButton = document.getElementById("start-button");
const nav = document.getElementById("nav-id");
const headshot = document.getElementById("headshot");
const text = document.getElementById("p-tag");

startButton.addEventListener("click", appear => {
    startButton.style.display = "none";
    headshot.style.opacity = "1";
    headshot.style.transition = "opacity 5s";
    nav.style.opacity = "1";
    nav.style.transition = "opacity 2s";
    text.style.opacity = "1";
    text.style.transition = "opacity 3s";
});