// 1. Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

let cutString = (str, n) => {

    let value = [];
    let str_index = 0;

    while (str_index <= str.length) {
        value.push(str.substring(str_index, str_index+n));
        str_index += n;
    }
    return value.join(' ');
}
document.write(`
    <h3>Additional 1:</h3>
    <p>${cutString('наслаждение', 3)}</p>
    <h4> ********** </h4>
`);

// 2. Напишіть функцію delete_characters(str, length),
// яка повертає підрядок, що складається із зазначеної кількості символів.
// document.writeln(delete_characters(str, 7)); // Каждый

let str = 'Каждый охотник желает знать';
let delete_characters = (str, length) => str.substring(0, length);

document.write(`
    <h3>Additional 2:</h3> 
    <p>${delete_characters(str, 7)}</p>
    <h4> ********** </h4>
`);


// 3. Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

str = "HTML JavaScript PHP";
let insert_dash = (str) => str.toUpperCase().replaceAll(' ',' - ',);

document.writeln(`
    <h3>Additional 3:</h3> 
    <p>${insert_dash(str)}</p>
    <h4> ********** </h4>
`);


// 4. Напишіть функцію, яка приймає рядок як аргумент і
// перетворює регістр першого символу рядка з нижнього регістру у верхній.
let str_capitalize = (str) => str[0].toUpperCase() + str.slice(1);

document.writeln(`
    <h3>Additional 4:</h3> 
    <p>${str_capitalize('javaScript html php.')}</p>
    <h4> ********** </h4>
    
`);
// 5. Дано список імен.
let n1 = 'Harry..Potter';
let n2 = 'Ron---Whisley';
let n3 = 'Hermione__Granger';
//     Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'


let validName = (strName) => {
    let validName = '';
    for (const letter of strName) {
        if (letter.toLowerCase().charCodeAt(0) >= 97 && letter.toLowerCase().charCodeAt(0) <= 122) {
            validName += letter;
        } else {
            if (validName[validName.length - 1] !== ' ') {
                validName += ' ';
            }
        }
    }
    return validName;
}
document.write(`
<h3>Additional 5:</h3> 
<h4>${n1} - ${validName(n1)}</h4>
<h4>${n2} - ${validName(n2)}</h4>
<h4>${n3} - ${validName(n3)}</h4>
<h4> ********** </h4>
`);

// 6. створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let arr_random = (length) => {
    let new_arr = [];
    for (let i = 0; i < length; i++) {
        new_arr.push(Math.round(Math.random() * 100));
    }
    return new_arr;
}
console.log('Additional 6:');
console.log(arr_random(10));
console.log('**********');

// 7. створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
//      Відсортувати його за допомоги sort

console.log('Additional 7:');
console.log(arr_random(15).sort((a, b) => a - b));
console.log('**********');

// 8. створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
//      відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)

console.log('Additional 8:');
console.log(arr_random(15).filter(number => number % 2 === 0 && number !== 0));
console.log('**********');


// 9. Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

let text = 'Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.';
let capitalize = (str) => {
    let text_array = [];
    str.split(' ').forEach((value)=> text_array.push(value[0].toUpperCase()+value.slice(1)))
    return text_array.join(' ');
};
console.log('Additional 9:');
console.log(capitalize(text));
console.log('**********');

// 10. Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :
// данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
// функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com

// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні".
// Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.

let check_email = (email) => {
    let char_status;

    for (let i = 0; i < email.length; i++) {
        if (
            email[i].toLowerCase().charCodeAt(0) >= 97 && email[i].toLowerCase().charCodeAt(0) <= 122 ||
            email[i].toLowerCase().charCodeAt(0) === 45 ||
            email[i].toLowerCase().charCodeAt(0) === 46 ||
            email[i].toLowerCase().charCodeAt(0) === 95 ||
            email[i].toLowerCase().charCodeAt(0) === 64
        ) {
            char_status = true;
        } else {
            char_status = false;
            break;
        }
    }

    if (
        char_status &&
        email.split('@').length === 2 &&
        email.includes('@') &&
        !email.startsWith('@') &&
        !email.endsWith('@') &&
        email.includes('.') &&
        email.split('@')[1].indexOf('.') > 2
    ) {
        return email;
    }
    return 'Wrong email'
}
console.log('Task 10: ')
console.log(check_email('someemail@gmail.com'));
console.log(check_email('someeMAIL@gmail.com'));
console.log(check_email('someeMAIL@i.ua'));
console.log(check_email('some.email@gmail.com'));
console.log('**********');


