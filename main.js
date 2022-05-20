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
const questions = document.getElementsByClassName("question");

questionsData.forEach((q) => {
 const div = document.createElement("div");
 const h2 = document.createElement("h2")
 div.setAttribute("class", "question");
 document.body.append(div);
 h2.innerHTML = q.question;
 div.append(h2);

 q.options.forEach((option, index) => {
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

const buttons = document.getElementsByClassName("option");
Array.from(buttons).forEach((button) => {
    button.addEventListener("click", () => {
        if (button.getAttribute("data-correct")) {
           if (currentQuestion < questions.length - 1) {
            showNewQuestion();
            alert("correct")
           } else {
            clearInterval(interval)
            timer.innerHTML = 10;
            console.log("no more questions");
           }
        } else {
            if (currentQuestion < questions.length - 1) {
               showNewQuestion();
               alert("incorrect")
            } else {
                clearInterval(interval)
                timer.innerHTML = 10;
                alert("no more questions")
            }

        }
    })
});

const timer = document.createElement("h3");
timer.innerHTML = 10;
document.body.append(timer);

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
            Array.from(buttons).forEach((button) => button.setAttribute("disabled", true))
        }
    }, 1000)
}

startInterval();

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