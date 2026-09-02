const btnChangeColorFirstCard = document.querySelector('.btn-change-color-first-card');
const btnChangeColorAllCards = document.querySelector('.btn-change-color-all-cards');
const btnOpenGoogle = document.querySelector('.btn-open-google');
const mainTitle = document.querySelector('.main-title');
const btnToggleColor = document.querySelector('.btn-toggle-color');

btnChangeColorFirstCard.addEventListener('click', () => {
    const firstCard = document.querySelector('.cards-list__card');
    firstCard.style.backgroundColor = 'lightblue';
    console.log('Цвет карточек изменен на светло-голубой');
});

btnChangeColorAllCards.addEventListener('click', () => {
    const allCards = document.querySelectorAll('.cards-list__card');
    allCards.forEach(card => {
        card.style.backgroundColor = 'lightgreen';
        console.log('Цвет карточки изменен на светло-зеленый');
    });
});

btnOpenGoogle.addEventListener('click', () => {
    const confirmOpen = confirm('Вы уверены, что хотите открыть страницу google.com?');
    if (confirmOpen === true) {
        window.open('https://www.google.com', '_blank');
    } else {
        alert('Открытие страницы google.com отменено.');
    }
});

mainTitle.addEventListener('mouseenter', () => {
  const mainTitleContent = mainTitle.textContent;
  console.log(mainTitleContent);
});

btnToggleColor.addEventListener('click', () => {
    btnToggleColor.classList.toggle('btn-toggle-color-gray');
});