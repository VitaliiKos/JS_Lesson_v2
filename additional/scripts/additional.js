//  Всі функції повинні бути описані стрілочним типом!!!!
// 1. створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

let min_value = (a, b, c) => {
    let res = a;
    if (res > b) {
        res = b;
    }
    if (res > c) {
        res = c;
    }
    return res;
}

console.log(`Additional Task 1: Найменше число: ${min_value(33, -7, 111)}`);
console.log('----------');

// 2. створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let max_value = (a, b, c) => {
    // console.log(a<b, a<c)
    let res = a;
    if (res < b) {
        res = b;
    }
    if (res < c) {
        res = c;
    }
    return res;
}

console.log(`Additional Task 2: Найбільше число: ${max_value(83, -7, 111)}`);
console.log('----------');

// 3 створити функцію яка повертає найбільше число з масиву

let max_value_arr = (arr) => {
    let max_value = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max_value < arr[i]) {
            max_value = arr[i];
        }
    }
    return max_value
}
let test_arr = [54, 158, -95, 75, -986, 11];
console.log(`Additional Task 3: Найбільше число з масиву: ${max_value_arr(test_arr)}`);
console.log('----------');

// 4 створити функцію яка повертає найменьше число з масиву
let min_value_arr = (arr) => {
    let min_value = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (min_value > arr[i]) {
            min_value = arr[i];
        }
    }
    return min_value;
}

test_arr = [54, 158, -95, 75, -986, 11];
console.log(`Additional Task 4: Найменше число з масиву: ${min_value_arr(test_arr)}`);
console.log('-----------');


// 5. Дано натуральное число n. Выведите все числа от 1 до n.
let display_numbers = (n) => {
    for (let i = 1; i < n + 1; i++) {
        console.log(i);
    }
}
console.log('Additional Task 5: ');
display_numbers(8);
console.log('-----------');


// 6. Даны два целых числа A и В . Выведите все числа от A до B включительно,
// в порядке возрастания, если A < B,или в порядке убывания в противном случае.

let display = (a, b) => {
    if (a < b) {
        for (let i = a; i <= b; i++) {
            console.log(i);
        }
    } else if (a > b) {
        for (let i = a; i >= b; i--) {
            console.log(i);
        }
    } else {
        console.log(a);
    }
}
console.log('Additional Task 6: ');
display(5, 9);
console.log('-----------');


// 7.   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

let replace = (arr, n) => {
    if (n >= arr.length - 1) {
        return 'Wrong "n"';
    } else {
        let value = arr[n];
        arr[n] = arr[n + 1];
        arr[n + 1] = value;
        return arr;
    }
}

console.log(`Additional Task 7: ${replace([9, 8, 0, 4], 0)}`);
console.log('-----------');

// 8. Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
// Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
let moveValue = (arr) => {
    if (2 > arr.length || arr.length > 100) {
        return 'Wrong date';
    } else {

        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length - 1; j++) {
                if (arr[j] === 0) {
                    let t = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = t;
                }
            }
        }
        return arr;
    }
}

console.log('Additional Task 8: ');
console.log(moveValue([1, 0, 6, 0, 3]));
console.log(moveValue([0, 1, 2, 3, 4]));
console.log(moveValue([0, 0, 1, 0]));
console.log('-----------');

// 9. створити функцію, яка якщо приймає один аргумент, просто вивдоить його,
// якщо два аргументи - складає або конкатенує їх між собою.

let func_arg = (...arg) => {
    if (arg.length === 1) {
        return arg[0];
    } else {
        let result = arg[0];
        for (let i = 1; i < arg.length; i++) {
            result += arg[i];
        }
        return result;
    }
}
console.log('Additional Task 9: ');
console.log(func_arg(55));
console.log('-----------');

// 10. створити функцію  яка приймає два масиви та скаладає значення елементів
// з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
//     [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

let sum_value = (arr_1, arr_2) => {
    let new_arr = [];
    for (let i = 0; i < arr_1.length; i++) {
        new_arr[i] = arr_1[i] + arr_2[i];
    }
    return new_arr;
}
console.log('Additional Task 10: ');
console.log(sum_value([1, 2, 3, 4], [2, 3, 4, 5]));
console.log('-----------');

// 11. Створити функцію яка приймає масив будь яких объектів,
// та повертає масив ключів всіх обєктів
// EXAMPLE:
let users_list = [{name: 'Dima', age: 13}, {model: 'Camry'}] /*=== > [name, age, model]*/

let key_object = (array) => {
    let new_arr = [];
    for (const arrayElement of array) {
        for (const key in arrayElement) {
            new_arr[new_arr.length] = key;
        }
    }
    return new_arr;
}
console.log('Additional Task 11: ');
console.log(key_object(users_list));
console.log('-----------');

// 12. Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

let object_key = (array) => {
    let new_arr = [];
    for (const arrayElement of array) {
        for (const key in arrayElement) {
            new_arr[new_arr.length] = arrayElement[key];
        }
    }
    return new_arr;
}
console.log('Additional Task 12: ');
console.log(object_key(users_list));
console.log('-----------');