// 11. є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
let sort_modules = (array) => array.sort((x, y) => y.modules.length - x.modules.length)

console.log('Task_11:');
console.log(sort_modules(coursesArray));
console.log('**********');

// 12. Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
let symb = "о";
str = "Астрономия это наука о небесных объектах";
let count = (str, stringsearch) => {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === stringsearch) {
            counter++;
        }
    }
    return counter;
}
document.writeln(`
    <h3>Task 12.</h3>
    <h4>${count(str, symb)}</h4>
    <h3>**********</h3>
`)

// 13. Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
str = "Сила тяжести приложена к центру масс тела";

let cut_string = (str, n) => {
    return str.split(' ').slice(0, n).join(' ');
}
document.writeln(`
    <h3>Task 13</h3>
    <h4>${cut_string(str, 5)}</h4>
    <h3>**********</h3>
`);


// 14. стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let books_array = [
    {
        'title': 'The Adventures of Sherlock Holmes',
        'pageCount': 307,
        'authors': [
            {
                'name': 'Arthur Conan Doyle',
                'age': 71,
            },
            {
                'name': '',
                'age': null,
            }
        ],
        'genre': ['Detective fiction']
    },
    {
        'title': "Harry Potter and the Philosopher's Stone",
        'pageCount': 523,
        'authors': [
            {
                "name": 'Joanne Rowling',
                'age': 57,
            },
            {
                'name': '',
                'age': null,
            },
            {
                'name': '',
                'age': null,
            }

        ],
        'genre': ['Fantasy']
    },
    {
        'title': 'The Hunchback of Notre-Dame',
        'pageCount': 440,
        'authors': [
            {
                'name': 'Victor-Marie Hugo',
                'age': 83,
            },
        ],
        'genre': ['Romanticism', 'Gothic fiction']
    }
]
console.log('Additional 14:')
console.log( books_array)

// 14-1. знайти наібльшу книжку.
console.log('Additional 14-1:')
let biggest_book = (array) => array.sort((x, y) => (y.pageCount - x.pageCount))[0];

console.log(biggest_book(books_array));
console.log('**********')

// 14-2. знайти книжку/ки з найбільшою кількістю жанрів
console.log('Additional 14-2:')
let biggest_genre_book = (array) => array.sort((x, y) => (y.genre.length - x.genre.length))[0];

console.log(biggest_genre_book(books_array));
console.log('**********')


// 14-3. знайти книжку/ки з найдовшою назвою
console.log('Additional 14-3:')
let largest_book = (array) => array.sort((x, y) => (y.title.length - x.title.length))[0];

console.log(largest_book(books_array));
console.log('**********')

// 14-4. знайти книжку/ки які писали 2 автори
console.log('Additional 14-4:')
let two_authors = (books)=>books.filter(value => value.authors.length === 2);

console.log(two_authors(books_array))
console.log('**********')
// 14-5. знайти книжку/ки які писав 1 автор
console.log('Additional 14-5:')
let one_author = (books)=>books.filter(value => value.authors.length === 1);

console.log(one_author(books_array))
console.log('**********')
// 14-6. вісортувати книжки по кількості сторінок по зростанню
console.log('Additional 14-6:')
let sort_book_by_page = (array) => array.sort((x, y) => x.pageCount - y.pageCount);

console.log(sort_book_by_page(books_array));
console.log('**********')


