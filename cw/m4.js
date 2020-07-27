"use strict";
//обратная функция (callback functions)
//высшего порядка
const toLearnFrontend = function (what, how) {
  how(what);
};
const language = "JavaScript";
const video = "Webinars";
//callbacks
const toRead = function (variable) {
  console.log(`I learn ${variable}`);
};
const toWacht = function (variable) {
  console.log(`I watch ${variable}`);
};
toLearnFrontend(language, toRead);
toLearnFrontend(video, toWacht);
toLearnFrontend("html", () => {
  console.log("Anonymous callback function");
});
//обстрагирование повторений
const repeatFunc = function (count) {
  let result;
  for (let i = 0; i <= count; i++) {
    result = i;
    console.log(result);
  }
};
repeatFunc(4);
//фильтрация массивов
const fruits = [
  { name: "apples", quantity: 200, isFresh: true },
  { name: "grapes", quantity: 150, isFresh: false },
  { name: "bananas", quantity: 100, isFresh: true },
  { name: "oranges", quantity: 120 },
];
const filterFruits = function (array, cbFunc) {
  const filterArray = [];
  for (let element of array) {
    const ok = cbFunc(element);
    if (ok) {
      filterArray.push(element);
    }
  }
  return console.log(filterArray);
};
filterFruits(fruits, (fresh) => fresh.isFresh);
filterFruits (fruits, (el) => el.quantity > 100);