// - є масив
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
// 1. Проітерувати його, створивши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

let block_simpsons = document.createElement('div');
block_simpsons.className = 'block_simpsons';

let block_simpson_title = document.createElement('h2');
block_simpson_title.innerText = 'Task 1';

block_simpsons.appendChild(block_simpson_title);
document.body.appendChild(block_simpsons);

for (const character in simpsons) {
    let member = document.createElement('div');
    member.className = 'member';

    let member_name = document.createElement('h3');
    member_name.innerText = `Name: ${simpsons[character]['name']}`;

    let member_surname = document.createElement('h3');
    member_surname.innerText = `Surname: ${simpsons[character]['surname']}`;

    let member_age = document.createElement('h3');
    member_age.innerText = `Age: ${simpsons[character]['age']}`;

    let member_info = document.createElement('p');
    member_info.innerText = simpsons[character]['info'];

    let member_photo = document.createElement('img');
    member_photo.setAttribute('src', simpsons[character]['photo']);
    member_photo.setAttribute('alt', simpsons[character]['name']);

    member.append(member_name, member_surname, member_age, member_photo, member_info);
    block_simpsons.appendChild(member);
}
document.body.appendChild(document.createElement('hr'));
// ------------------------------------------------------------------------------------------------------------

// Цикл в циклі
// - Є масив
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

// 2. Створити для кожного елементу масиву свій блок,
// блок розділити блоками, в яких будуть зберігатись значення окремих властивостей,
// для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png

let courses_block = document.createElement('div');
courses_block.className = 'modulesBlock';

let courses_block_title = document.createElement('h2')
courses_block_title.innerText = 'Task 2';

courses_block.appendChild(courses_block_title);
document.body.appendChild(courses_block);


for (const course in coursesArray) {

    let block_item = document.createElement('div');
    block_item.className = 'blockItem';

    for (const item in coursesArray[course]) {
        if (Array.isArray(coursesArray[course][item])) {

            let block_list = document.createElement('div');
            block_list.className = item;

            let modules_ul = document.createElement('ul');

            for (const arr_item of coursesArray[course][item]) {
                let li = document.createElement('li');
                li.innerText = arr_item;
                modules_ul.appendChild(li);
            }
            block_list.appendChild(modules_ul);
            block_item.appendChild(block_list);

        } else {
            let item_field = document.createElement('div');
            item_field.innerText = `${item[0].toUpperCase() + item.slice(1)} : ${coursesArray[course][item]}`;
            item_field.className = item;

            block_item.appendChild(item_field);

        }
    }
    courses_block.appendChild(block_item);
}
document.body.appendChild(document.createElement('hr'));

// ------------------------------------------------------------------------------------------------------------


// 3. ----------------
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
let task_3 = document.createElement("div");
task_3.innerText = 'Task 3';
task_3.classList.add('wrap');
task_3.classList.add('collapse');
task_3.classList.add('alpha');
task_3.classList.add('beta');
task_3.style.background = 'red';

document.body.appendChild(task_3);

let element_clone = task_3.cloneNode(true);
element_clone.innerText = 'Task 3 clone';

document.body.appendChild(element_clone);
document.body.appendChild(document.createElement('hr'));

// ------------------------------------------------------------------------------------------------------------


// 4. ----------------
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт
// котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
let link_task_4 = document.createElement("a");
link_task_4.innerText = 'Push to select Task 4';
link_task_4.className = 'link_task_4';
link_task_4.setAttribute('href', 'template1.html')

document.body.appendChild(link_task_4)
document.body.appendChild(document.createElement('hr'));

// ------------------------------------------------------------------------------------------------------------


// - Є масив
let coursesAndDurationArray1 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// 5. Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let task_5_title = document.createElement('h2');
task_5_title.innerText = 'Task 5';
document.body.appendChild(task_5_title);

let coursesAndDurationArray1_block = document.createElement('div');
coursesAndDurationArray1_block.className = 'courses_block';

for (const item in coursesAndDurationArray1) {
    let subject_block = document.createElement("div");
    subject_block.className = 'subject_block';
    for (const item_field in coursesAndDurationArray1[item]) {

        let title = document.createElement('h3');
        title.innerText = `${item_field[0].toUpperCase() + item_field.slice(1)}: ${coursesAndDurationArray1[item][item_field]}`;

        subject_block.appendChild(title);
        coursesAndDurationArray1_block.appendChild(subject_block);
    }
}
document.body.appendChild(coursesAndDurationArray1_block);
document.body.appendChild(document.createElement('hr'));
// ------------------------------------------------------------------------------------------------------------


// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];


// 6. За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

let task_6_title = document.createElement('h2');
task_6_title.innerText = 'Task 6';
document.body.appendChild(task_6_title);

let coursesArray_block = document.createElement('div');
coursesArray_block.className = 'courses_block';

for (const item in coursesAndDurationArray) {
    let subject_block = document.createElement("div");
    subject_block.className = 'item';

    let item_title = document.createElement('h1');
    item_title.className = 'heading';
    item_title.innerText = coursesAndDurationArray[item].title;

    let item_description = document.createElement('p');
    item_description.className = 'description';
    item_description.innerText = coursesAndDurationArray[item].monthDuration;

    subject_block.append(item_title, item_description);
    coursesArray_block.appendChild(subject_block);
}
document.body.appendChild(coursesArray_block);
document.body.appendChild(document.createElement('hr'));

// ------------------------------------------------------------------------------------------------------------

// 7. - Створити довільний елемент з id = text.
// Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку
// зникав елемент з id="text".

let task_7_title = document.createElement('h2');
task_7_title.innerText = 'Task 7';
document.body.appendChild(task_7_title);

let text_id = document.createElement('div');
text_id.id = 'text';
text_id.innerHTML = `<h3>JavaScript</h3>`

let button = document.createElement('button');
button.classList.add('button-33')
button.innerText = 'Click me';

button.onclick = function () {
    text_id.classList.toggle('text_hidden')
}

document.body.appendChild(text_id);
document.body.appendChild(button);
document.body.appendChild(document.createElement('hr'));

// 8. - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача

let task_8_title = document.createElement('h2');
task_8_title.innerText = 'Task 8';
document.body.appendChild(task_8_title);


let formUser = document.createElement("form");
formUser.id = 'formUser';
document.body.appendChild(formUser);

let inputAge = document.createElement("input");
inputAge.type = 'number';
inputAge.name = 'age';
inputAge.value = '18';

let result = document.createElement("h3");

let btnInput = document.createElement("button");
btnInput.classList.add('btnInput');
btnInput.innerText = 'Check';

formUser.append(inputAge, btnInput, result);

let checkAge = document.forms.formUser;
checkAge.onsubmit = function (e) {
    e.preventDefault();
    if (+this.age.value < 18) {
        result.innerText = 'Вам менше 18 років.';
    } else {
        result.innerText = 'Вам виповнилось 18 років';
    }
}
document.body.appendChild(document.createElement('hr'));

// 9. *** Створити 3 инпута та кнопку. Один визначає кількість рядків,
// другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка,
// з відповідним вмістом.
// (Додаткова частина для завдання)

let task_9_title = document.createElement('h2');
task_9_title.innerText = 'Task 9';
document.body.appendChild(task_9_title);

let form_matrix = document.createElement("form");
form_matrix.id = 'form_matrix';

let inputRow = document.createElement("input");
inputRow.type = 'number';
inputRow.id = 'row';
inputRow.value = '5';

let inputColumn = document.createElement("input");
inputColumn.type = 'number';
inputColumn.id = 'column';
inputColumn.value = '6';

let inputContent = document.createElement("input");
inputContent.type = 'text';
inputContent.id = 'content';
inputContent.value = 'content';

let btnSubmit = document.createElement("button");
btnSubmit.innerText = 'Submit';

document.body.appendChild(form_matrix);
form_matrix.append(inputRow, inputColumn, inputContent, btnSubmit);

let form_result = document.createElement('div');
form_result.classList.add('form_result');
document.body.appendChild(form_result);

btnSubmit.onclick = function (e) {
    e.preventDefault();
    let row = +document.forms.form_matrix.row.value;
    let column = +document.forms.form_matrix.column.value;
    let content = document.forms.form_matrix.content.value;

    for (let i = 0; i < row; i++) {
        let row_block = document.createElement('div');
        row_block.className = 'row_block';

        for (let j = 0; j < column; j++) {
            let elem_width = 100 / column;

            let elem = document.createElement("div");
            elem.className = 'elem';
            elem.innerText = `${i+1}-${j+1}: ${content}`;
            elem.style.width = `${elem_width}%`;
            row_block.appendChild(elem);

        }
        form_result.appendChild(row_block);
    }
}
