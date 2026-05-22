const funfacts= [
    "The Sun is actually white, the Earth's atmosphere scatters blue light, making the sun look yellow to us. In space, it shines in pure white",
    "Giraffes are lightning magnets, due to their height, giraffes are 30 times more likely to get hit by lightning than humans",
    "An average storm cloud weighs around one million tons. That's the equivalent of about 100 elephants floating overhead!",
    "On Venus, a day takes 243 Earth days to complete, while its orbit around the Sun lasts only 225 Earth days."
];

const funfactbtn = document.getElementById("funfact-btn1");
const text= document.getElementById("facts1");

funfactbtn.addEventListener("click", () => {

  const randomIndex = Math.floor(Math.random() * funfacts.length);
  text.textContent = funfacts[randomIndex];
});