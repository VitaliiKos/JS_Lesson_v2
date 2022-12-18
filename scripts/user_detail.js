let current_user_id = JSON.parse(localStorage.getItem('current_user_id'));
let current_user = JSON.parse(localStorage.getItem('current_user'));

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

explorer(current_user, user_card);

let div_post_button = document.createElement('div');
div_post_button.className = 'posts';

let post_button = document.createElement('button');
post_button.innerText = 'post of current user';
post_button.className = 'button-33';

let post_list_block = document.createElement('div');
post_list_block.className = 'post_list_block';

div_post_button.append(post_button, post_list_block);

post_button.onclick = (event) => {
    event.preventDefault();
    if (!post_list_block.children.length) {
        post_button.innerText = 'Hide posts';

        fetch(`https://jsonplaceholder.typicode.com/users/${current_user_id}/posts`)
            .then((response) => response.json())
            .then(posts_arr => {
                localStorage.setItem('user_posts', JSON.stringify(posts_arr));

                let posts = JSON.parse(localStorage.getItem('user_posts'));

                for (const post of posts) {
                    let posts_list = document.createElement('div');
                    posts_list.className = 'posts_list';

                    let post_title_content = document.createElement('div');
                    post_title_content.className = 'post_title_content';

                    let post_title = document.createElement('h3');
                    post_title.innerHTML = `<em>${post.title[0].toUpperCase() + post.title.slice(1)}</em>`;

                    post_title_content.append(post_title);
                    post_list_block.appendChild(posts_list);

                    let post_button_block = document.createElement('div');
                    post_button_block.className = 'post_button_block';

                    let post_detail_link = document.createElement('a');
                    post_detail_link.href = `post_detail.html?post_id=${post.id}`;

                    let post_button = document.createElement('button');
                    post_button.innerText = 'Detail';
                    post_button.className = 'button-7';
                    post_button.onclick = () => {
                        localStorage.setItem('current_user_post', JSON.stringify(post));
                    }

                    post_detail_link.appendChild(post_button);
                    post_button_block.appendChild(post_detail_link);
                    posts_list.append(post_title_content, post_button_block);
                }
            })
    } else {
        post_button.innerText = 'post of current user';

        while (post_list_block.firstChild) {
            post_list_block.removeChild(post_list_block.firstChild);
        }
    }
}
user_card.appendChild(div_post_button);
