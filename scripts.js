let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let list = document.querySelector('.list');
let items = list.querySelectorAll('.item');
let indicator = document.querySelector('.indicadores');
let dots = indicator.querySelectorAll('ul li');

let active = 0;
let lastPosition = items.length - 1;

function setSlider(direction) {
    let oldItem = list.querySelector('.item.active');
    oldItem.classList.remove('active');

    items[active].style.setProperty('--calculation', direction);

    void items[active].offsetWidth;

    items[active].classList.add('active');

    dots.forEach(dot => dot.classList.remove('active'));
    dots[active].classList.add('active');

    indicator.querySelector('.number').innerHTML = '0' + (active + 1);
}

nextButton.onclick = () => {
    let direction = 1; 
    active = active + 1 > lastPosition ? 0 : active + 1;
    setSlider(direction);
}

prevButton.onclick = () => {
    let direction = -1; 
    active = active - 1 < 0 ? lastPosition : active - 1;
    setSlider(direction);
}