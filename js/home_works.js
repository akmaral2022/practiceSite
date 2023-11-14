//gmail
const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /^[\w.]{0,25}@gmail\.com$/


gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)) { //метод test() только для регулярный выражений
        gmailResult.innerHTML = 'OK'
        gmailResult.style.color = 'green'
    } else {
        gmailResult.innerHTML = 'NOT OK'
        gmailResult.style.color = 'red'
    }
}

//БЛОК С АНИМАЦИЕЙ
const parentBlock = document.querySelector('.parent_block')
const childBlock = document.querySelector('.child_block')

let positionX = 0
let positionY = 0

const move = () => {
    if (positionX < 448 && positionY === 0) {
        positionX++
        childBlock.style.left = `${positionX}px`
        setTimeout(move, 10)
    } else if (positionX === 448 && positionY < 448) {
        positionY++
        childBlock.style.top = `${positionY}px`
        setTimeout(move, 10)
    } else if (positionX > 0 && positionY > 0) {
        positionX--
        childBlock.style.left = `${positionX}px`
        setTimeout(move, 10)
    } else if (positionX === 0 && positionY > 0) {
        positionY--
        childBlock.style.top = `${positionY}px`
        setTimeout(move, 10)
    }
}
move()

//ТАЙМЕР
const minuts = document.querySelector('#minutesS')
const seconds = document.querySelector('#secondsS')
const mlSeconds = document.querySelector('#ml-secondsS')
const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const reset = document.querySelector('#reset')
let interval
let minutes = 0

const startTimer = () => {
    if (minutes < 59) {
        minutes++
        seconds.innerHTML = minutes
    }
}

start.onclick = () => {
    clearInterval(interval)
    interval = setInterval(startTimer, 1000)
}
stop.onclick = () => {
    clearInterval(interval)
}
reset.onclick = () => {
    clearInterval(interval)
    minutes = 0
    seconds.innerHTML = minutes

}






