let startBtn = document.querySelector("#startBtn");
let title = document.getElementById("title");
let time = document.getElementById("timer");
let number = document.querySelector("#number");
let checkBtn = document.querySelector("#check");
let reducer = 59;
let isStarted = false;
let myInterval;
let points = document.getElementById("points");
let counter = 0;
let secretNumber;

let randNumber = () => {
    secretNumber = Math.floor(Math.random() * 101);
    return secretNumber;
}

let titleReset = () => {
    setTimeout(()=> {
        title.style.backgroundColor = "initial"
        title.innerText = "Guess The Number..."
    }, 2000)
}

let checkAnswer = () => {
    checkBtn.addEventListener("click", ()=> {
        if (number.value < secretNumber) {
            number.value = "";
            title.style.backgroundColor = "orange";
            title.innerText = "Your guess is lower";
            titleReset()
        } else if (number.value > secretNumber) {
            number.value = "";
            title.style.backgroundColor = "orange";
            title.innerText = "Your guess is greater!";
            titleReset()
        } else {
            counter++
            points.textContent = counter;
            title.style.backgroundColor = "Green";
            title.innerText = "Perfect!";
            titleReset()
            number.value = "";
            randNumber()
        }
    })
}

let resetAll = () => {
    clearInterval(myInterval);
    startBtn.textContent = "Start";
    isStarted = false;
    time.textContent = 60;
    time.style.color = "initial";
    reducer = 59;
    points.innerText = 0;
    title.textContent = "Guess The Number...";
}

startBtn.addEventListener("click", ()=> {
    randNumber()
    if (!isStarted) {
        startBtn.textContent = "Stop";
        isStarted = true;
        myInterval = setInterval(timeOut, 1000);
        function timeOut() {
            if (reducer >= 0) {
                time.textContent = reducer--;
                if (reducer < 10) {
                    time.style.color = "red";
                }
            } else {
                title.textContent = `Your total score is: ${counter}`;
                setTimeout(()=> {
                    resetAll()
                }, 5000)
            }
        }
        checkAnswer()
    } else {
        resetAll()
    }
})