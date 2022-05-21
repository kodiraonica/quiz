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
  });
});

const buttons = document.getElementsByClassName("option");
const questions = document.getElementsByClassName("question");
// ovime prikazujemo prvo pitanje
questions[currentQuestion].style.display = "block";

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
      clearInterval(interval);
      timer.innerHTML = 10;
      startInterval();
    }
  });
});

startInterval();
function startInterval() {
  interval = setInterval(() => {
    if (timer.innerHTML > 0) timer.innerHTML = timer.innerHTML - 1;
  }, 1000);
}
