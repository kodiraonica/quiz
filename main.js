const questionsData = [
    {
        question: "What is Javascript?",
        options: ["Cake", "Animal", "Language"],
        answer: "Language"
    },
    {
        question: "What is python",
        options: ["Potato", "Fruit", "Language"],
        answer: "Language"
    },
    {
        question: "What is CSS?",
        options: ["Cascade", "Stairs", "Elevator"],
        answer: "Cascade"
    }
]
let interval;
let currentQuestion = 0;
let score = 0;
let scoreElement;
const questions = document.getElementsByClassName("question");
const timer = document.createElement("h3");
const buttonStart = document.createElement("button");
const buttons = document.getElementsByClassName("option");

buttonStart.innerHTML = "Start Quiz";
buttonStart.setAttribute("class", "btn-start");
document.body.append(buttonStart);
buttonStart.addEventListener("click", initGame);

getScoreFromLocalStorage();

function initGame(){
    createTimer();
    createResetButton();
    createScoreElement();
    updateScore();

    questionsData.forEach((q) => {
        const div = document.createElement("div");
        const h2 = document.createElement("h2")
        div.setAttribute("class", "question");
        document.body.append(div);
        h2.innerHTML = q.question;
        div.append(h2);
       
        q.options.forEach((option) => {
           const button = document.createElement("button");
           button.setAttribute("class", "option");
           button.innerHTML = option;
           if (option === q.answer) {
               button.setAttribute("data-correct", true)
           }
           Array.from(questions).forEach((question) => {
               question.append(button)
               questions[currentQuestion].style.display = "block";
           })
        })
       })
       
       Array.from(buttons).forEach((button) => {
           button.addEventListener("click", () => {
               if (button.getAttribute("data-correct")) {
                  if (currentQuestion < questions.length - 1) {
                   showNewQuestion();
                   score++
                   updateScore();
                  } else {
                    score++
                    updateScore();
                    clearInterval(interval);
                    alert("no more questions");
                  }
               } else {
                   if (currentQuestion < questions.length - 1) {
                      showNewQuestion();
                      score--
                      updateScore();
                   } else {
                       score--
                       updateScore();
                       clearInterval(interval);
                       alert("no more questions")
                   }
       
               }
           })
       });
}

function getScoreFromLocalStorage() {
   const userScore = localStorage.getItem("score");
   userScore && alert(`Your last score was: ${userScore}`)
}

function updateScore() {
    scoreElement.innerHTML = `Your score is ${score}`;
    localStorage.setItem("score", score);
}

function createTimer(){
    timer.innerHTML = 10;
    document.body.append(timer);    
    startInterval();
}

function showNewQuestion() {
    questions[currentQuestion].style.display = "none";
    currentQuestion++
    questions[currentQuestion].style.display = "block";
    clearInterval(interval);
    timer.innerHTML = 10;
    startInterval();
}

function startInterval() {
    interval = setInterval(() => {
        if (timer.innerHTML > 0) {
            timer.innerHTML = timer.innerHTML - 1;
        } else {
            clearInterval(interval)
            Array.from(buttons).forEach((button) => button.setAttribute("disabled", true));
            alert("Game over");
        }
    }, 1000)
}

function createResetButton(){
    const resetButton = document.createElement("button");
    resetButton.innerHTML = "reset game"
    resetButton.setAttribute("class", "btn-reset");
    document.body.append(resetButton);
    resetButton.addEventListener("click", () => {
        clearInterval(interval);
        Array.from(buttons).forEach((button) => button.removeAttribute("disabled"));
        timer.innerHTML = 10;
        startInterval();
        questions[currentQuestion].style.display = "none";
        currentQuestion = 0;
        questions[currentQuestion].style.display = "block"
    })
}

function createScoreElement(){
    scoreElement = document.createElement("h4");
    document.body.append(scoreElement);
    scoreElement.innerHTML = "Your score";
}