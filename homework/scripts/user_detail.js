let url = new URL(location.href);
let user_id = url.searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${user_id}`)
    .then((response) => response.json())
    .then(value => {

        let users_block = document.createElement('div');
        users_block.className = 'users_block';
        document.body.appendChild(users_block);

        function explorer(user, user_card) {
            for (const item in user) {
                if (typeof user[item] === 'object') {
                    let user_elem = document.createElement('div');
                    user_elem.classList.add('user_elem', 'user_elem_title');
                    user_elem.innerHTML = `<h3>${item[0].toUpperCase() + item.slice(1)}: </h3>`;
                    user_card.appendChild(user_elem);
                    explorer(user[item], user_elem);
                } else {
                    let user_elem = document.createElement('div');
                    user_elem.className = 'user_elem';
                    user_elem.innerHTML = `<h3>${item[0].toUpperCase() + item.slice(1)}: ${user[item]}</h3>`;
                    user_card.appendChild(user_elem);
                }
            }
        }

        let user_card = document.createElement('div');
        user_card.className = 'user_card';
        users_block.appendChild(user_card);

        explorer(value, user_card);
    });