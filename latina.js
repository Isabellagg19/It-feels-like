const funfacts = [
    "Shakira began writing songs and poems when she was very young. In fact, by the age of four, she was already creating her own lyrics.",
    "Bad Bunny has become one of the most streamed artists worldwide without mainly singing in English, something that was very uncommon in the past.",
    "The Carnival of Rio de Janeiro in Brazil is considered the largest carnival in the world, with millions of people attending each year.",
    "Tango, famous for its elegant and dramatic dance style, was born between Argentina and Uruguay, in the popular neighborhoods near the Río de la Plata.",
    "The best latin urban album category at the GRAMMY's was Introduced In 2007, and the winner was Calle 13 with their Hip Hop album Residente o Visitante",
    "Karol G was the first latin female singer to headline  the Coachella music festival.",
    "In addition to traditional and folk music, Latin America has also contributed significantly to modern music styles.",
    "Bad Bunny set history on the Billboard charts by scoring the first all-Spanish album ( El Último Tour del Mundo ) to hit No. 1 on the all-genre Billboard.",
    "Bruno Mars, the pop legend is of Puerto Rican descent on his father’s side and his real name is actually Peter Gene Hernandez."
];

const funfactbtn= document.getElementById("funfact-btn3");
const text= document.getElementById("facts3");

funfactbtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * funfacts.length);
  text.textContent = funfacts[randomIndex];
});