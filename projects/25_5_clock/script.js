document.addEventListener('DOMContentLoaded', () => {
    const breakMinus = document.getElementById('breakMinus');
    const breakPlus = document.getElementById('breakPlus');
    const sessionMinus = document.getElementById('sessionMinus');
    const sessionPlus = document.getElementById('sessionPlus');
    const playButton = document.getElementById('playButton');
    const pauseButton = document.getElementById('pauseButton');
    const refreshButton = document.getElementById('refreshButton');
    const title = document.querySelector('.current-title');
    const minuteDisplay = document.getElementById('minute');
    const sessionLengthDisplay = document.getElementById('sessionLength');
    const breakLengthDisplay = document.getElementById('breakLength');
    const secondDisplay = document.getElementById('seconds');
    let timeRemaining = 0;
    let pausedMinutes = 0;
    let pausedSeconds = 0;

    let breakLength = 5;
    let sessionLength = 25;
    let isRunning = false;
    let isSession = true;
    let interval;

    title.textContent = "Session";
    minuteDisplay.textContent = sessionLength < 10 ? "0" + sessionLength : sessionLength;
    secondDisplay.textContent = "00";

    function updateDisplay() {
        minuteDisplay.textContent = isSession ? (sessionLength < 10 ? "0" + sessionLength : sessionLength) : (breakLength < 10 ? "0" + breakLength : breakLength);
        sessionLengthDisplay.textContent = (sessionLength < 10 ? "0" + sessionLength : sessionLength);
        breakLengthDisplay.textContent = (breakLength < 10 ? "0" + breakLength : breakLength);
        secondDisplay.textContent = "00";
    }

    function startTimerFrom(duration) {
        let timer = duration * 60 || timeRemaining;

        interval = setInterval(() => {
            let minutes = parseInt(timer / 60, 10);
            let seconds = parseInt(timer % 60, 10);

            minuteDisplay.textContent = minutes < 10 ? "0" + minutes : minutes;
            secondDisplay.textContent = seconds < 10 ? "0" + seconds : seconds;

            if (--timer < 0) {
                clearInterval(interval);
                isSession = !isSession;
                title.textContent = isSession ? "Session" : "Break";
                if (isSession) {
                    startTimerFrom(sessionLength);
                } else {
                    startTimerFrom(breakLength);
                }
            }
        }, 1000);
    }

    function breakMinusFunc() {
        if (!isRunning && breakLength > 1) {
            breakLength--;
            updateDisplay();
        }
    }

    function breakPlusFunc() {
        if (!isRunning && breakLength < 60) {
            breakLength++;
            updateDisplay();
        }
    }

    function sessionMinusFunc() {
        if (!isRunning && sessionLength > 1) {
            sessionLength--;
            updateDisplay();
        }
    }

    function sessionPlusFunc() {
        if (!isRunning && sessionLength < 60) {
            sessionLength++;
            updateDisplay();
        }
    }

    function playFunc() {
        if (!isRunning) {
            isRunning = true;
            if (timeRemaining !== 0) {
                isSession = timeRemaining >= breakLength * 60;
                startTimerFrom(Math.floor(timeRemaining / 60) + (timeRemaining % 60) / 60);
            } else {
                startTimerFrom(isSession ? sessionLength : breakLength);
            }
        }
    }
    

    function pauseFunc() {
        clearInterval(interval);
        isRunning = false;
        isSession=true;
        pausedMinutes = parseInt(minuteDisplay.textContent, 10);
        pausedSeconds = parseInt(secondDisplay.textContent, 10);
        timeRemaining = (pausedMinutes * 60) + pausedSeconds;
    }

    function refreshFunc() {
        clearInterval(interval);
        isRunning = false;
        title.textContent = "Session";
        breakLength = 5;
        timeRemaining = 0; 
        sessionLength = 25;
        isRunning = false;
        updateDisplay();
    }

    breakMinus.addEventListener('click', breakMinusFunc);
    breakPlus.addEventListener('click', breakPlusFunc);
    sessionMinus.addEventListener('click', sessionMinusFunc);
    sessionPlus.addEventListener('click', sessionPlusFunc);
    playButton.addEventListener('click', playFunc);
    pauseButton.addEventListener('click', pauseFunc);
    refreshButton.addEventListener('click', refreshFunc);
});
