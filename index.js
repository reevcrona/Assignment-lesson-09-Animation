const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");
const stars = document.querySelectorAll(".star")
const gm = document.querySelector(".gm");




sun.addEventListener("animationend", () => {
   sun.classList.remove("move-animation");
   moon.classList.add("move-animation");
  
    
   stars.forEach((star,index) => {
    star.style.animationDelay = `${(index + 1) * 0.2}s`
    star.classList.add("show")
    
   })
  
})

moon.addEventListener("animationend",() => {
    moon.classList.remove("move-animation");
    sun.classList.add("move-animation");
    
    stars.forEach(star => {
        star.classList.remove("show")
       })
    
})