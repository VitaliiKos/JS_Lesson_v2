let users = [
    {
        name: 'vasya',
        age: 31,
        status: false,
        address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
    }, {
        name: 'petya',
        age: 30,
        status: true,
        address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
    }, {
        name: 'kolya',
        age: 29,
        status: true,
        address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
    }, {
        name: 'olya',
        age: 28,
        status: false,
        address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
    }, {
        name: 'max',
        age: 30,
        status: true,
        address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
    }, {
        name: 'anya',
        age: 31,
        status: false,
        address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
    }, {
        name: 'oleg',
        age: 28,
        status: false,
        address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
    }, {
        name: 'andrey',
        age: 29,
        status: true,
        address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
    }, {
        name: 'masha',
        age: 30,
        status: true,
        address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
    }, {
        name: 'olya',
        age: 31,
        status: false,
        address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
    }, {
        name: 'max',
        age: 31,
        status: true,
        address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
    }];


// 1.1 З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
let new_arr = []
for (const user of users) {
    new_arr.push(user.address)
}
console.log(new_arr)

// 1.2 За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомогою document.createElement.
//     Всі данні в одному блоці.

let AdditionalTask_1_2_title = document.createElement('h2');
AdditionalTask_1_2_title.innerText = 'Task 1-2';
document.body.appendChild(AdditionalTask_1_2_title);

let block_users = document.createElement('div')
block_users.className = 'block_users';
document.body.appendChild(block_users);

for (const user of users) {
    let block_user = document.createElement('div');
    block_user.className = 'block_user';

    for (const userKey in user) {
        if (typeof user[userKey] === 'object') {
            let address = document.createElement('div');
            address.className = userKey;
            address.innerHTML = `<h3>${userKey}: </h3>`;
            block_user.appendChild(address);

            for (const item in user[userKey]) {
                let obj = document.createElement('h3');
                obj.innerText =`${item[0].toUpperCase()+item.slice(1)}: ${user[userKey][item]}`;
                address.appendChild(obj);
            }
        } else {
            let person = document.createElement('h3');
            person.className = userKey;
            person.innerText = `${userKey[0].toUpperCase()+userKey.slice(1)}: ${user[userKey]}`;
            block_user.appendChild(person);
        }
    }
    block_users.appendChild(block_user);
}
document.body.appendChild(block_users);
document.body.appendChild(document.createElement('hr'));


// 1.3 За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
//      розділивши всі властивості по своїм блокам (div>div*4)

let AdditionalTask_1_3_title = document.createElement('h2');
AdditionalTask_1_3_title.innerText = 'Task 1-3';
document.body.appendChild(AdditionalTask_1_3_title);

let block_users2 = document.createElement('div')
block_users2.className = 'block_users';
document.body.appendChild(block_users2);

for (const user of users) {
    let block_user = document.createElement('div');
    block_user.className = 'block_user';

    for (const userKey in user) {
        if (typeof user[userKey] === 'object') {
            let address = document.createElement('div');
            address.className = userKey;
            address.innerHTML = `<h3>${userKey}: </h3>`;
            block_user.appendChild(address);

            for (const item in user[userKey]) {
                let obj = document.createElement('h3');
                obj.innerText =`${item[0].toUpperCase()+item.slice(1)}: ${user[userKey][item]}`;
                address.appendChild(obj);
            }
        } else {
            let person_block = document.createElement('div')

            let person = document.createElement('h3');
            person.className = userKey;
            person.innerText = `${userKey[0].toUpperCase()+userKey.slice(1)}: ${user[userKey]}`;

            person_block.appendChild(person)
            block_user.appendChild(person_block);
        }
    }
    block_users2.appendChild(block_user);
}
document.body.appendChild(block_users2);
document.body.appendChild(document.createElement('hr'));

// 1.4 За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

let AdditionalTask_1_4_title = document.createElement('h2');
AdditionalTask_1_4_title.innerText = 'Task 1-4';
document.body.appendChild(AdditionalTask_1_4_title);

let block_users3 = document.createElement('div')
block_users3.className = 'block_users';
document.body.appendChild(block_users3);

for (const user of users) {
    let block_user = document.createElement('div');
    block_user.className = 'block_user';

    for (const userKey in user) {
        if (typeof user[userKey] === 'object') {
            let address = document.createElement('div');
            address.className = userKey;
            address.innerHTML = `<h3>${userKey}: </h3>`;
            block_user.appendChild(address);

            for (const item in user[userKey]) {
                let obj = document.createElement('div');
                obj.innerHTML =`<h3>${item[0].toUpperCase()+item.slice(1)}: ${user[userKey][item]}</h3>`;
                address.appendChild(obj);
            }
        } else {
            let person_block = document.createElement('div')

            let person = document.createElement('h3');
            person.className = userKey;
            person.innerText = `${userKey[0].toUpperCase()+userKey.slice(1)}: ${user[userKey]}`;

            person_block.appendChild(person)
            block_user.appendChild(person_block);
        }
    }
    block_users3.appendChild(block_user);
}
document.body.appendChild(block_users3);
document.body.appendChild(document.createElement('hr'));


// 2. є сторінка rules.html. Контентом сторінки є заголовки та параграфи.
// Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li),
//     який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

let link_task_2 = document.createElement("a");
link_task_2.innerText = 'Press to select Task 2';
link_task_2.className = 'link_task_2';
link_task_2.setAttribute('href', 'rules.html')

document.body.appendChild(link_task_2)
document.body.appendChild(document.createElement('hr'));


// 3. Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];