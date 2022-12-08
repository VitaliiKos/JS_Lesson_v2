// 4. ----------------
// - Є масив:
let arr = ['Main', 'Products', 'About us', 'Contacts']
// Взяти файл template1.html та додати в нього скріпт
// котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
// ------------------------------------------------------------------------------------------------------------
let get_ul = document.getElementsByTagName('ul')[0];

for (const item of arr) {
    let li_elem = document.createElement('li');
    li_elem.innerText = item;
    get_ul.appendChild(li_elem)
}