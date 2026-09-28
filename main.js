const btnChangeColorFirstCard = document.querySelector('.btn-change-color-first-card');
const btnChangeColorAllCards = document.querySelector('.btn-change-color-all-cards');
const btnOpenGoogle = document.querySelector('.btn-open-google');
const mainTitle = document.querySelector('.main-title');
const btnToggleColor = document.querySelector('.btn-toggle-color');

// btnChangeColorFirstCard.addEventListener('click', () => {
//     const firstCard = document.querySelector('.cards-list__card');
//     firstCard.style.backgroundColor = firstCard.style.backgroundColor === 'lightblue' ? '' : 'lightblue';
//     console.log('Цвет карточек изменен на светло-голубой');
// });

// btnChangeColorAllCards.addEventListener('click', () => {
//     const allCards = document.querySelectorAll('.cards-list__card');
//     allCards.forEach(card => {
//         card.style.backgroundColor = card.style.backgroundColor === 'lightgreen' ? '' : 'lightgreen';
//         console.log('Цвет карточки изменен на светло-зеленый');
//     });
// });

// btnOpenGoogle.addEventListener('click', () => {
//     const confirmOpen = confirm('Вы уверены, что хотите открыть страницу google.com?');
//     if (confirmOpen === true) {
//         window.open('https://www.google.com', '_blank');
//     } else {
//         alert('Открытие страницы google.com отменено.');
//     }
// });

// добавление кнопки для изменения цены на каждой карточке
// const cards = document.querySelectorAll('.cards-list__card');
// cards.forEach(card => {
//     const btn = document.createElement('button');
//     btn.textContent = 'Изменить цену';
//     btn.classList.add('btn-toggle-details', 'button');

//     btn.addEventListener('click', () => {
//         const priceElement = card.querySelector('.cards-list__product-price span');
//         let newPrice = prompt('Введите новую цену:');
//         newPrice = +newPrice;
//         if (typeof newPrice === 'number' && newPrice > 0) {
//             priceElement.textContent = `${newPrice} ₽`;
//         }
//     });
//     card.appendChild(btn);
// })


// генерация карточек из массива объектов
// const products = [
//   {
//     id: 1,
//     purpose: 'Для нормальной кожи',
//     title: 'Увлажняющий мусс',
//     description: 'Глубоко увлажняют кожу лица, оставляя её мягкой и гладкой.',
//     image: 'images/muss.png',
//     alt: 'Картинка мусса',
//     composition: [
//       'Активные натуральные комплексы',
//       'Витамины С, А, РР, В И Е',
//       'Солнцезащитные компоненты'
//     ],
//     price: 2750
//   },
//   {
//     id: 2,
//     purpose: 'Для нормальной кожи',
//     title: 'Увлажняющая маска',
//     description: 'Способствует удерживанию влаги в верхних слоях кожи.',
//     image: 'images/mask.png',
//     alt: 'Картинка маски',
//     composition: ['Воски', 'Минералы', 'Масла'],
//     price: 3500
//   },
//   {
//     id: 3,
//     purpose: 'Для нормальной кожи',
//     title: 'Гель для умывания',
//     description: 'Интенсивно очищает, не повреждает защитный барьер кожи.',
//     image: 'images/cream-wash.png',
//     alt: 'Картинка геля для умывания',
//     composition: [
//       'Минералы',
//       'Витамины С, А, РР, В И Е',
//       'Солнцезащитные компоненты'
//     ],
//     price: 1650
//   },
//   {
//     id: 4,
//     purpose: 'Для нормальной кожи',
//     title: 'Подарочный набор №1',
//     description: 'Набор, состоящий из увлажняющего крема и маски.',
//     image: 'images/gift1.png',
//     alt: 'Картинка подарочного набора №1',
//     composition: ['Воски', 'Минералы', 'Масла'],
//     price: 4750
//   },
//   {
//     id: 5,
//     purpose: 'Для нормальной кожи',
//     title: 'Подарочный набор №5',
//     description: 'Весь набор средств Invisible symphony, крем, маска, мусс и гель для умывания.',
//     image: 'images/gift5.png',
//     alt: 'Картинка подарочного набора №5',
//     composition: ['Воски', 'Минералы', 'Масла'],
//     price: 7520
//   }
// ];

