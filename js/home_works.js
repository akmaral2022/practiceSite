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


const parentBlock = document.querySelector('.parent_block')
const childBlock = document.querySelector('.child_block')
// let num = 0
// childBlock.style.left = num
// const move = () => {
//     num++
//     childBlock.style.left = `${num}px`
//     if (num < 448) {
//         num++
//         childBlock.style.left = `${num}px`
//         animation()

//     }
// }
// function animation() {
//     setTimeout(move, 10)
// }
// animation()

let positionX = 0
let positionY = 0

const move = () => {
    if (positionX < 448 && positionY === 0) {
        positionX++
        childBlock.style.left = `${positionX}px`
        setTimeout(move, 1)
    } else if (positionX === 448 && positionY < 448) {
        positionY++
        childBlock.style.top = `${positionY}px`
        setTimeout(move, 1)
    } else if (positionX > 0 && positionY === 448) {
        positionX--
        childBlock.style.left = `${positionX}px`
        setTimeout(move, 1)
    } else if (positionX === 0 && positionY > 0) {
        positionY--
        childBlock.style.top = `${positionY}px`
        setTimeout(move, 1)
    }
}
move()


const minuts = document.querySelector('#minutesS')
const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const reset = document.querySelector('#reset')
let num = 0

start.onclick = () => {
    const go = setInterval(() => {
        if (num < 59) {
            num++
            minuts.innerHTML = num
        }
    }, 1000)
    stop.onclick = () => {
        clearInterval(go)
    }
}
reset.onclick = () => {
    num = 0
    minuts.innerHTML = num

}






