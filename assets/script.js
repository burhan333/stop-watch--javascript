let minText = document.getElementById('min');
let secText = document.getElementById('sec');
let msecText = document.getElementById('msec');
const pauseBtn = document.getElementById('pause');
const startBtn = document.getElementById('start');
const resetBtn = document.getElementById('reset');
let min = 0;
let sec = 0;
let msec = 0;
let interval;

function timer()
{
    msec++
    msecText.innerHTML = msec;

    if(msec >= 100)
    {
        sec++;
        secText.innerHTML = sec;
        msec = 0;
    }else if (sec >= 60)
    {
        min++;
        minText.innerHTML = min;
        sec = 0;
    }
}

function start()
{
    interval = setInterval(timer, 10);
    startBtn.disabled = true;
    pauseBtn.disabled = false;
    resetBtn.disabled = false;
}

function pause()
{
    clearInterval(interval)
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    resetBtn.disabled = false;
}

function reset()
{
    msecText.innerHTML = 0;
    secText.innerHTML = 0;
    minText.innerHTML = 0;
    clearInterval(interval)
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    resetBtn.disabled = true;
}