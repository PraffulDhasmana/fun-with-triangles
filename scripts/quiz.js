const quizForm = document.querySelector('.quiz-form');
const submitBtn = document.querySelector('#submit-btn');
const outputE1 = document.querySelector('#output');

const correctAnswers = [
    "90°",
    "Right Angled",
    "one right angle",
    "12, 16, 20",
    "Equilateral triangle",
    "100°",
    "30°",
    "a + b + c",
    "no",
    "45°",
  ];

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