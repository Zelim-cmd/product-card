// Объект с моими данными
const myPerson = {
  firstName: "Zelimkhan",
  surName: "Isaev",
  age: 23,
  email: "zelim@example.com",
  job: "teacher",
  region: "Chechnya",
  city: "Grozny"
}

// Данные авто
const car = {
  make: 'Toyota',
  model: '2018',
  gearbox: 'automatic',
  engine: 3.5,
  mileage: 10000,
  owner: myPerson,
  maxSpeed: 350
}

// Задание номер 5
function setMaxSpeed(car, speed) {
  if (!car.maxSpeed) {
    car.maxSpeed = speed;
    console.log(`Задана новая максимальная скорость: ${speed}`)
  } else {
    console.log(`Максимальная уже была задана! Она равна ${car.maxSpeed}`)
    return
  }
}

setMaxSpeed(car, 300)

// Задание номер 6
function getCarInfo(obj, prop) {
  console.log(obj[prop])
}

getCarInfo(car, `make`)

// Задание номер 7
const products = ['Яблоко', 'Апельсин', 'Груша', 'Банан', 'Виноград'];

// Задание номер 8
const books = [
  {
    title: 'Война и мир',
    author: 'Лев Толстой',
    year: 1869,
    color: 'blue',
    genre: 'Роман'
  },
  {
    title: 'Преступление и наказание',
    author: 'Фёдор Достоевский',
    year: 1866,
    color: 'red',
    genre: 'Роман'
  },
  {
    title: 'Мастер и Маргарита',
    author: 'Михаил Булгаков',
    year: 1967,
    color: 'green',
    genre: 'Роман'
  },
  {
    title: 'Анна Каренина',
    author: 'Лев Толстой',
    year: 1877,
    color: 'yellow',
    genre: 'Роман'
  }
]

books.push({
  title: '1984',
  author: 'Джордж Оруэлл',
  year: 1949,
  color: 'gray',
  genre: 'Роман'
})

console.log(books[books.length - 1])

// Задание номер 9
const educationBooks = [
  {
    title: 'Математика ',
    author: 'Иван Иванов',
    year: 2020,
    color: 'blue',
    genre: 'Учебник'
  },
  {
    title: 'Физика',
    author: 'Пётр Петров',
    year: 2021,
    color: 'red',
    genre: 'Учебник'
  }
]

const allBooks = [...books, ...educationBooks]

// Задание номер 10
const newBooksList = allBooks.map(book => ({...book, isRare: book.year < 2000 ? true : false }))
newBooksList.forEach(book => {
  if (book.isRare) {
    console.log(`Книга "${book.title}" является редкой!`)
  } else {
    console.log(`Книга "${book.title}" не является редкой.`)
  }
})