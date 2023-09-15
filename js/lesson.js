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
setInterval(animation, 3000)

/*currentIndex увеличивается на 1, а затем берется остаток от деления этого значения на texts.length.
Эта операция циклически переходит от одного элемента к другому в массиве tabsBlocks. Когда currentIndex достигает максимального значения (равного tabsBlocks.length - 1), 
остаток от деления вернет 0, и мы начнем снова с первого элемента. Это обеспечивает бесконечное циклическое переключение между текстами.
В данном случае, оператор % используется для создания кругового (циклического) эффекта при переключении текстов, 
чтобы после последнего элемента вернуться к первому и так далее. */

