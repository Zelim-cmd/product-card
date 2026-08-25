// УРОВЕНЬ 1

import { postComments } from "./comments.js";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNumbers = numbers.filter(num => num >= 5)
console.log(newNumbers)

// Создать массив строк, относящихся к любой сущности, проверить, есть ли в массиве какая-то определенная сущность.

const books = [
  "Три основы",
  "Четыре правила",
  "Честь основ",
  "Отвеведние сомнений",
  "Облегченный фикх",
  "Условия молитвы",
  "Вопросы времен невежества"
]

books.forEach(book => {
  if (book.includes("Облегченный фикх")) {
    console.log(`"Облегченный фикх" есть в списке!`)
    return
  }
})

// другой вариант как бы я реализовал:

function isBookInArray(books) {
  const stringBooks = books.join(" ")
  console.log(stringBooks.includes("Облегченный фикх") ? `Книга "Облегченный фикх" есть в списке!` : "Такой книги нет!")
}

isBookInArray(books)

const cars = [
  {
    make: "Toyota",
    model: "Camry",
    year: "2018"
  },
  {
    make: "BMW",
    model: "M5",
    year: "2015"
  },
  {
    make: "Mercedes",
    model: "C",
    year: "2020"
  },
  {
    make: "lada",
    model: "Granta",
    year: "2025",
    maxSpeed: 200
  }
];

cars.forEach(car => car.maxSpeed ? console.log(`Максимальная скорость у '${car.model}': ${car.maxSpeed}`) : '')

function reverseArray(arr) {
  return arr.reverse()
}

const reversedNumbers = reverseArray(numbers)
console.log(reversedNumbers)

const reversedCars = reverseArray(cars)
console.log(reversedCars)

// УРОВЕНЬ 2
const filteredComments = postComments.filter(comm => comm.email.includes('.com'))
console.log(filteredComments)

const newPostComments = postComments.map(comm => ({...comm, postId: comm.id >= 5 ? 2 : 1}))

console.log(newPostComments)

// 9 пункт
const commentNames = postComments.map(({id, name}) => ({id: id, name: name}))

console.log(commentNames)

// 10 пункт
const newValidComments = postComments.map(comm => ({...comm, isInvalid: comm.body.length > 180 ? true : false}))

console.log(newValidComments)

// УРОВЕНь 3
// 11 пункт
// массив с эл.почтами через map()
const emails = postComments.map(post => post.email)
console.log(emails)

// то же самое через reduce

const emails2 = postComments.reduce((acc, post) => {
  acc.push(post.email)
  return acc
}, [])

console.log(emails2)

// 11 пункт 
const stringMails = emails.join(", ")
console.log(stringMails)