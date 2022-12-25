let button_back = document.querySelector('.button_back>.button-78');
button_back.onclick = ()=>{
    location.href = 'user_detail.html';
}

let current_user_post = JSON.parse(localStorage.getItem('current_user_post'));

let post_block = document.createElement('div');
post_block.className = 'post_block';

document.body.appendChild(post_block);

let post_card = document.createElement('div');
post_card.className = 'post_card';

for (const postKey in current_user_post) {
    let post_description = document.createElement('div');
    post_description.className = 'post_description';

    let post_title = document.createElement('div');
    post_title.className = 'post_title';
    post_title.innerHTML = `<h3>${postKey[0].toUpperCase() + postKey.slice(1)}</h3>`;

    let post_title_description = document.createElement('div');
    post_title_description.className = 'post_title_description';
    post_title_description.innerHTML = `<h3>${current_user_post[postKey]}</h3>`;

    post_description.append(post_title, post_title_description);
    post_card.append(post_description);
}
post_block.appendChild(post_card);

fetch(`https://jsonplaceholder.typicode.com/posts/${current_user_post['id']}/comments`)
    .then((response) => response.json())
    .then(comments => {

        let comments_block = document.createElement('div');
        comments_block.className = 'comments_block';
        comments_block.innerHTML = `<h2>Comments</h2>`;

        for (const comment of comments) {

            let comments_list = document.createElement('div');
            comments_list.className = 'comments_list';

            for (const commentKey in comment) {
                let comment_card = document.createElement('div');
                comment_card.className = 'comment_card';

                let comment_title = document.createElement('div');
                comment_title.className = 'comment_title';
                comment_title.innerHTML = `<em>${commentKey[0].toUpperCase() + commentKey.slice(1)}:</em>`;

                let comment_title_description = document.createElement('div');
                comment_title_description.className = 'comment_title_description';
                comment_title_description.innerHTML = `<em>${comment[commentKey]}</em> `;


                comment_card.append(comment_title, comment_title_description);
                comments_list.append(comment_card);
            }
            comments_block.appendChild(comments_list);
        }
        post_block.appendChild(comments_block);
    })