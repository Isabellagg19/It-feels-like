const funfacts = [
    "Shakira began writing songs and poems when she was very young. In fact, by the age of four, she was already creating her own lyrics.",
    "Bad Bunny has become one of the most streamed artists worldwide without mainly singing in English, something that was very uncommon in the past.",
    "The Carnival of Rio de Janeiro in Brazil is considered the largest carnival in the world, with millions of people attending each year.",
    "Tango, famous for its elegant and dramatic dance style, was born between Argentina and Uruguay, in the popular neighborhoods near the Río de la Plata."
];

const funfactbtn= document.getElementById("funfact-btn3");
const text= document.getElementById("facts3");

funfactbtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * funfacts.length);
  text.textContent = funfacts[randomIndex];
});