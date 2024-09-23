const curYear = 2024;

let name1 = prompt("Имя 1");
let age1 = curYear - parseInt(prompt('Год рождения 1'));
let name2 = prompt("Имя 2");
let age2 = curYear - parseInt(prompt('Год рождения 2'));
let name3 = prompt("Имя 3");
let age3 = curYear - parseInt(prompt('Год рождения 3'));

let avgAvg = ((age1 + age2 + age3) / 3);
let index = 1;
console.log(index++, name1, age1);
console.log(index++, name2, age2);
console.log(index, name3, age3);
console.log(`Средний возраст: ${avgAvg}`);