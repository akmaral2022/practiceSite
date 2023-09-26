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


// TAP SLIDER
const tabContentBlocks = document.querySelectorAll('.tab_content_block')
const tabsParentBlock = document.querySelector('.tab_content_items')
const tabsBlocks = document.querySelectorAll('.tab_content_item')
let interval


const hideTabContent = () => {
    tabContentBlocks.forEach(tabContentBlock => { tabContentBlock.style.display = 'none' })

    tabsBlocks.forEach(tabBlock => {
        tabBlock.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (indexElement = 0) => {    // по умолчанию равно 0
    tabContentBlocks[indexElement].style.display = 'block'
    tabsBlocks[indexElement].classList.add('tab_content_item_active')
}

hideTabContent()
showTabContent()
let currentIndex = 0
tabsParentBlock.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabsBlocks.forEach((tabBlock, tabIndex) => {
            if (event.target === tabBlock) {
                hideTabContent()
                currentIndex = tabIndex
                showTabContent(tabIndex)
            }
        })
    }
}

// Переключение слайдеров
const animation = () => {
    hideTabContent()
    currentIndex = (currentIndex + 1) % tabsBlocks.length;
    tabsBlocks[currentIndex].classList.add('tab_content_item_active')
    tabContentBlocks[currentIndex].style.display = "block"
}
interval = setInterval(animation, 3000)

/*currentIndex увеличивается на 1, а затем берется остаток от деления этого значения на texts.length.
Эта операция циклически переходит от одного элемента к другому в массиве tabsBlocks. Когда currentIndex достигает максимального значения (равного tabsBlocks.length - 1), 
остаток от деления вернет 0, и мы начнем снова с первого элемента. Это обеспечивает бесконечное циклическое переключение между текстами.
В данном случае, оператор % используется для создания кругового (циклического) эффекта при переключении текстов, 
чтобы после последнего элемента вернуться к первому и так далее. */


//CONVERTER
const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const eur = document.querySelector('#eur')

// som.addEventListener('input', () => {    //любое изменение в input
//     // console.log(event.target.value);
//     const request = new XMLHttpRequest()
//     request.open("GET", "../data/converter.json")
//     request.setRequestHeader("Content-type", "application/json")
//     request.send()
//     request.addEventListener('load', () => {
//         const response = JSON.parse(request.response)
//         usd.value = (som.value / response.usd).toFixed(2)  // toFixed - работает долько на ЧИСЛА с плавающей точкой
//     })
// })
// usd.addEventListener('input', () => {    //любое изменение в input
//     // console.log(event.target.value);
//     const request = new XMLHttpRequest()
//     request.open("GET", "../data/converter.json")
//     request.setRequestHeader("Content-type", "application/json")
//     request.send()
//     request.addEventListener('load', () => {
//         const response = JSON.parse(request.response)
//         som.value = (usd.value / response.usd).toFixed(2)  // toFixed - работает долько на ЧИСЛА с плавающей точкой
//     })

// })

//DRY - DON'T REPEAT YOURSELF
//KISS - KEEP IT SIMPLE, STUPID
//KISS - KEEP IT SHORT AND SIMPLE

const converter = (element, target1, target2, isCurrency) => {
    element.oninput = () => {
        const request = new XMLHttpRequest()
        request.open("GET", "../data/converter.json")
        request.setRequestHeader("Content-type", "application/json")
        request.send()

        request.onload = () => {
            const response = JSON.parse(request.response)
            if (isCurrency === 'som') {
                target1.value = (element.value / response.usdToSom).toFixed(2)
                // target2.value = ((element.value / response.usdToSom) / (response.usdToEur)).toFixed(2)  // как вариант без ипользование тренъего значения в json
                target2.value = (element.value / response.eurToSom).toFixed(2)
            } else if (isCurrency === 'doll') {
                target1.value = (element.value * response.usdToSom).toFixed(2)
                target2.value = (element.value / response.usdToEur).toFixed(2)

            } else if (isCurrency === 'euro') {
                target1.value = (element.value * response.eurToSom).toFixed(2)
                // target1.value = ((element.value * (response.usdToSom * response.usdToEur))).toFixed(2)// тоже самое, но значения немного сбивается
                target2.value = (element.value * response.usdToEur).toFixed(2)
            }
            element.value === '' ? target1.value = '' : null
            element.value === '' ? target2.value = '' : null
            // element.value === '' && (target1.value = '')  // - более сокращенная версия
        }
    }
}
converter(som, usd, eur, 'som')
converter(usd, som, eur, 'doll')
converter(eur, som, usd, 'euro')

//CARD SWITCHER

const card = document.querySelector('.card')
const btnNext = document.querySelector('#btn-next')
const btnPrev = document.querySelector('#btn-prev')

let count = 1


// btnNext.onclick = () => {
//     if (count < 200) {
//         count++
//         cardValue()
//     } else {
//         count = 1
//         cardValue()
//     }
// }
// btnPrev.onclick = () => {
//     if (count > 1) {
//         count--
//         cardValue()
//     } else {
//         count = 200
//         cardValue()
//     }
// }
btnNext.onclick = () => {
    count = (count < 200) ? count + 1 : count = 1
    cardValue()
}
btnPrev.onclick = () => {
    count = (count > 1) ? count - 1 : count = 200
    cardValue()
}

function cardValue() {
    fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        .then(response => response.json())
        .then(data =>
            card.innerHTML = `
        <p>${data.title}</p>
        <p style="color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>
        <span>${data.id}</span>
        `

        )

}
cardValue()


//2) Так же сделать отдельный fetch запрос на эту ссылку: 'https://jsonplaceholder.typicode.com/posts' и отобразить данные просто в консоли
fetch(`https://jsonplaceholder.typicode.com/posts `)
    .then((result) => result.json())
    .then((data) => { console.log(data) }
    )
