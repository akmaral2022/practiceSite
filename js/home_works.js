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
let num = 0
childBlock.style.left = num

const move = () => {
    num++
    childBlock.style.left = `${num}px`
    if (num < 448) {
        animation()

    }
}

function animation() {
    setTimeout(move, 10)
}

animation()




