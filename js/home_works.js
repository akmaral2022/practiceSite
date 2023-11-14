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
const minutsBlock = document.querySelector('#minutesS')
const secondsBlock = document.querySelector('#secondsS')
const mlSecondsBlock = document.querySelector('#ml-secondsS')
const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const reset = document.querySelector('#reset')
let interval
let minuts = 0
let secunds = 0
let mlSeconds = 0

const startTimer = () => {

    mlSeconds++
    mlSecondsBlock.innerHTML = mlSeconds
    if (mlSeconds >= 99) {
        secunds++
        secondsBlock.innerHTML = secunds
        mlSeconds = 0
        if (secunds >= 59 && minuts < 59) {
            minuts++
            minutsBlock.innerHTML = minuts
            secunds = 0
        }
    }

}

start.onclick = () => {
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
}
stop.onclick = () => {
    clearInterval(interval)
}
reset.onclick = () => {
    clearInterval(interval)
    minuts = 0
    secunds = 0
    mlSeconds = 0
    minutsBlock.innerHTML = '00'
    secondsBlock.innerHTML = '00'
    mlSecondsBlock.innerHTML = '00'



}






