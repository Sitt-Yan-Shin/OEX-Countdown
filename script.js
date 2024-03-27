const days = document.querySelector(".Time--days");
const hours = document.querySelector(".Time--hours");
const minutes = document.querySelector(".Time--minutes");
const seconds = document.querySelector(".Time--seconds");

const now = new Date().getTime();
const date = new Date("2024-04-13")

function UpdateTime(){
  const now = new Date();
  const diff = date-now;
  const d = Math.floor(diff/1000/60/60/24);
  const h = Math.floor((diff/1000/60/60)%24);
  const m = Math.floor((diff/1000/60)%60);
  const s = Math.floor((diff/1000)%60);
  const ms = Math.floor(diff%1000);

  days.innerHTML=d<10?"0"+d:d;
  hours.innerHTML=h<10?"0"+h:h;
  minutes.innerHTML=m<10?"0"+m:m;
  seconds.innerHTML=s<10?"0"+s:s;
}

setInterval(UpdateTime, 1000);