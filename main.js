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
];

questionData.forEach((q) => {
  const div = document.createElement("div");
  div.setAttribute("class", "question");
  document.body.append(div);
  const h2 = document.createElement("h2");
  h2.innerHTML = q.question;
  div.append(h2);
});
