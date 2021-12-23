const burgerIcon = document.querySelector(".burger")
const menu = document.querySelector(".menu")
const card = document.querySelector(".welcome-card-wrapper")
const body = document.querySelector("body")
const link1 = document.querySelector(".menu-links1")
const link2 = document.querySelector(".menu-links2")
const link3 = document.querySelector(".menu-links3")
const link4 = document.querySelector(".menu-links4")
const link5 = document.querySelector(".menu-links5")
const link6 = document.querySelector(".menu-links6")

burgerIcon.addEventListener("click", ()=>{
    menu.classList.toggle("_active")
    burgerIcon.classList.toggle("_active")
    card.classList.toggle("_active")
    body.classList.toggle("_active")

})

link1.addEventListener("click", ()=>{
    menu.classList.remove("_active")
    burgerIcon.classList.remove("_active")
    card.classList.remove("_active")
    body.classList.remove("_active")

})
link2.addEventListener("click", ()=>{
    menu.classList.remove("_active")
    burgerIcon.classList.remove("_active")
    card.classList.remove("_active")
    body.classList.remove("_active")

})
link3.addEventListener("click", ()=>{
    menu.classList.remove("_active")
    burgerIcon.classList.remove("_active")
    card.classList.remove("_active")
    body.classList.remove("_active")

})
link4.addEventListener("click", ()=>{
    menu.classList.remove("_active")
    burgerIcon.classList.remove("_active")
    card.classList.remove("_active")
    body.classList.remove("_active")

})
link5.addEventListener("click", ()=>{
    menu.classList.remove("_active")
    burgerIcon.classList.remove("_active")
    card.classList.remove("_active")
    body.classList.remove("_active")

})
link6.addEventListener("click", ()=>{
    menu.classList.remove("_active")
    burgerIcon.classList.remove("_active")
    card.classList.remove("_active")
    body.classList.remove("_active")

})


