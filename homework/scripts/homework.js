// 1. зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(users => {
        let users_block = document.createElement('div');
        users_block.classList.add('users_list');
        let users_list = document.createElement('ul');

        for (const user of users) {
            let user_div = document.createElement('div');
            let user_link = document.createElement('a');
            user_link.href = `user_detail.html?id=${user.id}`;

            user_link.innerText = `${user.id} ${user.name}`;
            user_div.append(user_link);
            users_list.append(user_div);
        }
        users_block.append(users_list);
        document.body.append(users_block);
    });