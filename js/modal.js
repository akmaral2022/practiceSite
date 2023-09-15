//MODAL
const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const modalCloseButton = document.querySelector('.modal_close')
const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
    modalWasShown = true

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

let modalWasShown = false
window.addEventListener('scroll', () => {
    const scrollHeight = window.innerHeight + window.scrollY;
    const pageHeight = document.documentElement.scrollHeight;

    // Если пользователь прокрутил до определенной точки (здесь, 100% страницы)
    if (scrollHeight >= pageHeight * 1 && !modalWasShown) {   // ЗАПОМНИТЬ ЧТО НЕ РАВНО В УСЛОВИЯХ ОБОЗНАЧАЕТСЯ ТАК
        openModal()

    }

})

/*const scrollHeight = window.innerHeight + window.scrollY; : В этой строке вычисляется текущая высота 
прокрутки от верха окна браузера. window.innerHeight представляет высоту видимой области окна браузера, 
а window.scrollY - количество пикселей, на которое пользователь прокрутил страницу от верхней части. 
Свойство documentElement возвращает documentElement документа в виде объекта Element.
Для HTML-документов возвращаемым объектом является элемент <html>.*/

let showModal = false
//const time = 10
const timeOut = () => {
    if (!showModal) {
        setTimeout(openModal, 10000)
        showModal = true
    }
}
timeOut()

