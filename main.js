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

const timer = document.createElement("h3");
timer.innerHTML = 10;
document.body.append(timer);

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
  })
});

const buttons = document.getElementsByClassName("option");
const questions = document.getElementsByClassName("question");
questions[currentQuestion].style.display = "block";
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", () => {
    if (button.getAttribute("data-correct")) {
      alert("correct");
    } else {
      alert("incorrect");
    }

    if (currentQuestion < questions.length - 1) {
      questions[currentQuestion].style.display = "none";
      currentQuestion++;
      questions[currentQuestion].style.display = "block";

      // reset interval
      clearInterval(interval);
      timer.innerHTML = 10;
      startInterval();
    } else {
      alert("no more questions");
      clearInterval(interval);
    }
  })
});

startInterval();
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
