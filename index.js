const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");





sun.addEventListener("animationend", () => {
   sun.classList.remove("move-animation");
   moon.classList.add("move-animation");
})

moon.addEventListener("animationend",() => {
    moon.classList.remove("move-animation");
    sun.classList.add("move-animation");
    
})