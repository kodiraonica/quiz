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

{
    questions:"Kako se zoves2?",
    options: ["Stef","Jura","Pero"],
    answer:"Stef"

},

{
    questions:"Kako se prezivas2?",
    options: ["Stefic","Juric","Peric"],
    answer:"Stefic"
},
{
    questions:"Kako se zoves3?",
    options: ["Stef","Jura","Pero"],
    answer:"Stef"

},

{
    questions:"Kako se prezivas3?",
    options: ["Stefic","Juric","Peric"],
    answer:"Stefic"
},
]

let currentQuestion = 0;   //counter - koje pitanje se pokazuje
let interval;               //inteval - let - mijenjanje vrijednosti poslije
//kreiranje Timera


const timer = document.createElement("h3");
timer.innerHTML = 10;
document.body.append(timer);


questionsData.forEach((q) => {
    const div = document.createElement("div");
    div.setAttribute("class","question");  
    document.body.append(div);
    const h2 = document.createElement("h2");
    h2.innerHTML = q.questions;
    div.append(h2);

   // console.log(q.options);

   q.options.forEach((option) =>{
    const button = document.createElement("button");
    button.setAttribute("class","option");
    button.innerHTML = option;
    div.append(button);

    if(option === q.answer){
        // do something
        button.setAttribute("data-correct", true);
    }

   })

})
//buttoni i click event-odgovor
const buttons = document.getElementsByClassName("option");
const questions = document.getElementsByClassName("question");
questions[currentQuestion].style.display ="block";

Array.from(buttons).forEach((button) =>{
    
    button.addEventListener("click", () =>{
       if(button.getAttribute("data-correct")){
           alert("correct - tocno")


       }else{
           alert("incorrect - netocno")
       }

       if(currentQuestion < questions.length -1){
        questions[currentQuestion].style.display = "none";
        currentQuestion ++;
        questions[currentQuestion].style.display = "block";

        // reset interval
        clearInterval(interval); 
        timer.innerHTML = 10;
        startInterval();
       }
    })
});


startInterval();
function startInterval() {
//timer prosla vrijednost - 1
    interval = setInterval(() =>{
        if(timer.innerHTML > 0){
           timer.innerHTML = timer.innerHTML -1;
     }else{
         Array.from(buttons).forEach((button) => button.setAttribute("disabled", true))
     }
}, 1000);
}





