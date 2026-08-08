const getWeather = (city, temperature) => {
  console.log(`Сейчас в ${city} температура ${temperature} градусов по цельсию!`)
};

getWeather("Грозный", 31)

const LIGHT_SPEED = 299792458;
const getSpeed = (speed) => {
  if (speed > LIGHT_SPEED) {
    console.log("Сверхсветовая скорость")
  } else if (speed < LIGHT_SPEED) {
    console.log("Субсветовая скорость")
  } else {
    console.log("Скорость света")
  }
};

getSpeed(299792457)

let productName = "iPhone 14 Pro Max";
let productPrice = 150000;

const buyProduct = (budget) => {
  if (budget >= productPrice) {
    console.log(`${productName} приобретен! Спасибо за покупку!`);
  } else {
    console.log(`Вам не хватает ${productPrice - budget}! Пополните баланс!`);
  }
};

buyProduct(200000)

let userName = "Омар";
let userAge = 25;
let userCity = "Сочи";
let userCountry = "Россия";
let userEmail = "omar@example.com";

const getUserInfo = () => {
  console.log(`Имя: ${userName}, Возраст: ${userAge}, Город: ${userCity}, Страна: ${userCountry}, Email: ${userEmail}`);
};

getUserInfo()