// const addNewCardButton = document.querySelector('.add-new-card');
// addNewCardButton.addEventListener('click', () => {
// const prdPurpose = prompt('Введите назначение продукта:');
// const prdTitle = prompt('Введите название продукта:');
// const prdDescription = prompt('Введите описание продукта:');
// const prdImage = prompt('Введите путь к изображению продукта:');
// const prdAlt = prompt('Введите alt текст для изображения продукта:');
// const prdComposition = prompt('Введите состав продукта через запятую:');
// const prdPrice = +prompt('Введите цену продукта:');
//   if (prdPurpose && prdTitle && prdDescription && prdImage && prdAlt && prdComposition && prdPrice) {
//     const newProduct = {
//       id: products.length + 1,
//       purpose: prdPurpose,
//       title: prdTitle,
//       description: prdDescription,
//       image: prdImage,
//       alt: prdAlt,
//       composition: prdComposition.split(',').map(item => item.trim()),
//       price: prdPrice
//     };

//     products.push(newProduct);

//     const card = document.createElement('li');
//     card.classList.add('cards-list__card', 'card');

//     card.innerHTML = `
//       <img class="cards-list__product-image" src="${newProduct.image}" alt="${newProduct.alt}">
//       <span class="cards-list__product-purpose">${newProduct.purpose}</span>
//       <h2 class="cards-list__product-title">${newProduct.title}</h2>
//       <p class="cards-list__description">${newProduct.description}</p>
//       <div class="cards-list__product-composition">
//         <p>Состав:</p>
//         <ul>
//           ${newProduct.composition.map(item => `<li>${item}</li>`).join('')}
//         </ul>
//       </div>
//       <div class="cards-list__product-price">
//         <b>Цена:</b>
//         <span>${newProduct.price} &#x20bd;</span>
//       </div>
//       <button class="btn-change-composition button">Изменить состав</button>
//       <button class="btn-change-price button">Изменить цену</button>
//     `;

//     cardsList.appendChild(card);
//   }

//   products.push(newProduct);

//   const card = document.createElement('li');
//   card.classList.add('cards-list__card', 'card');

//   card.innerHTML = `
//     <img class="cards-list__product-image" src="${newProduct.image}" alt="${newProduct.alt}">
//     <span class="cards-list__product-purpose">${newProduct.purpose}</span>
//     <h2 class="cards-list__product-title">${newProduct.title}</h2>
//     <p class="cards-list__description">${newProduct.description}</p>
//     <div class="cards-list__product-composition">
//       <p>Состав:</p>
//       <ul>
//         ${newProduct.composition.map(item => `<li>${item}</li>`).join('')}
//       </ul>
//     </div>
//     <div class="cards-list__product-price">
//       <b>Цена:</b>
//       <span>${newProduct.price} &#x20bd;</span>
//     </div>
//     <button class="btn-change-composition button">Изменить состав</button>
//     <button class="btn-change-price button">Изменить цену</button>
//   `;

//   cardsList.appendChild(card);
// });

// const cardsList = document.getElementById('cards-list');

// products.forEach(product => {
//   const card = document.createElement('li');
//   card.classList.add('cards-list__card', 'card');

//   card.innerHTML = `
//     <img class="cards-list__product-image" src="${product.image}" alt="${product.alt}">
//     <span class="cards-list__product-purpose">${product.purpose}</span>
//     <h2 class="cards-list__product-title">${product.title}</h2>
//     <p class="cards-list__description">${product.description}</p>
//     <div class="cards-list__product-composition">
//       <p>Состав:</p>
//       <ul>
//         ${product.composition.map(item => `<li>${item}</li>`).join('')}
//       </ul>
//     </div>
//     <div class="cards-list__product-price">
//       <b>Цена:</b>
//       <span>${product.price} &#x20bd;</span>
//     </div>
//     <button class="btn-change-composition button action-button">Изменить состав</button>
//     <button class="btn-change-price button action-button">Изменить цену</button>
//   `;

//   cardsList.appendChild(card);
// });

// const changeCompositionButtons = document.querySelectorAll('.btn-change-composition');
// changeCompositionButtons.forEach((button, index, parent) => {
//   button.addEventListener('click', () => {
//     console.log(` Изменение состава  ${button}`);
//     console.log(` Карточка продукта:`, cardsList.children[index]);
//     console.log(`parent: ${parent[index]}`);
//     const newComposition = prompt('Введите новый состав через запятую:');
//     if (newComposition) {
//       const compositionArray = newComposition.split(',').map(item => item.trim());
//       const compositionList = cardsList.children[index].querySelector('.cards-list__product-composition ul');
//       compositionList.innerHTML = compositionArray.map(item => `<li>${item}</li>`).join('');
//     }
//   });
// });

// const changePriceButtons = document.querySelectorAll('.btn-change-price');
// changePriceButtons.forEach((button, index) => {
//   button.addEventListener('click', () => {
//     const newPrice = prompt('Введите новую цену:');
//     if (newPrice) {
//       const priceElement = cardsList.children[index].querySelector('.cards-list__product-price span');
//       priceElement.textContent = `${newPrice} ₽`;
//     }
//   });
// });

