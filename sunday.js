const funfacts= [
    "There are more possible chess games than atoms in the observable universe.",
    "The moon is slowly moving away from Earth every year.",
    "Cows have best friends and can become stressed when separated from them.",
    "The Eiffel Tower can grow taller during hot days because metal expands with heat."
];

const funfactbtn= document.getElementById("funfact-btn5");
const text= document.getElementById("facts5");

funfactbtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * funfacts.length);
  text.textContent = funfacts[randomIndex]; 
});
