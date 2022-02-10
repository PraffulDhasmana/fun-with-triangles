const sides = document.querySelectorAll('.side-input');
const calBtn = document.querySelector('#cal_hype_btn');
const outputE1 = document.querySelector('#output');



function squareRoot(sumOfSquare){
    const lengthOfHype = Math.sqrt(sumOfSquare);
    
    outputE1.innerText = "The length of the hyopotenuse is " + lengthOfHype;

}

function calculateSumOfSquares(a,b){
    const sumOfSquare = a*a + b*b;
    squareRoot(sumOfSquare);    
 
}

function calculateHypotenuse(){
    calculateSumOfSquares(Number(sides[0].value),Number(sides[1].value));
}


calBtn.addEventListener('click',calculateHypotenuse);