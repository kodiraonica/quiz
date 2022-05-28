//array
const questionData = [
  {
    question: "Kako se zoves?",
    options: ["Stef", "Jura", "Pero"],
    answer: "Stef",
  },
  {
    question: "Kako se prezivas?",
    options: ["Stefic", "Juric", "Peric"],
    answer: "Stefic",
  },
  {
    question: "Kako se prezivas2?",
    options: ["Stefic", "Juric", "Peric"],
    answer: "Stefic",
  },
  {
    question: "Kako se prezivas3?",
    options: ["Stefic", "Juric", "Peric"],
    answer: "Stefic",
  },
];

//globalne varijable
let currentQuestion = 0;
let interval;
let score = 0;
const timer = document.createElement("h3");
const questions = document.getElementsByClassName("question");
const buttons = document.getElementsByClassName("option");
const buttonStart = document.createElement("button");
const scoreElement = document.createElement("h4");

createStartButton();

//funkcije
function initGame() {
  buttonStart.remove();
  createResetButton();
  createScoreElement();
  createTimer();
  showQuestions();
  onAnswerClick();
}

function createStartButton() {
  buttonStart.setAttribute("class", "btn-start");
  buttonStart.innerHTML = "Start Quiz";
  document.body.append(buttonStart);
  buttonStart.addEventListener("click", initGame);
}

function onAnswerClick() {
  Array.from(buttons).forEach((button) => {
    button.addEventListener("click", () => {
      if (button.getAttribute("data-correct")) {
        alert("correct");
        score++;
        updateScore();
      } else {
        alert("incorrect");
        score--;
        updateScore();
      }

      if (currentQuestion < questions.length - 1) {
        showNewQuestion();
      } else {
        //znači da smo došli do kraja pitanja
        alert("no more questions");
        clearInterval(interval);
      }
    });
  });
}

function showQuestions() {
  questionData.forEach((q) => {
    const div = document.createElement("div");
    div.setAttribute("class", "question");
    document.body.append(div);
    const h2 = document.createElement("h2");
    h2.innerHTML = q.question;
    div.append(h2);

    q.options.forEach((option) => {
      const button = document.createElement("button");
      button.setAttribute("class", "option");
      button.innerHTML = option;
      div.append(button);

      if (option === q.answer) {
        button.setAttribute("data-correct", true);
      }
      Array.from(questions).forEach((question) => {
        question.append(button);
        questions[currentQuestion].style.display = "block";
      });
    });
  });
}

function createTimer() {
  timer.innerHTML = 10;
  document.body.append(timer);
  startInterval();
}

function showNewQuestion() {
  // ovim pokazujemo iduca pitanja
  questions[currentQuestion].style.display = "none";
  currentQuestion++;
  questions[currentQuestion].style.display = "block";

  //reset interval
  clearInterval(interval);
  timer.innerHTML = 10;
  startInterval();
}

function createResetButton() {
  const resetButton = document.createElement("button");
  resetButton.innerHTML = "reset";
  resetButton.setAttribute("class", "btn-reset");
  document.body.append(resetButton);

  resetButton.addEventListener("click", () => {
    clearInterval(interval);
    timer.innerHTML = 10;
    startInterval();
    questions[currentQuestion].style.display = "none";
    currentQuestion = 0;
    questions[currentQuestion].style.display = "block";
    Array.from(buttons).forEach((button) => button.removeAttribute("disabled"));
    score = 0;
    updateScore();
  });
}

function startInterval() {
  interval = setInterval(() => {
    if (timer.innerHTML > 0) timer.innerHTML = timer.innerHTML - 1;
    else {
      clearInterval(interval);
      Array.from(buttons).forEach((button) =>
        button.setAttribute("disabled", true)
      );
    }
  }, 1000);
}

function createScoreElement() {
  scoreElement.innerHTML = "Your score is ";
  document.body.append(scoreElement);
}

function updateScore() {
  scoreElement.innerHTML = `Your score is ${score}`;
  localStorage.setItem("score", score);
}

function getScoreFromLocalStorage() {
  const userScore = localStorage.getItem("score");
  //if (userScore) {
  //ovo možemo umjesto if-a
  userScore && alert(`Your last score was ${userScore}`);
  //}
}
