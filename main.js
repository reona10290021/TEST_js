const timeElement = document.getElementById('time');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

let elapsed = 0;

let intervalId = null;

function updateTime () {
  
  const ms = elapsed % 1000;
  const s = Math.floor(elapsed / 1000) %60;
  const m = Math.floor(elapsed / (1000*60)) %60;
  const h = Math.floor(elapsed / (1000*60*60));
  
  const msStr = ms.toString().padStart(3,"0");
  const sStr = s.toString().padStart(2,"0");
  const mStr = m.toString().padStart(2,"0");
  const hStr = h.toString().padStart(2,"0");
  
  timeElement.innerHTML = `${hStr}:${mStr}:${sStr}:${msStr}`;
};

start.addEventListener('click', function(e) {
  //if (intervalId !== null) { return; };
  let pre = new Date();
  intervalId = setInterval(function () {
    const now = new Date();
    elapsed += now - pre;
    pre = now;
    updateTime();
    //console.log(elapsed);
  }, 10);
});

stop.addEventListener("click", function(e) {
    clearInterval(intervalId);
    //intervalId = null;
});

reset.addEventListener("click", function(e) {
  elapsed = 0;
  updateTime();
});

function startButton () {
  start.disabled = true;
  stop.disabled = false;
  reset.disabled = true;
};

function stopButton () {
  start.disabled = false;
  stop.disabled = true;
  reset.disabled = false;
};

function resetButton () {
  stop.disabled = true;
};