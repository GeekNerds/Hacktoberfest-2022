var languages = [
  "python",
  "javascript",
  "mongodb",
  "json",
  "java",
  "html",
  "css",
  "c",
  "csharp",
  "golang",
  "kotlin",
  "php",
  "sql",
  "ruby",
];

let answer = "";
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

function pickWord() {
  answer = languages[Math.floor(Math.random() * languages.length)];
  
}

function dynamicButtonGenerator() {
  let buttonHtml = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .map(
      (letter) =>
        `
    
    <button class=" mt-10  bg-yellow-500 text-black px-4 p-2 hover:bg-orange-700 border-2 border-black
    
    
    " id='` +
        letter +
        `'onClick="guessHandler('` +
        letter +
        `')" > ` +
        letter +
        ` </button> `
    )
    .join("");

  document.getElementById("keyboard").innerHTML = buttonHtml;
}

function guessHandler(chosenLetter) {
  guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
  document.getElementById(chosenLetter).setAttribute("disabled", true);

  if (answer.indexOf(chosenLetter) >= 0) {
    guessedWord();
    checkifGameWon();
  } else if (answer.indexOf(chosenLetter) === -1) {
    mistakes++;
    updateMistakes();
    checkifGameLost();
    updateHangmanPicture();
  }
}

function updateHangmanPicture() {
  document.getElementById("hangmanPic").src = "./images/" + mistakes + ".png";
}

function checkifGameWon() {
  if (wordStatus === answer) {
    document.getElementById("keyboard").innerHTML = "You Won!!!";
  }
}

function checkifGameLost() {
  if (mistakes === maxWrong) {
    document.getElementById("wordSpotlight").innerHTML =
      "The answer was: " + answer;
    document.getElementById("keyboard").innerHTML = "You Lost  :(";
  }
}

function guessedWord() {
  wordStatus = answer
    .split("")
    .map((letter) => (guessed.indexOf(letter) >= 0 ? letter : " _ "))
    .join("");

  document.getElementById("wordSpotlight").innerHTML = wordStatus;
}

function updateMistakes() {
  document.getElementById("mistakes").innerHTML = mistakes;
}

function reset() {
  mistakes = 0;
  guessed = [];
  document.getElementById("hangmanPic").src = "./images/0.jpg";

  pickWord();
  guessedWord();
  updateMistakes();
  dynamicButtonGenerator();
  updateHangmanPicture();
}

document.getElementById("maxWrong").innerHTML = maxWrong;

pickWord();
dynamicButtonGenerator();
guessedWord();
