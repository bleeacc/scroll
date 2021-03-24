const container = document.getElementById('container')
const colors = ['#ff6666', '#ff8c66', '	#ffb366', '#ffd966', '#ffff66', '#d9ff66', '#b3ff66', '#8cff66', '#66ffd9', '#66ffff', '#66d9ff', '#668cff', '#6666ff', '#ff668c', '#fff']
const SQUARES = 500

for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square)) 

    square.addEventListener('mouseout', () => removeColor(square)) 

    container.appendChild(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.background = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor () {
    return colors[Math.floor(Math.random() * colors.length)]
}

