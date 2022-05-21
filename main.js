const questionsData =[
{
    questions:"Kako se zoves?",
    options: ["Stef","Jura","Pero"],
    answer:"Stef"

},

{
    questions:"Kako se prezivas?",
    options: ["Stefic","Juric","Peric"],
    answer:"Stefic"
},
]


questionsData.forEach((q) => {
    const div = document.createElement("div");
    div.setAttribute("class","question");
    document.body.append(div);
    const h2 = document.createElement("h2");
    h2.innerHTML = q.questions;
    div.append(h2);
})