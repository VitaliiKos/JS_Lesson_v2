// 1.створити масив з:
//     1. з 5 числових значень
//     2. з 5 стічкових значень
//     3. з 5 значень стрічкового, числового та булевого типу
//     4. та вивести його в консоль
let arr_num = [987, -4563, 1, 0, -1111];
let arr_str = ['qwerty', '12345', 'QAZ', 'OWU'];
let arr_list = [987, '987', false, true, 'True'];
console.log(`Завдання 1.1 ${arr_num}`);
console.log('----------');
console.log(`Завдання 1.2 ${arr_str}`);
console.log('----------');
console.log(`Завдання 1.3 ${arr_list}`);
console.log('----------');

// 2. Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let empty_arr = [];
empty_arr[0] = '0';
empty_arr[1] = '159';
empty_arr[2] = 369;
empty_arr[3] = false;
empty_arr[4] = 'true';
empty_arr[5] = [444, true, 'True'];
console.log(`Завдання 2. ${empty_arr}`);
document.write("----------", "<br>");

// 3. є масив [2,17,13,6,22,31,45,66,100,-18] :
//     1. перебрати його циклом while
let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let i = 0;
console.log('Завдання 3.1. Перебрати масив циклом while [2, 17, 13, 6, 22, 31, 45, 66, 100, -18].');
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}
console.log('----------');

//     2. перебрати його циклом for
console.log('Завдання 3.2. Перебрати його циклом for.');
for (let i of arr) {
    console.log(i);
}
console.log('----------');

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
i = 1;
console.log('Завдання 3.3. Перебрати циклом while та вивести  числа тільки з непарним індексом.');
while (i < arr.length) {
    console.log(`index ${i}: ${arr[i]}`);
    i += 2;
}
console.log('----------');

//     4. перебрати циклом for та вивести  числа тільки з непарним індексом
console.log('Завдання 3.4. Перебрати циклом for та вивести  числа тільки з непарним індексом.');

for (i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
        console.log(`index ${i}: ${arr[i]}`);
    }
}
console.log('----------');

//     5. перебрати циклом while та вивести  числа тільки парні  значення
console.log('Завдання 3.5. перебрати циклом while та вивести  числа тільки парні  значення.');

i = 0;
while (i < arr.length) {
    if (arr[i] % 2 === 0) {
        console.log(`index ${i}: ${arr[i]}`);
    }
    i++;
}
console.log('----------');

//     6. перебрати циклом for та вивести  числа тільки парні  значення
console.log('Завдання 3.6. Перебрати циклом for та вивести  числа тільки парні  значення.');

for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log(`index ${i}: ${arr[i]}`);
    }
}
console.log('----------');

//     7. замінити кожне число кратне 3 на слово "okten"
console.log('Завдання 3.7. Замінити кожне число кратне 3 на слово "okten"');

for (i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
        arr[i] = 'okten';
    }
}
console.log(`${arr}`);
console.log('----------');

//     8. вивести масив в зворотньому порядку.
console.log('Завдання 3.8. Вивести масив в зворотньому порядку.');

arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for (let j = arr.length - 1; j >= 0; j--) {
    console.log(arr[j]);
}
console.log('----------');

//     9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
let k = arr.length - 1;
console.log('Завдання 3.9-1. Перебрати масив циклом while');
while (k >= 0) {
    console.log(arr[k]);
    k--;
}
console.log('----------');

console.log('Завдання 3.9-2. перебрати його циклом for');
for (let k = arr.length - 1; k >= 0; k--) {
    console.log(arr[k]);
}
console.log('----------');

console.log('Завдання 3.9-3. перебрати циклом while та вивести  числа тільки з непарним індексом');
k = arr.length - 1;
while (k >= 0) {
    if (k % 2 !== 0) {
        console.log(`index ${k}: ${arr[k]}`);
    }
    k--;
}
console.log('----------');

