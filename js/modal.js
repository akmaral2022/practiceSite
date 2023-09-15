//MODAL
const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const modalCloseButton = document.querySelector('.modal_close')

const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'


}

const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''

}
modalTrigger.onclick = () => { openModal() }

modalCloseButton.onclick = () => { closeModal() }

modal.onclick = () => {
    if (event.target === modal) closeModal()
}
//ОКНО ПО ПРОКРУТКЕ В КОНЕЦ СТРАНИЦЫ
let modalWasShown = false
window.addEventListener('scroll', () => {
    const scrollHeight = window.innerHeight + window.scrollY;
    const pageHeight = document.documentElement.scrollHeight;

    // Если пользователь прокрутил до определенной точки (здесь, 100% страницы)
    if (scrollHeight >= pageHeight * 1 && !modalWasShown) {   // ЗАПОМНИТЬ ЧТО НЕ РАВНО В УСЛОВИЯХ ОБОЗНАЧАЕТСЯ ТАК
        openModal()
        modalWasShown = true

    }

})

/*const scrollHeight = window.innerHeight + window.scrollY; : В этой строке вычисляется текущая высота 
прокрутки от верха окна браузера. window.innerHeight представляет высоту видимой области окна браузера, 
а window.scrollY - количество пикселей, на которое пользователь прокрутил страницу от верхней части. 
Свойство documentElement возвращает documentElement документа в виде объекта Element.
Для HTML-документов возвращаемым объектом является элемент <html>.*/

//ЧЕРЕЗ 10 СЕКУНД ПО ОТКЫТИЮ СТРАНИЦЫ
/* 1 вАРИАНТ - открывает через 10 секунд при переоде на любую страницу, т.е. через 10 сек он откроет модальное окно 1 и не окткроет,
 до того момента как пользователь переключится на другую старницу */
// let showModal = false
// const timeOut = () => {
//     if (!showModal) {
//         setTimeout(openModal, 10000)
//         showModal = true
//     }
// }
// timeOut()


/* 2 ВАРИАНТ - откроет при загрузке сайта 1 раз и больше нигде при загрузке другой страницы сайта отркываться не будет*/
// Функция для проверки, было ли модальное окно уже открыто в текущей сессии
function showModal() {
    const hasModalShown = sessionStorage.getItem("modalShown"); //

    if (!hasModalShown) {
        setTimeout(openModal, 10000)
        sessionStorage.setItem("modalShown", "true");
    }
}

// Проверяем, было ли модальное окно уже открыто в текущей сессии
showModal();