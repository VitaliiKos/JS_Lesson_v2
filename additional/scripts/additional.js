// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста
let task_1 = document.querySelector('.task1')

let wrap = document.createElement('div');
wrap.className = 'wrap';

let users_block = document.createElement('div');
users_block.classList.add('users_list');

let user_post_list = document.createElement('div');
user_post_list.className = 'user_post_list';

let post_comments_list = document.createElement('div');
post_comments_list.className = 'post_comments_list';

wrap.append(users_block, user_post_list, post_comments_list);

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(users => {

        for (const user of users) {
            let user_div = document.createElement('div');
            user_div.innerHTML = `<h3>${user.id} ${user.name}</h3>`;
            user_div.className = 'user_item';

            let post_button = document.createElement('button');
            post_button.type = 'submit';
            post_button.innerText = 'All posts';

            post_button.onclick = (event) => {
                event.preventDefault();
                while (post_comments_list.firstChild) {
                    post_comments_list.removeChild(post_comments_list.firstChild);
                }

                fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                    .then((response) => response.json())
                    .then(posts => {
                        while (user_post_list.firstChild) {
                            user_post_list.removeChild(user_post_list.firstChild);
                        }
                        for (const post of posts) {
                            let posts_list = document.createElement('div');
                            posts_list.className = 'posts_list';
                            for (const postKey in post) {
                                let post_title = document.createElement('h3');
                                post_title.innerHTML = `<em>${postKey[0].toUpperCase() + postKey.slice(1)}:</em> ${post[postKey]}`;

                                posts_list.append(post_title);
                            }
                            let comment_button = document.createElement('button');
                            comment_button.innerText = 'All comments';

                            comment_button.onclick = (event) => {
                                event.preventDefault();
                                fetch(`https://jsonplaceholder.typicode.com/posts/${post['id']}/comments`)
                                    .then((response) => response.json())
                                    .then(comments => {
                                        while (post_comments_list.firstChild) {
                                            post_comments_list.removeChild(post_comments_list.firstChild);
                                        }

                                        for (const comment of comments) {
                                            let comments_list = document.createElement('div');
                                            comments_list.className = 'comments_list';
                                            for (const commentKey in comment) {
                                                let comment_title = document.createElement('h3');
                                                comment_title.innerHTML = `<em>${commentKey[0].toUpperCase() + commentKey.slice(1)}:</em> ${comment[commentKey]}`;

                                                comments_list.append(comment_title);
                                            }
                                            post_comments_list.appendChild(comments_list);
                                        }
                                    })
                            }
                            posts_list.appendChild(comment_button);
                            user_post_list.appendChild(posts_list);
                        }
                    })
            }
            user_div.appendChild(post_button);
            users_block.append(user_div);
        }
        task_1.appendChild(wrap);
    });


// 2 Імітуємо наповнення інтернет магазину товарами :
//     - Створити форму з наступними полями :
//     - назва товару
//     - кількість товару
//     - ціна товару
//     - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар
let productsForm = document.forms.productForm;

productsForm.onsubmit = (event) => {
    event.preventDefault();

    if (!localStorage.getItem('products')) {
        let product = [{
            'name': this.productName.value,
            'quantity': this.productQuantity.value,
            'price': this.productPrice.value,
            'image': this.productImage.value,

        }]
        localStorage.setItem('products', JSON.stringify(product));
    } else {
        let parse_catalog = JSON.parse(localStorage.getItem('products'));
        parse_catalog.push(
            {
                'name': this.productName.value,
                'quantity': this.productQuantity.value,
                'price': this.productPrice.value,
                'image': this.productImage.value,
            }
        )
        localStorage.setItem('products', JSON.stringify(parse_catalog));
    }
}
let cart_btn = document.querySelector('.productList');

let cart_link = document.createElement('a');
cart_link.href = 'list.html';
cart_link.innerHTML = 'Перейти до списку товарів';
cart_btn.appendChild(cart_link)
