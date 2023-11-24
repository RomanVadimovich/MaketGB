const button = document.querySelector('.menu__btn')
const menu = document.querySelector('.menu__list')
const crossClose = document.querySelector('.menu__list-btn-close')

button.addEventListener('click', () => {
    menu.classList.toggle('none')
})

crossClose.addEventListener('click', () => {
    menu.classList.add('none')
})