console.log('Завдання 3.9-4. перебрати циклом for та вивести  числа тільки з непарним індексом');
k = arr.length - 1;
for (; k >= 0; k--) {
    if (k % 2 !== 0) {
        console.log(`index-${k}: ${arr[k]}`);
    }
}
console.log('----------');

console.log('Завдання 3.9-5. перебрати циклом while та вивести  числа тільки парні  значення');
k = arr.length - 1;
while (k >= 0) {
    if (arr[k] % 2 === 0) {
        console.log(`index-${k}: ${arr[k]}`);
    }
    k--;
}
console.log('----------');

console.log('Завдання 3.9-6. перебрати циклом for та вивести  числа тільки парні  значення');
k = arr.length - 1;
for (; k >= 0; k--) {
    if (arr[k] % 2 === 0) {
        console.log(`index-${k}: ${arr[k]}`);
    }
}
console.log('----------');

console.log('Завдання 3.9-7. замінити кожне число кратне 3 на слово "okten"');
k = arr.length - 1;
for (; k >= 0; k--) {
    if (arr[k] % 3 === 0) {
        arr[k] = 'okten';
    }
}
console.log(`${arr} `);
console.log('----------');

// 4. Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
console.log('Завдання 4. Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.');

let num_item = [123, 456, 789, 0, -987, -654, -321, 159, -357, 953];
for (let i = 0; i < num_item.length; i++) {
    console.log(num_item[i]);
}
console.log('----------');

// 5. Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
console.log('Завдання 5. Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.');

let str_item = ['Leanne ', 'Graham', 'Ervin ', 'Howell', 'Clementine ', 'Dennis ', 'Patricia ', 'Kurtis ',
    'Chelsey ', 'Dietrich'];
for (let i = 0; i < str_item.length; i++) {
    console.log(str_item[i]);
}
console.log('----------');


// 6. Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
console.log('Завдання 6. Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.');

let diff_item = ['Leanne', -9, true, 'Graham', 'false', 'Clementine', 'Dennis', false, -1, 'Kurtis'];
for (let i = 0; i < diff_item.length; i++) {
    console.log(diff_item[i]);
}
console.log('----------');

// 7. Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof
// вивести тільки булеві елементи
console.log('Завдання 7. Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та ' +
    'typeof вивести тільки булеві елементи');

for (let i = 0; i < diff_item.length; i++) {
    if (typeof diff_item[i] === "boolean") {
        console.log(diff_item[i]);
    }
}
console.log('----------');

// 8. Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести
// тільки числові елементи
console.log('Завдання 8. Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та ' +
    'typeof вивести тільки числові елементи');

for (let i = 0; i < diff_item.length; i++) {
    if (typeof diff_item[i] === "number") {
        console.log(diff_item[i]);
    }
}
console.log('----------');
// 9. Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки
// рядкові елементи
console.log('Завдання 9. Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та ' +
    'typeof вивести тільки рядкові елементи');

for (let i = 0; i < diff_item.length; i++) {
    if (typeof diff_item[i] === "string") {
        console.log(diff_item[i]);
    }
}
console.log('----------');

// 10. Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
let empty_mas = [];
empty_mas[0] = '1';
empty_mas[1] = '2';
empty_mas[2] = 3;
empty_mas[3] = false;
empty_mas[4] = 1;
empty_mas[5] = ['4567'];
empty_mas[6] = [NaN];
empty_mas[7] = ['null'];
empty_mas[8] = ['None'];
empty_mas[9] = [741];

for (let i = 0; i < empty_mas.length; i++) {
    console.log(empty_mas[i]);
}
console.log('----------');

// 11. Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
document.write(`Завдання 10. Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через 
                                console.log та document.write`, "<br>")
for (i = 1; i <= 10; i++) {
    console.log(i);
    document.write(i, "  ");
}
console.log('----------');
document.body.append(document.createElement('hr'))

// 12. Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
document.write(`Завдання 12. - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через 
                                console.log та document.write`, "<br>")
