/*
Домашнее Задание: 

1) Переписать все прошлые ДЗ в проекте связанные с запросами на fetch и добавить использование асинхронных функций (async await) и использовать блок (try catch).

2) Создать отдельную страницу в проекте внутри которого должен отображаться header и footer, а между ними карточки. Каждая карточка должна иметь текст и описание, их описание вы получите отправив запрос.
- у каждой карточки должны быть: изображение (любое), тайтл и описание (У всех карточек может быть одинаковая картинка)
- основной момент: GET запросом получаете эти данные: https://jsonplaceholder.typicode.com/posts
Это массив, на основе этих данных рендерите карточки (как тайтл берете - “title”, как описание - “body”) 
вы должны использовать async await
4) Подготовить ваш проект к следующему уроку! Будете мне её презентовать) 
5) Подготовиться к итоговому тесту
6) Скачать и установить на свой ноутбук node.js к следующему уроку => скачать можно тут  👉 https://nodejs.org/ru скачиваем LTS
*/
const wrapper = document.querySelector('.wrapper')
const cardBody = document.querySelector('.card__body')
window.onload = async () => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
        const allCards = await response.json()
        allCards.forEach((card) => {
            const personCard = document.createElement('div')
            personCard.setAttribute('class', 'person__card')
            personCard.innerHTML = `
        <img src="../img/2.jpg">
    <p>Название: ${card.title}</p>
    <p>Статья: ${card.body}</p>
    `
            cardBody.append(personCard)
        })
    } catch {
        console.error('Произашда ошибка в коде страницы');
    }
}

