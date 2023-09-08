//  PHONE VALIDATOR

const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResul = document.querySelector('#phone_result')

const regExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)) { //метод test() только доя регулярный выражений
        phoneResul.innerHTML = 'OK'
        phoneResul.style.color = 'green'
    } else {
        phoneResul.innerHTML = 'NOT OK'
        phoneResul.style.color = 'red'
    }
}