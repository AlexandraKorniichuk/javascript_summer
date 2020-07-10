//task 1
let name = "Генератор защитного поля";
let price = 1000;
console.log(`Выбран "${name}", цена за штуку "${price}" кредитов`);
price = 2000;
console.log(`Выбран "${name}", цена за штуку "${price}" кредитов`);

//task 2
const total = 100;
let ordered = 50;
//situation 1
if (ordered > total) {
  console.log("На складе недостаточно твоаров!");
} else {
  console.log("Заказ оформлен, с вами свяжется менеджер");
}
//situation 2
ordered = 130;
if (ordered > total) {
  console.log("На складе недостаточно товаров!");
} else {
  console.log("Заказ оформлен, с вами свяжется менеджер");
}

//task 3
const ADMIN_PASSWORD = "jqueryismyjam";
let message;
const enter = prompt("Enter password please");
// cancel - null
// ok - jqueryismyjam
// something else
if (enter == null) {
  message = "Отменено пользователем!";
  const none = alert(message);
  console.log(none);
} else if (enter == ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
  const welcome = alert(message);
  console.log(welcome);
} else {
  message = "Доступ запрещен, неверный пароль!";
  const wrong = alert(message);
  console.log(wrong);
};

//task 4
let credits = 23580;
let pricePerDroid = 3000;
let message2;
const quantity = prompt("Какое колчиество роботов вы хотите купить?");
if (quantity == null) {
  message2 = "Отменено пользователем!";
  const none2 = alert(message2);
  console.log(none2);
} else if (quantity * pricePerDroid > credits) {
  message2 = "Недостаточно средств на счету!";
  const notenoughmoney = alert(message2);
  console.log(notenoughmoney);
} else {
  let droids;
  droids = credits - pricePerDroid * quantity;
  message2 = `Вы купили ${quantity} дроидов, на счету осталось ${droids} кредитов.`;
  const enoughmoney = alert(message2);
  console.log(enoughmoney);
};

//task 5
let message3;
let cost;
const country = prompt("В какую страну вы хотите доставку?").toLowerCase();
switch (country) {
  case "китай":
    cost = 100;
    break;
  case "чили":
    cost = 250;
    break;
  case "австралия":
    cost = 170;
    break;
  case "индия":
    cost = 80;
    break;
  case "ямайка":
    cost = 120;
    break;
  default:
    message3 = "В вашей стране доставка не доступна";
    const nocountry = alert(message3);
    console.log(nocountry);
    break;
}
if (message3 == undefined) {
  message3 = `Доставка в ${country} будет стоить ${cost} кредитов`;
  const exit = alert(message3);
  console.log(exit);
};

//task 6
let total2 = 0;
let message4;
let per;
let input = prompt("Введите, пожалуйста число");
if (input == null) {
    message4 = `Общая сумма чисел равна ${total2}`;
    const sum = alert(message4);
    console.log(sum);
} else if (Number(input) == NaN) {
    message4 = "Было введено не число, попробуйте еще раз";
    const nonumber = alert(message4);
    console.log(nonumber);
} else {
    total2 = total2 + Number(input);
    console.log(total2);
};
