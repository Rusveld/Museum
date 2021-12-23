const stick = document.querySelector(".explore-change-stick")
const over = document.querySelector(".img-comp-overlay")
const ww  = document.querySelector(".explore-img__wrapper")

let wtf;

function movex(event){
  event = event || window.event
  let movementX = event.clientX - ww.offsetLeft    
  console.log(ww.offsetLeft)
  if(movementX>-1 && movementX<720){stick.style.left = `${movementX}px`
  over.style.width = `${movementX}px`  
}
  wtf = false
}
stick.addEventListener("mousedown", ()=>{
  wtf = true
  ww.addEventListener("mousemove", movex)
  ww.addEventListener("mouseup", ()=>{
    ww.removeEventListener("mousemove", movex)
  })

})