let totalPrice = document.querySelector(".total-price")
const basicCounter = document.querySelector(".basic-counter")
const seniorCounter = document.querySelector(".senior-counter")
const ticketBTNs = document.querySelectorAll(".tick-btn")
const ticketBTNs1 = document.querySelectorAll(".tick-btn1")
const tickTypes = document.querySelectorAll(".tick-type")

let formbasicvalue = document.querySelector(".first-right-field")
let formseniorvalue = document.querySelector(".second-right-field")
let formtotalvalue = document.querySelector(".third-right-field")


let typevalue = 20;
let basiccount = basicCounter.value;
let seniorcount = seniorCounter.value;



for(let i = 0; i<tickTypes.length; i++){
    const type = tickTypes[i]
    type.addEventListener("click", ()=>{ 

        if(type.checked){
        typevalue = Number.parseInt(type.value)
        totalPrice.innerHTML = `Total €${basiccount*typevalue+seniorcount*(typevalue/2)}`
        formbasicvalue.innerHTML = `<p>${basiccount*typevalue} €</p>`
        
        formseniorvalue.innerHTML = `<p>${seniorcount*(typevalue/2)} €</p>`

        formtotalvalue.innerHTML = `<p>${basiccount*typevalue+seniorcount*(typevalue/2)} €</p>`
    }})
}

totalPrice.innerHTML = `Total €${basiccount*typevalue+seniorcount*(typevalue/2)}`

for(let i = 0; i < ticketBTNs.length; i++ ){
    const tb = ticketBTNs[i]
    tb.addEventListener("click", ()=>{
        basiccount = basicCounter.value;
        seniorcount = seniorCounter.value;
        totalPrice.innerHTML = `Total €${basiccount*typevalue+seniorcount*(typevalue/2)}`

        formbasicvalue.innerHTML = `<p>${basiccount*typevalue} €</p>`
        
        formseniorvalue.innerHTML = `<p>${seniorcount*(typevalue/2)} €</p>`

        formtotalvalue.innerHTML = `<p>${basiccount*typevalue+seniorcount*(typevalue/2)} €</p>`
})}
for(let i = 0; i < ticketBTNs1.length; i++ ){
    const tb = ticketBTNs1[i]
    tb.addEventListener("click", ()=>{
        basiccount = basicCounter.value;
        seniorcount = seniorCounter.value;
        totalPrice.innerHTML = `Total €${basiccount*typevalue+seniorcount*(typevalue/2)}`

        formbasicvalue.innerHTML = `<p>${basiccount*typevalue} €</p>`
        
        formseniorvalue.innerHTML = `<p>${seniorcount*(typevalue/2)} €</p>`

        formtotalvalue.innerHTML = `<p>${basiccount*typevalue+seniorcount*(typevalue/2)} €</p>`
})}

