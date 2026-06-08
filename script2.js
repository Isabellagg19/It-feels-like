function typewriter(elementId, text, speed = 100) {
    let i = 0;
    const el= document.getElementById(elementId);
     if (!el) return;

    function typing() {
        if (i < text.length) {
            el.textContent += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

typewriter("message1", "Deep Study", 100);
typewriter("message2", "Disney Nostalgia", 70);
typewriter("message3", "Latina Party", 100);
typewriter("message4", "Bring Back The Old Bangers", 60);
typewriter("message5", "Sunday Chill", 100);
typewriter("message6", "Workout Vibes", 100);