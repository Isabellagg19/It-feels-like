const funfacts= [
    "In 2017, SHAPE OF YOU by Ed Sheeran became one of the most streamed songs in the history of Spotify.",
    "In 2014, J Balvin helped Latin reggaetón reach the global market with songs such as AY VAMOS.",
    "In 2014, songs like HAPPY and BAILANDO became worldwide anthems thanks to their cheerful and festive rhythms.",
    "GANGNAM STYLE became so popular on YouTube that it literally broke the platform’s view counter, forcing YouTube to update its system.",
    "Justin Bieber became the first artist ever to occupy the entire Top 3 in the Official Singles Chart, with LOVE YOURSELF, SORRY and WHAT DO YOU MEAN.",
    "The longest consecutive stint at Number 1 on the Official Albums Chart is shared by David Bowie's Blackstar and Adele's 25 – both managed a three-week run.",
    "CALL ME MAYBE by Carly Rae Jepsen hit #1 on the Billboard Hot 100 and inspired thousands of parodies ",
    "In 2016, Drake's track ONE DANCE became the first song ever to reach 1 billion streams on Spotify.",
    "One of the most iconic songs of Justin Bieber LOVE YOURSELF was actually gritten by the artist Ed Sheeran",
    "Avicii started producing at the age of 16, teaching himself to use a pirated copy of FL Studio."
];

const funfactbtn= document.getElementById("funfact-btn4");
const text = document.getElementById("facts4");

funfactbtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * funfacts.length);
  text.textContent = funfacts[randomIndex]; 
});