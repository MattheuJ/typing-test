
window.onload = function(){
  const wordList = ['against', 'too', 'help', 'stop', 'who', 'caught'];
  var chosenWord = wordList[getRandomInt(3)];
  const chosenWordElement = document.getElementById("displayWord");

  console.log(chosenWord)

  document.getElementById('displayWord').innerHTML = chosenWord;

  const wordInput = document.getElementById("wordInput");

  wordInput.addEventListener("keypress", function(event){
    if (event.key == " ") {
      userInput = event.target.value;
      console.log(userInput);
      if (userInput == chosenWord) {
        chosenWordElement.style.color = "green";
      } else {
        chosenWordElement.style.color = "red";
      }
    }
  });

};


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}