// 1. Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

let bad_words_arr = ['bad_words_1', 'bad_words_2', 'bad_words_3', 'bad_words_4', 'bad_words_5', 'bad_words_6', 'bad_words_7'];

function formSubmit(event) {
    event.preventDefault();
    if (bad_words_arr.includes(form.word_input.value.toLowerCase())) {
        alert('Ви ввели заборонене слово! ');
    } else {
        result1.innerHTML = `Ваше слово:  ${form.word_input.value}`;
    }
}

const result1 = document.getElementById('result1');
const form = document.getElementById('form');
form.addEventListener('submit', formSubmit);


// 2. Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

function formSubmit_2(event) {
    event.preventDefault();
    let input_context = form_2.word_input_2.value;
    let sentence = input_context.replaceAll(',', ' ').replaceAll(':', ' ').split(' ');

    let i = 0;
    let status = true;
    while (i < sentence.length && status) {
        console.log(sentence[i]);
        if (bad_words_arr.includes(sentence[i].toLowerCase())) {
            status = !status;
            alert('Ви ввели заборонене слово! ');
        }
        i++
    }
    if (status) {
        result2.innerHTML = `Ваше слово:  ${input_context}`;
    }
}

const form_2 = document.getElementById('form_2');
const result2 = document.getElementById('result2');
form_2.addEventListener('submit', formSubmit_2);


// 3. Создайте меню, которое раскрывается/сворачивается при клике

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})


// 4. Создать список комментариев, пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

let comments = [
    {title: 'Львів', body: 'Рік заснування: 1256'},
    {title: 'Дніпро', body: 'Рік заснування: 1635'},
    {title: 'Харків', body: 'Рік заснування: 1654'},
    {title: 'Одеса', body: 'Рік заснування: 1415'},
    {title: 'Київ', body: 'Рік заснування: 482'},
    {title: 'Донецьк', body: 'Рік заснування: 1869'},
    {title: 'Суми', body: 'Рік заснування: 1652'},
    {title: 'Запоріжжя', body: 'Рік заснування: 1770'}
]

let les4 = document.querySelector('.les4');

let comments_arr = document.createElement('div');
comments_arr.className = 'comments_arr';
les4.appendChild(comments_arr);

for (const comment of comments) {
    let block_comment = document.createElement('div');
    block_comment.className = 'block_comment';
    comments_arr.appendChild(block_comment);

    let button_block = document.createElement('div');
    button_block.className = 'button_block';

    let comment_btn = document.createElement('div');
    comment_btn.classList.add('menu-btn');
    comment_btn.classList.add('comment_btn');
    comment_btn.classList.add('active');
    comment_btn.append(document.createElement('span'))
    comment_btn.append(document.createElement('span'))
    comment_btn.append(document.createElement('span'))

    let comment_content = document.createElement('div');
    comment_content.className = 'comment_content';

    let comment_title = document.createElement('h3');
    comment_title.innerText = comment.title;

    let comment_body_block = document.createElement('div');
    comment_body_block.className = 'comment_body_block'
    let comment_body = document.createElement('p');
    comment_body.innerText = comment.body;
    comment_body_block.append(comment_body);

    button_block.append(comment_btn);
    comment_content.append(comment_title, comment_body_block);
    block_comment.append(comment_content, button_block);

    comment_btn.addEventListener('click', function () {
        comment_body_block.classList.toggle('active');
        comment_btn.classList.toggle('active');
    })
}
les4.appendChild(document.createElement('hr'));

// 5. Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let les5 = document.querySelector('.les5');

let testBtn = document.createElement("button");
testBtn.innerText = 'TestBtn';
testBtn.style.background = 'yellowgreen';
les5.appendChild(testBtn);

let reset_Btn = document.createElement("button");
reset_Btn.id = 'reset_Btn';
reset_Btn.innerText = 'reset_Btn';
reset_Btn.style.margin = '10px';
reset_Btn.style.background = 'cornflowerblue';

les5.appendChild(reset_Btn);

testBtn.onmousedown = function () {
    this.hidden = true;
};
let resetBtn = document.getElementById('reset_Btn');

resetBtn.onclick = function () {
    testBtn.hidden =false;

}

les5.appendChild(document.createElement('hr'));

// 6. Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
let les6 = document.querySelector('.les6');
let result_info = document.createElement('div');
result_info.className = 'result_info';
les6.appendChild(result_info);

