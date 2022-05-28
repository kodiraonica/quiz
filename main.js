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
let score = 0;              //

const timer = document.createElement("h3");
const buttons = document.getElementsByClassName("option");
const questions = document.getElementsByClassName("question");
const buttonStart = document.createElement("button");
const scoreElement = document.createElement("h4");


createStartButton();
getScoreFromLocalStorage();
//initialize game
function initGame(){
    buttonStart.remove()
    createResetButton();
    createScoreElement();
    createTimer();
    showQuestions();
    onAnswerClick();

}

function createStartButton (){
    buttonStart.setAttribute("class","btn-start");
    buttonStart.innerHTML="Start Quiz";
    document.body.append(buttonStart);
    buttonStart.addEventListener("click", initGame)
}

function onAnswerClick(){
    Array.from(buttons).forEach((button) =>{
        button.addEventListener("click", () =>{
           if(button.getAttribute("data-correct")){
               alert("correct - tocno")
               score++
               updateScore();
               //console.log(score);
    
           }else{
               alert("incorrect - netocno")
               score--
               updateScore();
               // console.log(score);
           }
    
           if(currentQuestion < questions.length -1){
            showNewQuestion();
           }else{
               alert("no more questions");
               clearInterval(interval);
           }
        })
    });
}



function showQuestions(){
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
}

function createTimer(){
    timer.innerHTML = 10;
    document.body.append(timer);
    startInterval()
}


function showNewQuestion(){
        questions[currentQuestion].style.display = "none";
        currentQuestion ++;
        questions[currentQuestion].style.display = "block";

        // reset  interval
        clearInterval(interval); 
        timer.innerHTML = 10;
        startInterval();
}

//kreiranje-reset-buttona
function createResetButton(){
    const resetButton = document.createElement("button");
    resetButton.innerHTML="Reset Game";
    resetButton.setAttribute("class","btn-reset");
    document.body.append(resetButton)

    //event listener na button, zaustavi timer
    resetButton.addEventListener("click",() =>{
        clearInterval(interval);
        timer.innerHTML = 10;
        startInterval();
        questions[currentQuestion].style.display = "none";
        currentQuestion = 0;
        questions[currentQuestion].style.display = "block";
        Array.from(buttons).forEach((button) => button.removeAttribute("disabled"))
        score = 0;
        updateScore();
    })
}

//startInterval();  //duplic
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




function createScoreElement(){
    scoreElement.innerHTML = "Your score is ";
    document.body.append(scoreElement);
}

function updateScore(){
    scoreElement.innerHTML =`Your score is ${score}`;
    localStorage.setItem("score",score);
}

//povijest score-a zadnjeg, ako postoji unutar local storage-a
function getScoreFromLocalStorage(){
    const userScore = localStorage.getItem("score"); //key pod vrijednost "score"
    userScore && alert(`Your last score was ${userScore}`);
   
}