//task 1
const logItems = function (array) {
  let j = 1;
  for (let i = 0; i < array.length; i++) {
    console.log(`${j} -`, array[i]);
    j++;
  }
};
logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

//task 2
const calculateEngravingPrice = function(message, pricePerWord) {
  let arr = message.split(' ');
  let price = arr.length * pricePerWord;
  return price;
};

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
); // 80
console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
); // 160
console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
); // 240
console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
); // 120

//task 3
const findLongestWord = function (string) {
  let array = string.split(" ");
  let word;
  let length = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > length) {
      word = array[i];
      length = array[i].length;
    }
  }
  return word;
};
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'
console.log(findLongestWord("Google do a roll")); // 'Google'
console.log(findLongestWord("May the force be with you")); // 'force'

//task 4
const formatString = function (string) {
  if (string.length > 40) {
    const array = string.split("");
    for (let i = 0; i < string.length; i++) {
      if (i >= 39) {
        array.splice(i, 1);
      }
    }
    array.push("...");
    array.join("");
    return array;
  } else {
    return string;
  }
};
console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// вернется оригинальная строка
console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// вернется форматированная строка
console.log(formatString("Curabitur ligula sapien."));
// вернется оригинальная строка
console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
// вернется форматированная строка

//task 5
const checkForSpam = function (message) {
  message.split(' ');
  for (let i = 0; i < message.length; i++) {
    if (message[i].toLowerCase === 'spam' || message[i].toLowerCase === 'sale') {
      return true;
    }
    else {
      return false;
    }
  }
};
console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

//task 6
// let input = confirm(`Введите число`);
// const numbers = [];
// let total = 0;
// while (input !== null) {
//   input = prompt("Введите число");
//   input = Number(input);
//   if (Number.isNaN(input)) {
//     alert('Было введено не число, попробуйте еще раз');
//   } else {
//     numbers.push(input);
//   }
// }
// if (input === null) {
//   for (let i = 0; i < numbers.length; i++) {
//     total += numbers[i];
//   }
// }
// alert(`Общая сума равна ${total}`);
