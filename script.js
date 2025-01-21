
window.onload = function(){
  const wordList = ['against', 'too', 'help', 'stop', 'who', 
                    'caught', "team", "food", "California", "Uganda", 
                    "town", "made", "how", "claim", "fortune",
                    "cow", "dog", "wow", "city", "state",
                    "Florida", "club", "music", "time", "hack"];
  typingPrompt = "";
  typingPromptList = [];
  chosenWord = wordList[getRandomInt(3)];
  const chosenWordElement = document.getElementById("displayWord");

  for (let i = 0; i < 5; i++){
    chosenWord = wordList[getRandomInt(20)];

    typingPromptList.push(chosenWord);

    newParagraph = document.createElement("p");

    newParagraph.textContent = chosenWord;

    document.body.appendChild(newParagraph);
    
    if(i == 0) {
      typingPrompt = typingPrompt + chosenWord;
    } else {
      typingPrompt = typingPrompt + ` ${chosenWord}`
      }

  }

  console.log(typingPrompt)

  document.getElementById('displayWord').innerHTML = typingPrompt;

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