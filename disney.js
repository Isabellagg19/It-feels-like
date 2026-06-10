const funfacts = [
    "During the first years after the creation of Mickey Mouse, Walt Disney was the one who voiced him.",
    "Dumbo is Disney’s shortest animated classic film, with a runtime of just 64 minutes.",
    "Walt Disney holds the record for the most Academy Awards in history, winning 26 Oscars.",
    "The name of WALL-E is actually a tribute to Walt Disney, whose full name was Walter Elias Disney.",
    "The Little Mermaid features over a million hand painted bubbles.",
    "Rapunzel’s 70-foot-long hair took over 30 animators and engineers to animate.",
    "Until Brave, Ariel was the only Disney princess to have siblings, the rest are all only children.",
    "Ursula from “The Little Mermaid” is based on the drag queen Divine.",
    "Pluto is named after the dwarf planet Pluto, which was discovered in the same year.",
    "Donald Duck is banned in Finland because he doesn't wear pants."
];

const funfactbtn= document.getElementById("funfact-btn2");
const text= document.getElementById("facts2");

funfactbtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * funfacts.length);
  text.textContent = funfacts[randomIndex];
});