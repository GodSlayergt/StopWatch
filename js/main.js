const minSec = document.getElementById("min-sec");
const tenth = document.getElementById("tenth");
const startStop = document.getElementById("start-stop");
const reset = document.getElementById("reset");
const spinner = document.getElementById('spinner')

var interval = null;
var minutes = 0;
var seconds = 0;
var hundredTHSecond = 0;

startStop.addEventListener("click", () => {
  if (!interval) {
    interval = setInterval(timer, 10);
  } else {
    clearInterval(interval);
    interval = null;
  }
});

reset.addEventListener("click", () => {
  if (interval) {
    clearInterval(interval);
    interval = null;
  }

  minutes = 0;
  seconds = 0;
  hundredTHSecond = 0;
  minSec.innerHTML = "0" + minutes + ":" + "0" + seconds;
  tenth.innerHTML = "0" + hundredTHSecond;
});

function timer() {
  hundredTHSecond++;

  if (hundredTHSecond <= 9) {
    tenth.innerHTML = "0" + hundredTHSecond;
  }

  if (hundredTHSecond > 9) {
    tenth.innerHTML = hundredTHSecond;
  }

  if (hundredTHSecond > 99) {
    seconds++;
    hundredTHSecond = 0;
    tenth.innerHTML = "0" + hundredTHSecond;
  }

  if (seconds <= 9) {
    if (minutes < 9) {
      minSec.innerHTML = "0" + minutes + ":" + "0" + seconds;
    } else {
      minSec.innerHTML = minutes + ":" + "0" + seconds;
    }
  }
  if (seconds > 9) {
    if (minutes < 9) {
      minSec.innerHTML = "0" + minutes + ":" +  seconds;
    } else {
      minSec.innerHTML = minutes + ":" +  seconds;
    }
  }

  if (seconds === 60) {
    seconds = 0
    minutes++
    if (minutes < 9) {
      minSec.innerHTML = "0" + minutes + ":" + "0" + seconds;
    } else {
      minSec.innerHTML = minutes + ":" + "0" + seconds;
    }
  }

  if(minutes===60){
    minutes=0
  }

}
