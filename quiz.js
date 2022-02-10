const quizForm = document.querySelector('.quiz-form');
const submitBtn = document.querySelector('#submit-btn');
const outputE1 = document.querySelector('#output');

const correctAnswers = ["90°","Right Angle"];

function calScore(){

let score = 0;
let index = 0;

const formDataExtract = new FormData(quizForm);

for(let value of formDataExtract.values()){

    if(value === correctAnswers[index]){
        score = score + 1;
    }
    index = index + 1;
}

outputE1.innerText = "Your score is "+ score;

}

submitBtn.addEventListener('click', calScore);