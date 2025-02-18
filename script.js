
window.onload = function(){
  const wordList = ['against', 'too', 'help', 'stop', 'who', 
                    'caught', "team", "food", "California", "Uganda", 
                    "town", "made", "how", "claim", "fortune",
                    "cow", "dog", "wow", "city", "state",
                    "Florida", "club", "music", "time", "hack",
                    "million", "thigh", "chicken", "steak", "focus",
                    "take", "place", "scare", "half", "fun",
                    "learn", "small", "question", "where", "is",
                    "research", "survive", "test", "internet", "use",
                    "build", "mouth", "other", "who", "final", 
                    "model", "value", "up", "down", "cute",
                    "thing", "two", "one", "hand", "share",
                    "love", "moment", "work", "fake", "back"];
  typingPromptList = [];
  mainContainer = document.getElementById("mainContainer");
  const justTheWords = document.getElementById("justTheWords");
  const wordInput = document.getElementById("wordInput");
  const timer = document.getElementById("timer");

  for (let i = 0; i < 20; i++){
    chosenWord = wordList[getRandomInt(65)];

    console.log(chosenWord);

    typingPromptList.push(chosenWord);

    newParagraph = document.createElement("p");

    newParagraph.textContent = chosenWord;

    justTheWords.appendChild(newParagraph);

    newParagraph.id = `word ${i}`;

    newParagraph.classList.add("word");

  };

  counter = 0;
  currentWordElement = document.getElementById(`word ${counter}`);
  
  wordInput.addEventListener("keypress", function(event){

    if (event.key == 'Enter'){
      event.preventDefault();
    }

    if (event.key == " ") {
      userInput = event.target.value;
      console.log(`${userInput} (user)`);
      wordForm.reset();
      console.log(`${userInput[0]}`);
      
      if (userInput[0] == " "){
        splitUserInput = userInput.split('');
        splitUserInput.splice(0,1);
        userInput = splitUserInput.join('');
      }

      if (userInput == typingPromptList[counter]) {
        currentWordElement.style.color = "green";
        counter = counter + 1;
        currentWordElement = document.getElementById(`word ${counter}`);
        
      } else {
        currentWordElement.style.color = "red";
        counter = counter + 1;
        currentWordElement = document.getElementById(`word ${counter}`);
      }

    };
  });

};


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function startTimer(timeSelected){

}

function generateNewWords(){
  
}