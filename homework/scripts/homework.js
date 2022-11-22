// 1. Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let string_length = (text) => {
    console.log(`${text} - ${text.length}`);
}
console.log('Task_1:');
string_length('hello world');
string_length('lorem ipsum');
string_length('javascript is cool');
console.log('----------');

// 2. Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let string_toUpperCase = (text) => {
    console.log(`${text} - ${text.toUpperCase()}`);
}
console.log('Task_2:');
string_toUpperCase('hello world');
string_toUpperCase('lorem ipsum');
string_toUpperCase('javascript is cool');
console.log('----------');

// 3. Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let string_toLowerCase = (text) => {
    console.log(`${text} - ${text.toLowerCase()}`);
}
console.log('Task_3:');
string_toLowerCase('HELLO WORLD');
string_toLowerCase('LOREM IPSUM');
string_toLowerCase('JAVASCRIPT IS COOL');
console.log('----------');

// 4. Є "брудна" стрінга let str = ' dirty string   ' .
// Почистити її від зайвих пробілів.

let str = ' dirty string   ';
let string_trim = (text) => {
    console.log(`${text}-${text.trim()}`);
}
console.log('Task_4:');
string_trim(str);
console.log('----------');

// 5. Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

str = 'Ревуть воли як ясла повні';
let stringToarray = (text) => {
    return text.split(' ');
}
console.log('Task_5:');
let arr = stringToarray(str);
console.log(arr);
console.log('----------');

// 6. Є масив чисел [10,8,-7,55,987,-1011,0,1050,0] .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let number_arr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];

console.log('Task_6:');
console.log(number_arr.map(String));
console.log('----------');

// 7. Створити функцію sortNums(direction), яка прймає масив чисел,
// та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.

// let my_array = [25, 8, 7, 41]
let nums = [11, 21, 3];

let sortNums = (arr, mode) => {
    arr.sort(function (a, b) {
        if (mode === 'ascending') {
            return a - b;
        } else if (mode === 'descending') {
            return b - a;
        }
    })
    return arr
}

console.log('Task_7:');
console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));
console.log('----------');


// 8. є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// 8-1. відсортувати його за спаданням за monthDuration
let sort_duration = (array) => array.sort((x, y) => y.monthDuration - x.monthDuration)

console.log('Task_8:');
console.log(sort_duration(coursesAndDurationArray));

// 8-2. відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log(sort_duration(coursesAndDurationArray).filter(value => value.monthDuration > 5));
console.log('----------');

// 9. описати колоду карт// {
// //     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
// //     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
// //     color:'', // 'red','black'}


let suits = [
    {cardSuit: 'Hearts', color: 'red'},
    {cardSuit: 'Diamond', color: 'red'},
    {cardSuit: 'Clubs', color: 'black'},
    {cardSuit: 'Spades', color: 'black'}
];
let card_name = ['6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
let deck_of_cards = [];

for (const suit of suits) {

    for (const item of card_name) {
        let card = {
            cardSuit: suit.cardSuit,
            value: item,
            color: suit.color
        };
        deck_of_cards.push(card);
    }
}
console.log('Task_9:');
console.log(deck_of_cards);
console.log('----------');

// 9-1. знайти піковий туз
let ace_spades = (deck, suit, numbers) => {
    return deck.filter(card => card.cardSuit === suit && card.value === numbers);
}

console.log('Task_9-1. Знайти піковий туз');
console.log(ace_spades(deck_of_cards, 'Spades', 'Ace'));
console.log('----------');

// 9-2. всі шістки
let all_six = (deck, numbers) => {
    return deck.filter(card => card.value === numbers);
}

console.log('Task_9-2. Всі шістки');
console.log(all_six(deck_of_cards, '6'));
console.log('----------');


// 9-3. всі червоні карти
let all_red_cards = (deck, color) => {
    return deck.filter(value => value.color === color);
}

console.log('Task_9-3. Всі червоні карти');
console.log(all_red_cards(deck_of_cards, 'red'));
console.log('----------');

// 9-4. всі буби
let all_diamond = (deck, suit) => {
    return deck.filter(value => value.cardSuit.toLowerCase() === suit.toLowerCase());
}

console.log('Task_9-4. Всі буби');
console.log(all_diamond(deck_of_cards, 'Diamond'));
console.log('----------');

// 9-5. всі трефи від 9 та більше
let all_clubs = (deck, suit, mode) => {
    let start_index = deck.indexOf(
        deck.find(el => el.value.toLowerCase() === mode.toLowerCase() &&
            el.cardSuit.toLowerCase() === suit.toLowerCase()));
    return deck.filter(
        value => value.cardSuit.toLowerCase() === suit.toLowerCase() &&
            deck.indexOf(value) >= start_index
    );
}
console.log('Task_9-5. Всі трефи від 9 та більше');
console.log(all_clubs(deck_of_cards, 'Clubs', '9'));
console.log('----------');


//  Додатково по reduce
// 10. Взяти описану колоду карт,
// та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let deck_reduce = (arr_card, property) => {
    return arr_card.reduce(function (accumulator, currentCard) {
        let key = currentCard[property];
        if (!accumulator[key]) {
            accumulator[key] = [];
        }
        accumulator[key].push(currentCard);
        return accumulator;
    }, {});
}
console.log('Task_10 ');
console.log(deck_reduce(deck_of_cards, 'cardSuit'));
console.log('----------');