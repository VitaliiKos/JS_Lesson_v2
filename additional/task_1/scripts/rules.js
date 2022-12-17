// 1. написати рекурсивну функцію, яка збирає всі назви класів з файлу
//  в окремий масив. масив вивести в консоль

let task1 = document.querySelector('#task_title');

let additionalTask_1_title = document.createElement('h2');
additionalTask_1_title.innerText = 'Task 1: Виводиться в консоль';
additionalTask_1_title.style.background = 'yellowgreen';
task1.appendChild(additionalTask_1_title);

let class_arr = [];

let arr = document.body.children;

function searchTags(element) {
    for (const arrElement of element) {
        if (arrElement.classList.length) {
            for (const classListElement of arrElement.classList) {
                if (!class_arr.includes(classListElement)) {
                    class_arr.push(classListElement);
                }
            }
        }
        if (arrElement.children) {
            searchTags(arrElement.children);
        }
    }
}

searchTags(arr);

console.log(class_arr);
document.body.appendChild(document.createElement('hr'));
