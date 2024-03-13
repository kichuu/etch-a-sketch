document.addEventListener('DOMContentLoaded', function(){

let divContainer = document.querySelector(".div-container")

for( let i=0;i<16;i++){
    for(let j=0;j<16;j++){
let div16 = document.createElement('div')
div16.classList.add("grid-items")
div16.textContent = "ji"
divContainer.appendChild(div16)
    }
}
})