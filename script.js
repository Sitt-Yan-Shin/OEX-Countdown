const days = document.querySelector(".Time--days");
const hours = document.querySelector(".Time--hours");
const minutes = document.querySelector(".Time--minutes");
const seconds = document.querySelector(".Time--seconds");
const toMoon = document.querySelector(".to-moon");
const h2 = document.getElementsByTagName("h2")[0]; // Assuming there's only one h2 element
const boxes = document.querySelectorAll(".box"); // Assuming there's only one element with the class 'box'
const text = document.querySelector(".text");

const date = new Date("March 31, 2024 20:10"); // 9:00 PM

function UpdateTime() {
  const now = new Date();

  const diff = date - now;
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  days.innerHTML = d < 10 ? "0" + d : d;
  hours.innerHTML = h < 10 ? "0" + h : h;
  minutes.innerHTML = m < 10 ? "0" + m : m;
  seconds.innerHTML = s < 10 ? "0" + s : s;

  if (d == 0 && h == 0 && m == 0 && s == 0) {
    clearInterval(myInterval);
    boxes.forEach(box => {
      box.classList.add("box2");
      h2.classList.add("box2");
      text.innerHTML = "\"To the Moon🚀\""
      text.classList.add("to-the-moon")
    })
    confetti({
      particleCount: 300,
      spread: 200
    })
  }
}

const myInterval = setInterval(UpdateTime, 1000);
