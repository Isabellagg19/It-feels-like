const funfacts= [
    "In 2017, Shape of You by Ed Sheeran became one of the most streamed songs in the history of Spotify.",
    "In 2014, J Balvin helped Latin reggaetón reach the global market with songs such as Ay Vamos.",
    "In 2014, songs like Happy and Bailando became worldwide anthems thanks to their cheerful and festive rhythms.",
    "Gangnam Style became so popular on YouTube that it literally broke the platform’s view counter, forcing YouTube to update its system."
];

const funfactbtn= document.getElementById("funfact-btn4");
const text = document.getElementById("facts4");

funfactbtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * funfacts.length);
  text.textContent = funfacts[randomIndex]; 
});