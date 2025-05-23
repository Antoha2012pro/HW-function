// Завдання 1
// Напиши функцію logItems(array), яка отримує масив і використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента].

const logItems = function(array) {
    for (let i = 0; i < array.length; i += 1){
        console.log(`${i + 1} - ${array[i]}`);
    }
    return array;
}
console.log(logItems(['Mango', 'Poly', 'Ajax']));

// Завдання 2
// Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію calculateEngravingPrice(message, pricePerWord) приймаючу рядок (в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.
const calculateEngravingPrice = function(message, pricePerWord) {
    const result = message.split(" ");
    const totalPrice = result.length * pricePerWord;
    return totalPrice;
}

const stringMessage = "Напиши скрипт підрахунку вартості гравіювання прикрас";
const price = 5000;

const newMessage = "Lorem ipsum dolor sit amet consectetur adipisicing elit Dolore tempore facilis minus cumque asperiores corporis reprehenderit exercitationem debitis Numquam iusto blanditiis fuga adipisci voluptatibus assumenda modi harum mollitia velit animi sadam?";
const newPrice = 1000;

console.log(calculateEngravingPrice(stringMessage, price));
console.log(calculateEngravingPrice(newMessage, newPrice));

// Завдання 3
// Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.

const findLongestWord = function(string) {
  const words = string.split(" ");
  let longestWord = "";
  for (const i of words) {
    if (i.length > longestWord.length) {
      longestWord = i;
    }
  }
  console.log(words);
  console.log(longestWord);
  return longestWord;
}
findLongestWord("asdasdas asdasd asdsafhdfasd a sadddddddddddddddddddd");

// Завдання 4
// Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.
// Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому вигляді.
// Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів і додає в кінець рядка три крапки '...', після чого повертає укорочену версію.

const formatString = function(stringTwo) {
  if (stringTwo.length < 40) {
    console.log(stringTwo);
  } else {
    console.log(stringTwo.slice(0, 40) + '...');
  }
}
formatString("sdfhjsdkhfgsdkfhsdkfjhsdfhsdkfjhsdfkjhsdfkjsdhfkshdfksdfhkj");
formatString("sdfhjsdkhfgsdkf");

// Завдання 5
// Напиши функцію checkForSpam(message), приймаючу 1 параметр message — рядок. Функція перевіряє її на вміст слів spam і sale. Якщо знайшли заборонене слово, то функція повертає true, якщо заборонених слів немає функція повертає false. Слова в рядку можуть бути в довільному регістрі.
const checkForSpam = function(message) {
  const normalized = message.toLowerCase();
  if (normalized.includes('spam')) {
    return true;
  } else if (normalized.includes('sale')) {
    return true;
  } else {
    return false;
  }
}
console.log(checkForSpam(""));
console.log(checkForSpam("sale"));
console.log(checkForSpam("spam"));



// Завдання 6
// Напиши скрипт з наступним функціоналом:

// При завантаженні сторінки користувачеві пропонується в prompt ввести число. Введення зберігається в змінну input і додається в масив чисел numbers.
// Операція введення числа користувачем і збереження в масив триває до тих пор, пір, поки користувач не натисне Cancel в prompt.
// Після того як користувач припинив введення натиснувши Cancel, якщо масив не порожній, необхідно порахувати суму всіх елементів масиву і записати її в змінну total. Використовуй цикл for або for...of. Після чого в консоль виведи рядок 'Загальна сума чисел дорівнює [сума]'.

// 🔔 Робити перевірку того, що користувач ввів саме число, а не довільний набір символів, не обов'язково. Якщо хочеш, в разі некоректного введення, показуй alert з текстом 'Було введено не число, попробуйте ще раз', при цьому результат promptзаписувати в масив чисел не потрібно, після чого знову користувачеві пропонується ввести число в prompt.


let input;
const numbers = [];
let total = 0;

input = prompt('Введіть числа через кому, наприклад: 1,2,3');

if (input) {
  const parts = input.split(',');

  for (const part of parts) {
    numbers.push(Number(part));
  }

  for (const num of numbers) {
    total += num;
  }

  console.log(`Загальна сума чисел дорівнює ${total}`);
} else {
  console.log('Користувач нічого не ввів або натиснув Cancel.');
}


// Завдання 7 — додаткове, виконувати не обов'язково
// Є масив logins з логінами користувачів. Напиши скрипт додавання логіна в масив logins. Логін, який додається повинен:
// проходити перевірку на довжину від 4 до 16-ти символів включно
// бути унікальним, тобто бути відсутнім в масиві logins
// Розбий завдання на підзадачі за допомогою функцій.
// Напиши функцію isLoginValid(login), в якій перевір кількість символів параметра login і поверни true або false в залежності від того, чи потрапляє довжина параметра в заданий діапазон від 4-х до 16-ти символів включно.
// Напиши функцію isLoginUnique(allLogins, login), яка приймає список всіх логінів і логін, який додається, як параметри і перевіряє наявність login в массиве allLogins, повертає true якщо такого логіна ще немає і false якщо логін вже використовується.
// Напиши функцію addLogin(allLogins, login) яка:
// Приймає новий логін і масив всіх логінів як параметри
// Перевіряє валідність логіна використовуючи допоміжну функцію isLoginValid
// Якщо логін не валідний, припинити виконання функції addLogin і повернути радок 'Помилка! Логін повинен бути від 4 до 16 символів'
// Якщо логін валідний, функція addLogin перевіряє унікальність логіна за допомогою функції isLoginUnique
// Якщо isLoginUnique поверне false, тоді addLogin Не додає логін в массив масив і повертає рядок 'Такий логін уже використовується!'
// Якщо isLoginUnique поверне true, addLogin додає новий логін в logins і повертає рядок 'Логін успішно доданий!'
// 🔔 Принцип єдиної відповідальності функції — кожна функція робить щось одне. Це дозволяє перевикористати код і змінювати логіку роботи функції тільки в одному місці, не зачіпаючи роботу програми в цілому.
// Предикатні функції повертають тільки true або false. Такі функції прийнято називати починаючи з is: isLoginUnique і isLoginValid в нашому випадку.
// isLoginUnique тільки перевіряє чи є такий логін в масиві і повертає true або false.
// isLoginValid тільки перевіряє чи валідний логін і повертає true або false.
// addLogin додають чи не додають логін в масив. При цьому для перевірок умови додавання використовує результати викликів інших функцій — isLoginUnique і isLoginValid.