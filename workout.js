const funfacts= [
    "Physical activity can increase your performance by up to 15% if you listen to your favorite music while you train. (A perfect fact for this website:) )",
    "A good laugh uses multiple muscle groups and increases your heart rate. Some researchers estimate that 10–15 minutes of laughter can burn a small number of calories, so laughing is actually a great physical activity.",
    "Shivering is basically an involuntary excersise, when you're cold, your muscles rapidly contract and relax to generate heat, burning energy without you consciously moving.",
    "Your muscles are powered by really tiny electrical signs, every movement even blinking starts with electrical messages traveling from your brain through your nervous system.",
    "Humans are among the best endurance runners on earth, maybe not the fastest but thanks to be able to sweat efficently we can regulate our temperature, and run long distances.",
    "When you sweat, your pores cleanse themselves of accumulated dirt, which improves your complexion and can help prevent acne.",
    "During practicing yoga by imitating postures from nature (such as the tree, the cobra, or the warrior), the brain adopts the strength and stability of that element.",
    "swimming is one of the few sports that activates absolutely all major muscle groups at the same time.",
    "Running is the exercise that most stimulates neurogenesis, that is, the birth of new neurons."
];


const funfactbtn= document.getElementById("funfact-btn6");
const text= document.getElementById("facts6");

funfactbtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * funfacts.length);
  text.textContent = funfacts[randomIndex]; 
});