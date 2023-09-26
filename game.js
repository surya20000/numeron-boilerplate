// Iteration 2: Generate 2 random number and display it on the screen
var number1 = Math.round(Math.random()*100);
const number = document.getElementById("number1");
number.innerHTML=number1;

var number2 = Math.round(Math.random()*100);
const num = document.getElementById("number2");
num.innerHTML = number2;

// Iteration 3: Make the options button functional
const gt = document.getElementById("greater-than");
const eq = document.getElementById("equal-to");
const lt = document.getElementById("lesser-than");


var score = 0;

gt.onclick = () => {
        
    if(number1 > number2) {
        score++;
        resetTime(timerId)
    } else {
        location.href="./gameover.html";
        }

    number1 = Math.round(Math.random()*100);
    number.innerHTML=number1;
    number2 = Math.round(Math.random()*100);
    num.innerHTML = number2;
};
eq.onclick = () => {
        
    if(number1 == number2) {
        score++;
        resetTime(timerId)
    } else {
        location.href="./gameover.html";
        }

    number1 = Math.round(Math.random()*100);
    number.innerHTML=number1;
    number2 = Math.round(Math.random()*100);
    num.innerHTML = number2;
};
lt.onclick = () => {
        
    if(number1 < number2) {
        score++;
        resetTime(timerId)
    } else {
        location.href="./gameover.html";
        }

    number1 = Math.round(Math.random()*100);
    number.innerHTML=number1;
    number2 = Math.round(Math.random()*100);
    num.innerHTML = number2;
};

// Iteration 4: Build a timer for the game
var time=5;
var timer = document.getElementById("timer");
var timerId;

 function startTimer() {
    time=5;
    time.innerHTML= time;
    timerId=setInterval(() =>{
        time--;
        if(time==0){
            location.href='./gameover.html'
        }
        timer.innerHTML= time;
    },1000);
    localStorage.setItem("score",score)
 }

 function resetTime(intervalId){
    clearInterval(intervalId);
    startTimer();


 }

 startTimer( )
