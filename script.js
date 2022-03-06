const container = document.querySelector('.balloon-container')
const numBalloons = 25
const colors = ['red','pink','blue','green','yellow','orange','brown','#874767','#933778','#685376',]
for (let i = 1; i <= numBalloons ; i++) {
    const color = `${colors[Math.floor(Math.random()*(colors.length-1))]}`
    const divEl = document.createElement("div")
    divEl.innerText = "POP!"
    divEl.style.backgroundColor = color
    divEl.style.color = color
    divEl.classList.add('balloon')
    container.appendChild(divEl)
}
const balloons = document.querySelectorAll('.balloon')
balloons.forEach(balloon=>{
    balloon.addEventListener('mouseover', ()=>{
        balloon.style.backgroundColor = 'transparent'
        balloon.style.color = `${colors[Math.floor(Math.random()*(colors.length-1))]}`
        balloon.classList.add('balloon-pop')
        if(Array.from(document.querySelectorAll('.balloon-pop')).length===numBalloons){
            container.classList.add('display-none')
        }
    })
})
// if(Array.from(document.querySelectorAll('.balloon-pop')).length===numBalloons){
//     container.classList.add('display-none')
// }
console.log(colors[Math.floor(Math.random()*(colors.length-1))])