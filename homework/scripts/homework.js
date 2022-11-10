// 1. За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

document.write(`<h3>Завдання 1. За допомогою циклу for і document.write() вивести 10 блоків div 
                                з довільним текстом всередині.</h3>`);
for (let i = 0; i < 10; i++) {
    document.write(`<div>Блок - ${i + 1}</div>`);
}
document.body.append(document.createElement('hr'));

// 2. За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
document.write(`<h3>Завдання 2. За допомогою циклу for і document.write() вивести 10 блоків div з довільним текстом і 
                                індексом всередині.</h3>`);
for (let i = 0; i < 10; i++) {
    document.write(`<div>Блок - ${i + 1}. Індекс - ${i}.</div>`);
}
document.body.append(document.createElement('hr'));

// 3. За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
document.write(`<h3>Завдання 3. За допомогою циклу while вивести в документ 20 блоків h1 
                                з довільним текстом всередині.</h3>`);
let count_one = 0;
while (count_one < 20) {
    document.write(`<div><h1>Блок  - ${count_one + 1}.</h1></div>`);
    ++count_one
}
document.body.append(document.createElement('hr'));


// 4. За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
document.write(`<h3>Завдання 4. За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і 
                              індексом всередині.</h3>`);

let count_second = 0;
while (count_second < 20) {
    document.write(`<div><h1>Блок  - ${count_second + 1}. Індекс - ${count_second}</h1></div>`);
    ++count_second
}
document.body.append(document.createElement('hr'));

// 5. Використовуючи данні з масиву, за допомоги document.write та циклу
//    побудувати структуру по шаблону
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//             і тд інші об'єкти масиву
//              ...
//     </ul>
document.write(`<h3>Завдання 5. Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру 
                                по шаблону</h3>`);

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write(`<ul>`);
for (let item of listOfItems) {
    document.write(`<li>${item}</li>`);
}
document.write(`</ul>`);
document.body.append(document.createElement('hr'));

//  6.   Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>

document.write(`<h3>Завдання 6. Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру 
                                  по шаблону  Зробити адекватну стилізацію.</h3>`)

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

document.write(`<div class="products">`)
for (const product of products) {
    document.write(`<div class="product_card">`);
        document.write(`<div class="product_info">`);
            document.write(`<h3 class="product-title">${product.title}.</h3>`);
            document.write(`<h3 class="product-title">Price - ${product.price} грн.</h3>`);
        document.write(`</div>`);

        document.write(`<div class="product_image">`);
            document.write(`<img src="${product.image}" alt="${product.title}">`);
        document.write(`</div>`);
    document.write(`</div>`);
}
document.write(`</div>`);

document.body.append(document.createElement('hr'));

// 7.за допомоги циклу вивести:
// - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років

document.write(`<h3>Завдання 7. За допомоги циклу вивести:</h3>
                                <h3>- користувачів зі статусом true;</h3>
                                <h3>- користувачів зі статусом false;</h3>
                                <h3>- користувачів які старші за 30 років;</h3>
                `)

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

let divPerson = document.createElement('div');
divPerson.className = 'person';

let divStatusTrue = document.createElement('div');
divStatusTrue.className = 'statusTrue';
let divStatusTrueText = document.createElement("h3");
divStatusTrueText.innerText = 'Persons with status "True"';
divStatusTrue.appendChild(divStatusTrueText);

let divStatusFalse = document.createElement('div');
divStatusFalse.className = 'statusFalse';
let divStatusFalseText = document.createElement("h3");
divStatusFalseText.innerText = 'Persons with status "False"';
divStatusFalse.appendChild(divStatusFalseText);

let divAge = document.createElement('div');
divAge.className = 'age';
let divAgeText = document.createElement("h3");
divAgeText.innerText = 'Persons older than 30';
divAge.appendChild(divAgeText);


for (const user of users) {
    if (user.status) {
        let status_true_h4 = document.createElement('h4');
        status_true_h4.innerText = `${user.name} - ${user.age} - ${user.status}`;
        divStatusTrue.appendChild(status_true_h4);
    } else if (!user.status) {
        let status_false_h4 = document.createElement('h4');
        status_false_h4.innerText = `${user.name} - ${user.age} - ${user.status}`;
        divStatusFalse.appendChild(status_false_h4);
    }
    if (user.age > 30) {
        let age_h4 = document.createElement('h4');
        age_h4.innerText = `${user.name} - ${user.age} - ${user.status}`;
        divAge.appendChild(age_h4);
    }
}
divPerson.append(divStatusTrue, divStatusFalse, divAge);
document.body.appendChild(divPerson);