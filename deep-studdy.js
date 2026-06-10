const funfacts= [
    "The Sun is actually white, the Earth's atmosphere scatters blue light, making the sun look yellow to us. In space, it shines in pure white",
    "Giraffes are lightning magnets, due to their height, giraffes are 30 times more likely to get hit by lightning than humans",
    "An average storm cloud weighs around one million tons. That's the equivalent of about 100 elephants floating overhead!",
    "On Venus, a day takes 243 Earth days to complete, while its orbit around the Sun lasts only 225 Earth days.",
    "The earth rotation is slowing down. This means that, on average, the length of a day increases by around 1.8 seconds per century.",
    "While they are rich in nerve endings and may play a role in social bonding,mscientists argue that earlobes don’t have any true biological purpose. ",
    "The world’s oldest cat lived to 38 years and three days old, it's name was Creme Puff",
    "Polar Bears are not actually white, I mean their fur is white but underneath it, their skin they have a jet-black skin",
    "If you don't like the sound of your own voice it could be because of the bones in your head because they make our voice sound deeper."

];

const funfactbtn = document.getElementById("funfact-btn1");
const text= document.getElementById("facts1");

funfactbtn.addEventListener("click", () => {

  const randomIndex = Math.floor(Math.random() * funfacts.length);
  text.textContent = funfacts[randomIndex];
});