const simpleCode = document.querySelector('.simple')
const hexCode = document.querySelector('.hex')
const main = document.querySelector('main')
const color = document.querySelector('.color')
const btn = document.querySelector(".btn")

let hexColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
let simpleColors = ["green", "red", "rgba(133,122,200)", "#f15025"] 
let colors = [];

let sign = true
hexCode.addEventListener("click", () => {
    sign = false
})

simpleCode.addEventListener("click", () => {
    sign = true
})

btn.addEventListener("click", () => {
    if (sign) {
        colors = simpleColors
        generateRandom()
        main.style.backgroundColor = colors[random]
        color.innerHTML = colors[random]
    } else {
        colors = hexColors
        let hex = "#"
        for(let i = 0; i < 6; i++) {
            hex += hexColors[generateHexRandom()]
        }
        main.style.backgroundColor = hex
        color.innerHTML = hex
    }
})


function generateRandom() {
    return random = Math.floor(Math.random() * colors.length)
}
function generateHexRandom() {
    return random = Math.floor(Math.random() * hexColors.length)
}

