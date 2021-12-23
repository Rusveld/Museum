const animItems = document.querySelectorAll(".anim-items");
console.log(animItems)
if(animItems.length > 0 ){


    window.addEventListener("scroll", animOnScroll)


    function animOnScroll(){
        

        for(let i = 0; i < animItems.length; i++){
            

            const     animItem = animItems[i];
            
            const     animItemHeight = animItem.clientHeight;
            const     animItemOffset = offset(animItem).top;
            const     animStart = 4;


         
            let animItemPoint = window.innerHeight - animItemHeight / animStart;
                
            if(animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight / animStart
            }

            if((pageYOffset > animItemOffset - animItemPoint) && (pageYOffset < animItemOffset + animItemHeight)){
                
                animItem.classList.add("_activist")
            }else{
                
                animItem.classList.remove("_activist")
            }
    }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}


    }
    animOnScroll()
}