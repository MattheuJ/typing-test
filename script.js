
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
                    "build", "mouth", "other", "who", "final"];
  typingPromptList = [];

  for (let i = 0; i < 20; i++){
    chosenWord = wordList[getRandomInt(50)];

    console.log(chosenWord)

    typingPromptList.push(chosenWord);

    newParagraph = document.createElement("p");

    newParagraph.textContent = chosenWord;

    document.body.appendChild(newParagraph);

    newParagraph.id = `word ${i}`;

    newParagraph.classList.add("word");

  }

  const wordInput = document.getElementById("wordInput");
  const wordForm = document.getElementById("wordForm");
  counter = 0;
  currentWordElement = document.getElementById(`word ${counter}`);

  wordInput.addEventListener("keypress", function(event){
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
        counter = counter + 1
        currentWordElement = document.getElementById(`word ${counter}`);
        
      } else {
        currentWordElement.style.color = "red";
        counter = counter + 1
        currentWordElement = document.getElementById(`word ${counter}`);
      }

    }
  });

};


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}