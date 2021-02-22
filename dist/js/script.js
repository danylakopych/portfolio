const humburger = document.querySelector('.humburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

humburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const scale = document.querySelectorAll('.skills__statics-procent'),
    scale_active = document.querySelectorAll('.skills__statics-scale span');

scale.forEach( (item, i) => {
    scale_active[i].style.width = item.innerHTML;
});