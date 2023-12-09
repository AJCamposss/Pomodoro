window.onload = function () {
    let pomodoro = document.getElementById("pomodoroTimer");
    let short = document.getElementById("shortTimer");
    let long = document.getElementById("longTimer");
    let currentTimer = null;



function showDefaultTimer () {
    pomodoro.style.display="block";
    short.style.display ="none";
    long.style.display = "none";
}

showDefaultTimer();



document.getElementById("pomodoro").addEventListener("click", function() {
    hideAll();
    pomodoro.style.display = "block"
    currentTimer = pomodoro
});

document.getElementById("shortBreak").addEventListener("click", function() {
    hideAll();
    short.style.display = "block"
    currentTimer = short
});

document.getElementById("longBreak").addEventListener("click", function () {
    hideAll();
    long.style.display = "block"
    currentTimer = long
});

function hideAll() {
    let timers = document.querySelectorAll(".timer-display");
    timers.forEach(timer => timer.style.display = "none")
};

let myInterval = null;

function startTimer (timerdisplay) {

    if (myInterval) {
        clearInterval(myInterval)
    }

    timerDuration = timerdisplay.getAttribute("data-duration").split(":")[0]
    let durationInMiliseconds = timerDuration * 60 * 1000;
    let endTimeStamp = Date.now() + durationInMiliseconds;


myInterval = setInterval(function() {
    const timeRemaining = new Date(endTimeStamp - Date.now());

    if (timeRemaining <=0) {
        clearInterval(myInterval);
        timerdisplay.textContent = "00:00"
        const alarm = new Audio('alarm-clock-short-6402.mp3');
        alarm.play();
    }
    else {
        const minutes = Math.floor(timeRemaining / 60000);
        const seconds = ((timeRemaining % 60000) / 1000).toFixed(0);
        const formattedTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        timerdisplay.textContent = formattedTime;
    }
  }, 1000);
}

document.getElementById("start").addEventListener("click", function () {
    if(currentTimer) {
        startTimer(currentTimer);
        document.getElementById("timerMessage").style.display = "none";
    }
    else {
        document.getElementById("timerMessage").style.display = "block";
    }
})


document.getElementById("stop").addEventListener("click", function () {
    if (myInterval) {
        clearInterval(myInterval)
    }
})


}

