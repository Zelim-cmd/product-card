// первое задание
const promoRequestForm = document.getElementById('promo-request__form');

promoRequestForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!promoRequestForm.checkValidity()) {
    promoRequestForm.reportValidity();
    return;
  } 

  const email = promoRequestForm.querySelector('.promo-request__input').value;

  console.log({ email });

});

// модальное окно регистрации
const registrationButton = document.querySelector(".btn-registration");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal-close");
const form = document.querySelector(".registration-form");

const firstName = document.getElementById("first-name").value;
const lastName = document.getElementById("last-name").value;
const birthDate = document.getElementById("birth-date").value;
const login = document.getElementById("login").value;
const password = document.getElementById("password").value;
const passwordRepeat = document.getElementById("password-repeat").value;

registrationButton.addEventListener("click", function () {
    modal.classList.add("modal-showed");
});

modalClose.addEventListener("click", function () {
    modal.classList.remove("modal-showed");
});

// нажатие на кнопку регистрации 

form.addEventListener("submit", function (event) {
    event.preventDefault();

if (!form.checkValidity()) {
    console.log("Регистрация отклонена");
    return; 
  }

  if (password !== passwordRepeat) {
    console.log("Регистрация отклонена: пароли не совпадают");
    return;
  }

  const userData = {
    firstName: firstName,
    lastName: lastName,
    birthDate: birthDate,
    login: login,
    password: password,
    createdOn: new Date()
};

  console.log(userData);
  
});