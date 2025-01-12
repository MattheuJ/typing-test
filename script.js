
window.onload = function(){
  wordList = ['against', 'too', 'help']
  chosenWord = wordList[getRandomInt(3)]

  console.log(chosenWord)

  document.getElementById('displayWord').innerHTML = chosenWord;

  wordByLetter = []

  for (let i = 0; i < chosenWord.length; i++){
    wordByLetter.push(chosenWord[i])
  }

  console.log(wordByLetter)

  document.addEventListener("keydown", event => {
  // event.key
  
  });

};

// document.addEventListener("keydown", event => {
//   console.log(`Key down = ${event.key}`);
// });

// document.addEventListener("keyup", event => {
//   console.log(`key up = ${event.key}`);
// });

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}