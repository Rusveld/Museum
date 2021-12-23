let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15]

arr.sort(() => Math.random() - 0.5)




       for(let i = 1; i<16;i++){
            if(i < 6)
            {{let columnWrapp = document.querySelector(`.f-pics`)
            columnWrapp.innerHTML += `<div class = "anim-items"> <img class=" gal-img-${arr[i-1]}" src="./assets/img/galery/galery${arr[i-1]}.jpg" alt="g-pic"> </div>`}}
            else if(i>5 && i<11){
            let columnWrapp = document.querySelector(`.s-pics`)
            columnWrapp.innerHTML += `<div class = "anim-items"> <img class=" gal-img-${arr[i-1]}" src="./assets/img/galery/galery${arr[i-1]}.jpg" alt="g-pic"> </div>`}
            else if(i>10 && i<15){
            let columnWrapp = document.querySelector(`.t-pics`)
            columnWrapp.innerHTML += `<div class = "anim-items"> <img class="gal-img-${arr[i-1]}" src="./assets/img/galery/galery${arr[i-1]}.jpg" alt="g-pic"> </div>`
            }
        
        }

    

      



