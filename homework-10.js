
import { products } from './product-cards.js';
import { imageSrc } from './product-cards.js';
const cardTemplate = document.getElementById('card-template');
const cardsList = document.getElementById('cards-list');

// 3-е задание, функция для запроса количества карточек у пользователя c проверкой на корректность ввода
function getCardsCount() {

  const answer = prompt('Введите количество карточек для отображения (1-5):'); 

  if (answer === null) {
    return 1;
  }

  const count = Number(answer);

  if (count >= 1 && count <= 5 && Number.isInteger(count)) {
    return count;
  }
 
  alert('Пожалуйста, введите целое число от 1 до 5.');
  return getCardsCount();

};

const cardsCount = getCardsCount();

// рендеринг карточек на основе введенного пользователем количества

function renderCards(count) {
  const selectedProducts = products.slice(0, count);
  selectedProducts.forEach((product) => {
    const cardClone = cardTemplate.content.cloneNode(true);
    cardClone.querySelector('.cards-list__product-image').src = imageSrc + product.image;
    cardClone.querySelector('.cards-list__product-image').alt = product.alt;
    cardClone.querySelector('.cards-list__product-purpose').textContent = product.purpose;
    cardClone.querySelector('.cards-list__product-title').textContent = product.title;
    cardClone.querySelector('.cards-list__description').textContent = product.description;

    const compositionList = cardClone.querySelector('.cards-list__product-composition ul');
    product.composition.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = item;
      compositionList.appendChild(listItem);
    });

    cardClone.querySelector('.cards-list__product-price span').innerHTML = `${product.price} &#x20bd;`;
    cardsList.appendChild(cardClone);
  });
}

renderCards(cardsCount);




// 4-е задание, массив с именами карточек и их описаниями
const cardNames = products.reduce((acc, product) => {

  acc.push({[product.title]: product.description });
  return acc;
}, []);

console.log(cardNames);