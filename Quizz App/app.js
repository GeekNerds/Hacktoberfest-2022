const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    question: "Inside which HTML element do we put the JavaScript??",
    a: "<script>",
    b: "<javascript>",
    c: "<js>",
    d: "<scripting>",
    correct: "a",
  },
  {
    question: "How we can alert hello world?",
    a: "alertbox('hello world')",
    b: "alert('hello world')",
    c: "myalert('hello world')",
    d: "none of the above",
    correct: "b",
  },
  {
    question: "HTML is used for?",
    a: "Build the Website/App",
    b: "Programming",
    c: "Hacking",
    d: "none of the above",
    correct: "a",
  },
  {
    question: "Best place to add script tag in HTML?",
    a: "Head",
    b: "Body",
    c: "Bottom of the HTML",
    d: "Both A and B",
    correct: "d",
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    a: "<script href='xxx.js'>",
    b: "<script name='xxx.js'>",
    c: "<script src='xxx.js'>",
    d: "<script file='xxx.js'>",
    correct: "c",
  },
  {
    question: "Choose the correct HTML tag for the largest heading?",
    a: "<heading>",
    b: "<h6>",
    c: "<head>",
    d: "<h1>",
    correct: "d",
  },
];

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

const deselectAnswers = () => {
  answerElements.forEach((answer) => (answer.checked = false));
};

const getSelected = () => {
  let answer;
  answerElements.forEach((answerElement) => {
    if (answerElement.checked) answer = answerElement.id;
  });
  return answer;
};

const loadQuiz = () => {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionElement.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
};

loadQuiz();

submitButton.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) score++;
    currentQuiz++;
    if (currentQuiz < quizData.length) loadQuiz();
    else {
      quiz.innerHTML = `
              <h2>You answered ${score}/${quizData.length} questions correctly</h2>
              <button onclick="history.go(0)">Play Again</button>
          `;
    }
  }
});
