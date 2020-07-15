//task 3
const findLongestWord = function(string) {
    let array = string.split(' ');
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
  console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
  console.log(findLongestWord('Google do a roll')); // 'Google'
  console.log(findLongestWord('May the force be with you')); // 'force'
  
//task 4
const formatString = function(string) {
  if (string.length > 40) {
      let array = string.split('');
      array.slice(39);
      array.push('...');
      array.join('');
      return array;
  } else {
    return string;
  }
};
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка
console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка
console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));
// вернется форматированная строка

//task 6
//   let input;
//   const numbers = [];
//   let total = 0;
//   while (input != null) {
    // input = +prompt("Введите число");
//     numbers.push(input);
//     total += input;
//   };
//   alert(`Общая сума равна ${total}`);