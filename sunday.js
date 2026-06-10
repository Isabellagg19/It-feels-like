const funfacts= [
    "There are more possible chess games than atoms in the observable universe.",
    "The moon is slowly moving away from Earth every year.",
    "Cows have best friends and can become stressed when separated from them.",
    "The Eiffel Tower can grow taller during hot days because metal expands with heat.",
    "During his entire lifetime, Vincent Van Gogh is known to have sold only a single painting.",
    "There are more stars in the universe than there are grains of sand on earth.",
    "Babies are born with 275 to 300 bones. By the time they're adults, they only have 206 since some bones fuse together as they grow.",
    "At around 22 months, elephants have the longest gestation period of any mammal on earth.",
    "In 1971, astronaut Alan Shepard played golf on the moon.",
    "The average person blinks 14 to 17 times per minute."
];

const funfactbtn= document.getElementById("funfact-btn5");
const text= document.getElementById("facts5");

funfactbtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * funfacts.length);
  text.textContent = funfacts[randomIndex]; 
});
