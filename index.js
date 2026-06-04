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