function showConsole(event) {
    while (result_info.firstChild) {
        result_info.removeChild(result_info.firstChild);
}


    let result_info_tagName = document.createElement('h3');
    result_info_tagName.innerText = `Tag name: ${event.target.localName}`;

    let result_info_tagSize = document.createElement('h3');
    result_info_tagSize.innerText = `Tag size: ${event.target.offsetHeight} * ${event.target.offsetWidth}`;

    let result_info_tagClassName = document.createElement('h3');
    result_info_tagClassName.innerText = event.target.classList.length ? `Tag ClassName: ${event.target.classList}` : `Tag ClassName: none`;

    let result_info_tagId = document.createElement('h3');
    result_info_tagId.innerText = event.target.id ? `Tag ID: ${event.target.id}` : 'Tag ID: none';

    result_info.append(result_info_tagName, result_info_tagSize, result_info_tagClassName, result_info_tagId);
}

// document.onclick = showConsole;

// 7. Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

let les7 = document.querySelector('.les7');

let popup_block = document.createElement("div");
popup_block.classList.add('popup');

let popupSpan = document.createElement("span");
popupSpan.id = 'myPopup';
popupSpan.classList.add('popupText');
popup_block.append(popupSpan);
les7.append(popup_block);

function showPopup(event) {
    let popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    popup_block.style.top = `${Math.round(event.pageY / 3)}px`;
    popup.innerText = `Additional task 7
    Назва тегу: ${event.target.localName}
     Розмір блоку: ${event.target.offsetHeight} * ${event.target.offsetWidth}
     Cписок класів: ${event.target.classList} 
     Cписок ID: ${event.target.id}`
}

// document.onclick = showPopup

// 8. взять массив пользователей
let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];

// 8-1. Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе,
// так и по отдельности.
// 1-й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2-й - оставляет старше 29 лет включительно
// 3-й - оставляет тех у кого город киев
// Данные выводить в документ
let les8 = document.querySelector('.les8');

let chooseOption = document.forms.checkForm;
let filtered_users = document.createElement("div");
filtered_users.id = 'filtered_users';
les8.append(filtered_users);

chooseOption.onsubmit = function (event) {
    while (filtered_users.firstChild) {
        filtered_users.removeChild(filtered_users.firstChild);
    }
    event.preventDefault();
    let chooseAge = this.age.checked;
    let chooseStatus = this.status.checked;
    let chooseCity = this.city.checked;

    let result = usersWithAddress.filter(value =>
        (chooseAge ? value.age > 29: true)
        && (chooseStatus ? value.status === false: true)
        && (chooseCity ? value.address.city === 'Kyiv' : true));
    result.forEach(user =>{
        let filterResult = document.createElement("em");
        filterResult.className = 'filterResult';
        filterResult.innerText = `id: ${user.id}, name: ${user.name}, age: ${user.age}, status: ${user.status}, city: ${user.address.city}, street: ${user.address.street}, number: ${user.address.number}`;
        filtered_users.appendChild(filterResult);
    })
}

// 9. *****(Прям овердоз с рекурсией) Создать функцию, которая принимает какой-либо элемент DOM-структуры.
// Функция создает в боди 2 кнопки (назад/вперед) при нажатии вперед, вы переходите к дочернему элементу,
// при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента
// и выводит первого ребенка. И тд. Когда все дети заканчиваются, мы выходим из данного дочернего элемента и
// переходим к следующему, лежащему с ним на одном уровне

// 9.     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан

let les9 = document.getElementById('les9')
let button_select = document.createElement('button');
button_select.type = 'submit';
button_select.innerText = 'Change text';

les9.appendChild(button_select);

button_select.onclick = function() {
    let range;
    let sel = window.getSelection();
    if (sel.rangeCount && sel.getRangeAt) {
        range = sel.getRangeAt(0);
    }
    document.designMode = "on";
    if (range) {
        sel.removeAllRanges();
        sel.addRange(range);
    }
    document.execCommand("bold", true, );
    document.execCommand("italic", false, );
    document.execCommand("color", false, 'red');
    document.execCommand("backColor", false, 'yellow');
    document.designMode = "off";
}


// 10. Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

const slides = document.querySelectorAll(".item");
const button = document.querySelectorAll(".button-container>.button");

let current = 0;
let prev = slides.length-1;
let next = 1;

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", () => i === 0 ? gotoPrev() : gotoNext());
}

const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);
const gotoNext = () => current < slides.length-1 ? gotoNum(current + 1) : gotoNum(0);

const gotoNum = number => {
    current = number;
    prev = current - 1;
    next = current + 1;

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        slides[i].classList.remove("prev");
        slides[i].classList.remove("next");
    }

    if (next === slides.length) {
        next = 0;
    }

    if (prev === -1) {
        prev = slides.length-1;
    }

    slides[current].classList.add("active");
    slides[prev].classList.add("prev");
    slides[next].classList.add("next");
}

