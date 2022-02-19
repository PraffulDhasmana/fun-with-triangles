const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector('#button-id');
const outputE1 = document.querySelector('#triangle-output');


function calSumOfAngles(angle1,angle2,angle3){
    const sumOFAngles = angle1+angle2+angle3;
    return sumOFAngles;
}


function isTriangle(){
    
    const sumOFAngles = calSumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));

   if(sumOFAngles === 180){
       
       outputE1.innerText = "The angles form a triangle";
   }
   else{
    outputE1.innerText = "The angles don't form a triangle";
   }
}




isTriangleBtn.addEventListener("click",isTriangle);