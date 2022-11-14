// 1. Створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function area_rectangle(a, b) {
    return a * b;
}

console.log(`Task 1: ${area_rectangle(5, 9)}`);
console.log('----------');

// 2. Створити функцію яка обчислює та повертає площу кола з радіусом r
function area_circle(r) {
    const PI = 3.14;
    return PI * r ** 2;
}

console.log(`Task 2: ${area_circle(5)}`);
console.log('----------');

// 3. Створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function area_cylinder(r, h) {
    const PI = 3.14;
    // Площа бокової поверхні циліндра:
    let s_1 = 2 * PI * r * h;
    // Площа повної поверхні циліндра:
    let s_2 = 2 * PI * r * (r + h);

    return `Площа бокової поверхі циліндра: ${Math.round(s_1 * 100) / 100}. Площа повної поверхні циліндра: ${Math.round(s_2 * 100) / 100}`;
}

console.log(`Task 3: ${area_cylinder(5, 8)}`);
console.log('----------');

// 4. Створити функцію яка приймає масив та виводить кожен його елемент
function arr(list) {
    console.log('Task 4: ');
    for (const item of list) {
        console.log(item);
    }
}

arr([23, 54, true, false, 'qwerty']);
console.log('----------');

// 5. Створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraph(p) {
    let divWrapText = document.createElement('div');
    let text = document.createElement("p");
    text.innerText = `Task 5 :${p}`;
    divWrapText.appendChild(text);
    document.body.appendChild(divWrapText);
}

paragraph('Leanne Graham');
document.write(`<p>********************</p>`);

// 6. Створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let ul_with_li = (text) => {
    document.write(`<ul>`);
    document.write(`<h4>Task 6</h4>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`</ul>`);
}

ul_with_li('Some text');
document.write(`<p>********************</p>`);

// 7. Створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let ul_li_cycle = (text, counter) => {
    document.write(`<ul>`);
    document.write(`<h4>Task 7</h4>`);
    for (let i = 0; i < counter; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

ul_li_cycle('Some text', 7);
document.write(`<p>********************</p>`);

// 8. Створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let ul_li_array = (arr) => {
    document.write(`<ol>`);
    document.write(`<h4>Task 8</h4>`);
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`);
    }
    document.write(`</ol>`);
}

ul_li_array([12, 'string', true, 'false', -33]);
document.write(`<p>*******************</p>`);

// 9. Створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ.Для кожного об'єкту окремий блок.

let users = [
    {
        id: 1,
        name: "Leanne Graham",
        age: 23,
    },
    {
        id: 2,
        name: "Ervin Howell",
        age: 32,
    },
    {
        id: 3,
        name: "Clementine Bauch",
        age: 34,
    },
    {
        id: 4,
        name: "Patricia Lebsack",
        age: 33,
    },
    {
        id: 5,
        name: "Chelsey Dietrich",
        age: 22,
    },
    {
        id: 6,
        name: "Mrs. Dennis Schulist",
        age: 44,
    },
    {
        id: 7,
        name: "Kurtis Weissnat",
        age: 41,
    },
    {
        id: 8,
        name: "Nicholas Runolfsdottir V",
        age: 48,
    },
    {
        id: 9,
        name: "Glenna Reichert",
        age: 18,
    },
    {
        id: 10,
        name: "Clementina DuBuque",
        age: 26,
    }
]

let block_user = (arr) => {
    document.write(`<h3>Task 9</h3>`);
    for (const user of arr) {
        document.write(`<div>`);
        document.write(`<h4>Id: ${user.id}</h4>`);
        document.write(`<h4>Name: ${user.name}</h4>`);
        document.write(`<h4>Age: ${user.age}</h4>`);
        document.write(`</div>`);
        document.write(`<p>----------------</p>`);
    }
}

block_user(users);
document.write(`<p>********************</p>`);

// 10. Створити функцію яка повертає найменьше число з масиву.

let min_arr = (arr) => {
    console.log('Task 10: ');
    let min_value;
    for (const item of arr) {
        if (!min_value) {
            min_value = item
        } else if (item < min_value) {
            min_value = item
        }
    }
    return min_value
}

let example_arr = [5, 7, 543, 1, 9, 4, 76, -98, -45, 56]
console.log(min_arr(example_arr));
console.log('----------');


// 11. Створити функцію яка приймає масив чисел,
// сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let sum_arr = (arr) => {
    console.log('Task 11: ');
    let sum_value =0;
    for (const item of arr) {
        if (typeof item !== 'number') {
            return 'Wrong data!';
        } else {
            sum_value += item
        }
    }
    return sum_value
}

example_arr = [5, 7, 543, 1, 9, 87, -876, -98, -45, 56]
console.log(sum_arr(example_arr));
console.log('----------');
