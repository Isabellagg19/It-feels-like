const colors = [
    "#a8bcf8a2",
    "#b5f9e1",
    "#e5c0f7a0",
    "#f4a5beb6",
    "#f6d8919f",
    "#f39494a3"
];

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index]
}

setInterval(() => {
    document.body.style.backgroundColor = getRandomColor();
}, 6000);

function typewriter(elementId, text, speed = 100) {
    let i = 0;
    const element= document.getElementById(elementId);
     if (!element) return;

    element.textContent = ""; 

    function typing() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

document.getElementById("btn1").addEventListener("mouseenter", () => {
typewriter("tooltip1", "Deep Study", 100);
});

document.getElementById("btn2").addEventListener("mouseenter", () => {
typewriter("tooltip2", "Disney Nostalgia", 100);
});

document.getElementById("btn3").addEventListener("mouseenter", () => {
typewriter("tooltip3", "Latina Party", 100);
});

document.getElementById("btn4").addEventListener("mouseenter", () => {
typewriter("tooltip4", "Bring Back The Old Bangers", 100);
});

document.getElementById("btn5").addEventListener("mouseenter", () => {
typewriter("tooltip5", "Sunday Chill", 100);
});

document.getElementById("btn6").addEventListener("mouseenter", () => {
typewriter("tooltip6", "Workout Vibes", 100);
});