for (i = 1; i <= 100; i++) {
    console.log(i);
    document.write(i, "  ");
}
console.log('----------');
document.body.append(document.createElement('hr'))

// 13. Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
document.write(`Завдання 13. Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через 
                                console.log та document.write`, "<br>")
for (i = 1; i <= 100; i += 2) {
    console.log(i);
    document.write(i, " ");
}
console.log('----------');
document.body.append(document.createElement('hr'))

// 14. Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
document.write(`Завдання 14. Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через 
                                console.log + document.write`, "<br>")
for (i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
        document.write(i, " ");
    }
}
console.log('----------');
document.body.append(document.createElement('hr'))

// 15. Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
document.write(`Завдання 15. Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через 
                            console.log + document.write`, "<br>")
for (i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
        document.write(i, " ");
    }
}
console.log('----------');
document.body.append(document.createElement('hr'))

// 16.стоврити масив книжок (назва, кількість сторінок, автори , жанри).
console.log('16.стоврити масив книжок (назва, кількість сторінок, автори , жанри).');

//     1. Знайти наібльшу книжку.
console.log('16.1 Знайти наібльшу книжку.');

let books = [
    {
        name: 'book 111',
        page: 555,
        authors: [{name: 'author1', age: 85}, {name: 'author2', age: 54}],
        genre: ['horror']
    },
    {
        name: 'book 22',
        page: 777,
        authors: [{name: 'author2', age: 54}],
        genre: ['drama', 'thriller']
    },
    {
        name: 'book 3333',
        page: 333,
        authors: [{name: 'author3', age: 62}],
        genre: ['science fiction', 'fantasy', 'Adventure']
    }
]

let biggest_book;
for (const book of books) {
    if (!biggest_book) {
        biggest_book = book
    } else if (biggest_book.page < book.page) {
        biggest_book = book
    }
}
console.log(biggest_book)
console.log('----------');

//     2. знайти книжку/ки з найбільшою кількістю жанрів
console.log('16.2. Знайти книжку/ки з найбільшою кількістю жанрів.');

let biggest_bookGenre = [];
for (const book of books) {
    if (!biggest_bookGenre.length) {
        biggest_bookGenre[0] = book
    } else if (book.genre.length > biggest_bookGenre[0].genre.length) {
        biggest_bookGenre[0] = book
    } else if (biggest_bookGenre[0].genre.length === book.genre.length) {
        biggest_bookGenre[biggest_bookGenre.length] = book
    }
}
console.log(biggest_bookGenre)
console.log('----------');

//     3. знайти книжку/ки з найдовшою назвою
console.log('16.3. Знайти книжку/ки з найдовшою назвою.');

let biggest_bookTitle = [];
for (const book of books) {
    if (!biggest_bookTitle.length) {
        biggest_bookTitle[0] = book
    } else if (book.name.length > biggest_bookTitle[0].name.length) {
        biggest_bookTitle[0] = book
    } else if (biggest_bookTitle[0].name.length === book.name.length) {
        biggest_bookTitle[biggest_bookTitle.length] = book
    }
}
console.log(biggest_bookTitle)
console.log('----------');

//     4. знайти книжку/ки які писали 2 автори
console.log('16.4. знайти книжку/ки які писали 2 автори');

let bookWithTwoAuthors = [];
for (const book of books) {
    if (book.authors.length === 2) {
        bookWithTwoAuthors[bookWithTwoAuthors.length] = book
    }
}
console.log(bookWithTwoAuthors)
console.log('----------');

//     5. знайти книжку/ки які писав 1 автор
console.log('16.5. знайти книжку/ки які писав 1 автор.');

let bookWithOneAuthors = [];
for (const book of books) {
    if (book.authors.length === 1) {
        bookWithOneAuthors[bookWithOneAuthors.length] = book
    }
}
console.log(bookWithOneAuthors)
console.log('----------');