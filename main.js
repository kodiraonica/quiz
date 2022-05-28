const questionsData = [
  {
    question: "Kako se zoves?",
    options: ["Valentina", "Mia", "Bora"],
    answer: "Valentina",
  },
  {
    question: "Kako se prezivas?",
    options: ["Otocan", "Mianovic", "Boric"],
    answer: "Otocan",
  },
  {
    question: "Kako se prezivas 2?",
    options: ["Otocan", "Mianovic", "Boric"],
    answer: "Otocan",
  },
  {
    question: "Kako se prezivas 3?",
    options: ["Otocan", "Mianovic", "Boric"],
    answer: "Otocan",
  },
];
let currentQuestion = 0;
let interval;
let score = 0;
const timer = document.createElement("h3");
const buttons = document.getElementsByClassName("option");
const questions = document.getElementsByClassName("question");
const buttonStart = document.createElement("button");
const scoreElement = document.createElement("h4");

createStartButton();
getScoreFromLocalStorage();

function initGame() {
  buttonStart.remove();
  createResetButton();
  createTimer();
  showQuestion();
  onAnswerClick();
  createScoreElement();
}

function createStartButton() {
  buttonStart.setAttribute("class", "btn-start");
  buttonStart.innerHTML = "Start quiz";
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
        alert("no more questions");
        clearInterval(interval);
      }
    })
  });
}

function showQuestion() {
  questionsData.forEach((q) => {
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
    });
  });

  questions[currentQuestion].style.display = "block";
}

  function createTimer() {
    timer.innerHTML = 10;
    document.body.append(timer);
    startInterval();
  }

  function showNewQuestion() {
    questions[currentQuestion].style.display = "none";
    currentQuestion++;
    questions[currentQuestion].style.display = "block";

    // reset interval
  clearInterval(interval);
  timer.innerHTML = 10;
  startInterval();
}


function createResetButton() {
  const resetButton = document.createElement("button");
  resetButton.innerHTML = "reset game";
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
    if (timer.innerHTML > 0) {
      timer.innerHTML = timer.innerHTML - 1;
    } else {
      Array.from(buttons).forEach((button) =>
        button.setAttribute("disabled", true)
      );
    }
  }, 1000);
}

function createScoreElement() {
  scoreElement.innerHTML = "Your score";
  document.body.append(scoreElement);
}

function updateScore() {
  scoreElement.innerHTML = `Your score is ${score}`;
  localStorage.setItem("score", score);
}

function getScoreFromLocalStorage(){
  const userScore = localStorage.getItem("score");
  userScore && alert(`Your last score was ${userScore}`);
  // if (userScore) {
  //   alert(`Your last score was ${userScore}`);
  // }
}