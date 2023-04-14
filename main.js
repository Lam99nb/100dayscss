const time = document.querySelector(".textTime")
const pauseBtn = document.querySelector(".pause")
const startBtn = document.querySelector(".start")

isPlay = true;
let timer = 0;
isPlay ? pauseBtn.classList.add('active') : startBtn.classList.add('active')

let counter = setInterval(() => {
    if (isPlay) {
        timer++;
        time.innerHTML = timer.toString().padStart(4, "0")
    }
}, 1000)

pauseBtn.addEventListener('click', () => {
    isPlay = false;
    startBtn.classList.add("active");
    pauseBtn.classList.remove("active");

})

startBtn.addEventListener('click', () => {
    isPlay = true;
    pauseBtn.classList.add("active");
    startBtn.classList.remove("active");

})
