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

document.getElementById("long-break").addEventListener("click", function () {
    hideAll();
    long.style.display = "block"
    currentTimer = long
});
