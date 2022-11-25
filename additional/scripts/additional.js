// 1.  Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів

// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//             lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//         name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
//         }
// }

console.log('Additional 1:')

function Geo(lat, lng) {
    this.lat = lat;
    this.lng = lng;
}

function Address(street, suit, city, zipcode, geo) {
    this.street = street;
    this.suit = suit;
    this.city = city;
    this.zipcode = zipcode;
    this.geo = geo;
}

function Company(name, catchPhrase, bs) {
    this.name = name;
    this.catchPhrase = catchPhrase;
    this.bs = bs;
}

function Person(id, name, username, email, address, phone, website, company) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.phone = phone;
    this.website = website;
    this.address = address;
    this.company = company;
}

const geolocation = new Geo('-37.3159', '81.1496');
const address = new Address('Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874', geolocation);
const company = new Company('Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets');
const person = new Person(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', address, '1-770-736-8031 x56442', 'hildegard.org', company);

console.log(person)
console.log('**********')
// **************************************************

// 2.  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     - назва тегу ()
//     - опис його дій
//     - масив з атрибутами (2-3 атрибути максимум)
//     Кожен атрибут описати як окремий який буде містити
//         -назву атрибуту
//         -опис дії атрибуту
//     інформацію брати з htmlbook.ru

// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//     action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
// }

console.log('Additional 2:')

function Attrs(titleOfAttr, actionOfAttr) {
    this.titleOfAttr = titleOfAttr;
    this.actionOfAttr = actionOfAttr;
}

function Tag(titleOfTag, action, attrs) {
    this.titleOfTag = titleOfTag;
    this.action = action;
    this.attributes = [attrs];
}

const attribute_href = new Attrs('href', 'Links allow users to click their way from page to page.');
const attribute_title = new Attrs('title', 'Specifies extra information about an element.');
const attribute_style = new Attrs('style', 'Specifies an inline CSS style for an element.');
const attribute_id = new Attrs('id', 'Defines a unique identifier (ID) which must be unique in the whole document.');
const attribute_value = new Attrs('value', 'The initial value of the control.');
const attribute_rel = new Attrs('rel', 'Creates a hyperlink or annotation depending on the value.');
const attribute_label = new Attrs('label', 'Specifies a shorter label for an option.');
const attribute_multiple = new Attrs('multiple', 'Specifies that multiple options can be selected at once.');


const tag_a = new Tag('a', 'The HTML <a> tag defines a hyperlink.', attribute_href);
tag_a.attributes.push(attribute_style)
console.log(tag_a);

const tag_div = new Tag('div', 'The <div> tag defines a division or a section in an HTML document.', attribute_title);
tag_div.attributes.push(attribute_id)
tag_div.attributes.push(attribute_style)
console.log(tag_div);

const tag_h1 = new Tag('h1', 'The <h1> to <h6> HTML elements represent six levels of section headings.', attribute_style);
console.log(tag_h1);

const tag_span = new Tag('span', 'The <span> tag is an inline container used to mark up a part of a text, ' +
    'or a part of a document.', attribute_id);
tag_span.attributes.push(attribute_style)
tag_span.attributes.push(attribute_id)
console.log(tag_span);

const tag_input = new Tag('input', 'The <input> tag specifies an input field where the user can enter data.',
    attribute_value);
console.log(tag_input);

const tag_form = new Tag('form', 'An HTML form is used to collect user input.', attribute_rel);
console.log(tag_form);

const tag_option = new Tag('option', 'The <option> tag defines an option in a select list.', attribute_label);
console.log(tag_option);

const tag_select = new Tag('select', 'The <select> element is used to create a drop-down list.', attribute_multiple);
console.log(tag_select);
console.log('**********')
