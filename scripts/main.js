// 1 Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log

let some_variable_string = 'hello';
console.log(some_variable_string);

some_variable_string = 'owu';
console.log(some_variable_string);

some_variable_string = 'com';
console.log(some_variable_string);

some_variable_string = 'ua';
console.log(some_variable_string);

let some_variable_number = 1;
console.log(some_variable_number);

some_variable_number = 10;
console.log(some_variable_number);

some_variable_number = -999;
console.log(some_variable_number);

some_variable_number = 123;
console.log(some_variable_number);

some_variable_number = 2.7;
console.log(some_variable_number);

some_variable_number = 16;
console.log(some_variable_number);

const PI = 3.14;
console.log(PI);

let some_variable_boolean = true;
console.log(some_variable_boolean);

some_variable_boolean = false;
console.log(some_variable_boolean);

// 2 Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Graham';
let middleName = 'Leanne';
let lastName = 'Stepanovych';
let person = `${firstName} ${middleName} ${lastName}`;

console.log(person)

// 3 За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

let a = 100;
let b = '100';
let c = true;

console.log('a - ', typeof a)
console.log('b - ', typeof b)
console.log('c - ', typeof c)

// Додаткове для тих хто цікавився prompt`oм
// 4. За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let personName = prompt('Insert your name:', 'Leanne');
let personLastName = prompt('Insert your lastName:', 'Graham');
let personYear = prompt('How old are you:', '18');

console.log(`Hello! My name ${personName} ${personLastName}.I'm ${personYear}.`)