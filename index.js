const background = [
    'url("backgrounds/background1-main.jpg")',
    'url("backgrounds/background2-main.jpg")',
    'url("backgrounds/background3-main.jpg")',
    'url("backgrounds/background4-main.jpg")',
    'url("backgrounds/background5-main.jpg")'
];

function getRandomBackground() {
  const index = Math.floor(Math.random() * background.length);
  return background[index];
}

document.body.style.backgroundImage = getRandomBackground();

setInterval(() => {
  document.body.style.backgroundImage = getRandomBackground();
}, 7000);

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