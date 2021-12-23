const buttons = document.querySelectorAll(".welcome-slider-btn")
const imgWrapper =  document.querySelector(".welcome-img-wrapper")
const leftArrow = document.querySelector(".welcome-arrow-btn1")
const rightArrow = document.querySelector(".welcome-arrow-btn2")
imgWrapper.style.backgroundImage = `url(./assets/img/welcome-slider/1.jpg)`
if(buttons.length > 0){
    function btnClick(){
        for(let i = 0; i < buttons.length; i++){
            const button = buttons[i]
            
            button.addEventListener("click", ()=>{
                imgWrapper.style.backgroundImage = `url(./assets/img/welcome-slider/${i+1}.jpg)`
                const numbs = document.querySelector(".welcome-slider-numbs")
                numbs.innerHTML = `<h3>0${i+1} | 05</h3>`
                buttons.forEach((el)=>{el.style.background = "white"})
                button.style.background = "#9D8665"

            })

        }
    }
}


leftArrow.addEventListener("click", ()=>{
    let img = imgWrapper.style.backgroundImage
    let n = img.substring(33,34 )
    if(n == 1){
        n=6;
    }
    imgWrapper.style.backgroundImage = `url(./assets/img/welcome-slider/${n-1}.jpg)`
    imgWrapper.classList.add("back-animation-left")
    setTimeout(()=>{imgWrapper.classList.remove("back-animation-left")}, 600)
    const numbs = document.querySelector(".welcome-slider-numbs")
    numbs.innerHTML = `<h3>0${n-1} | 05</h3>` 
    let index = 1;
    buttons.forEach(el=>{        
        if(index == n-1){
            el.style.background = "#9D8665"
        }else{
        el.style.background = "white"
        }
        index++
    })
})


rightArrow.addEventListener("click", ()=>{
    let img = imgWrapper.style.backgroundImage
    let n = Number.parseInt(img.substring(33,34 ))
    if(n == 5){
        n=0;
    }
    imgWrapper.style.backgroundImage = `url(./assets/img/welcome-slider/${n+1}.jpg)`
    imgWrapper.classList.add("back-animation-right")
    setTimeout(()=>{imgWrapper.classList.remove("back-animation-right")}, 600)

    const numbs = document.querySelector(".welcome-slider-numbs")
    numbs.innerHTML = `<h3>0${n+1} | 05</h3>` 
    let index = 1;
    buttons.forEach(el=>{        
        if(index == n+1){
            el.style.background = "#9D8665"
        }else{
        el.style.background = "white"
        }
        index++
    })
})



btnClick()

