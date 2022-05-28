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

let currentQuestion = 0;
let interval;
const questions = document.getElementsByClassName("question");

const timer = document.createElement("h3");
timer.innerHTML = 10;
document.body.append(timer);

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

const buttons = document.getElementsByClassName("option");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", () => {
    if (button.getAttribute("data-correct")) {
      alert("correct");
    } else alert("incorrect");

    if (currentQuestion < questions.length - 1) {
      // ovim pokazujemo iduca pitanja
      questions[currentQuestion].style.display = "none";
      currentQuestion++;
      questions[currentQuestion].style.display = "block";

      //reset interval
      clearInterval(interval);
      timer.innerHTML = 10;
    } else {
      //znači da smo došli do kraja pitanja
      alert("no more questions");
      clearInterval(interval);
    }
  });
});

startInterval();
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
