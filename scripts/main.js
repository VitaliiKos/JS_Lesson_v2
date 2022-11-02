// 1 Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let new_arr = [1, 456, 'hello', 3.14, -789, true, [5, 66, 789], false, {'id': 1}, '1'];

console.log(new_arr[0]);
console.log(new_arr[1]);
console.log(new_arr[2]);
console.log(new_arr[3]);
console.log(new_arr[4]);
console.log(new_arr[5]);
console.log(new_arr[6]);
console.log(new_arr[7]);
console.log(new_arr[8]);
console.log(new_arr[9]);

// 2 Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// 3 Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age

let book_1 = {
    'title': 'The Adventures of Sherlock Holmes',
    'genre': ['Detective fiction'],
    'pageCount': 307,
    'authors': [
        {
            'name': 'Arthur Conan Doyle',
            'age': 71,
        },
        {
            'name': '',
            'age': null,
        }
    ]
};

let book_2 = {
    'title': "Harry Potter and the Philosopher's Stone",
    'genre': ['Fantasy'],
    'pageCount': 223,
    'authors': [
        {
            "name": 'Joanne Rowling',
            'age': 57,
        },
        {
            'name': '',
            'age': null,
        }
    ]
};

let book_3 = {
    'title': 'The Hunchback of Notre-Dame',
    'genre': ['Romanticism', 'Gothic fiction'],
    'pageCount': 940,
    'authors': [
        {
            'name': 'Victor-Marie Hugo',
            'age': 83,
        },
        {
            'name': '',
            'age': null,
        }
    ]
}

console.log(book_1)
console.log(book_2)
console.log(book_3)


// 4 Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users =
    [
        {
            'id': 1,
            'name': "Leanne Graham",
            'username': "Bret",
            'password': "password_1",
        },
        {
            'id': 2,
            'name': "Ervin Howell",
            'username': "Antonette",
            'password': "password_2",
        },
        {
            'id': 3,
            'name': "Clementine Bauch",
            'username': "Samantha",
            'password': "password_3",
        },
        {
            'id': 4,
            'name': "Patricia Lebsack",
            'username': "Karianne",
            'password': "password_4",
        },
        {
            'id': 5,
            'name': "Chelsey Dietrich",
            'username': "Kamren",
            'password': "password_5",
        },
        {
            'id': 6,
            'name': "Mrs. Dennis Schulist",
            'username': "Leopoldo_Corkery",
            'password': "password_6",
        },
        {
            'id': 7,
            'name': "Kurtis Weissnat",
            'username': "Elwyn.Skiles",
            'password': "password_7",
        },
        {
            'id': 8,
            'name': "Nicholas Runolfsdottir V",
            'username': "Maxime_Nienow",
            'password': "password_8",
        },
        {
            'id': 9,
            'name': "Glenna Reichert",
            'username': "Delphine",
            'password': "password_9",
        },
        {
            'id': 10,
            'name': "Clementina DuBuque",
            'username': "Moriah.Stanton",
            'password': "password_10",
        }
    ];
console.log(users[0].name, ' - ', users[0].password)
console.log(users[1].name, ' - ', users[1].password)
console.log(users[2].name, ' - ', users[2].password)
console.log(users[3].name, ' - ', users[3].password)
console.log(users[4].name, ' - ', users[4].password)
console.log(users[5].name, ' - ', users[5].password)
console.log(users[6].name, ' - ', users[6].password)
console.log(users[7].name, ' - ', users[7].password)
console.log(users[8].name, ' - ', users[8].password)
console.log(users[9].name, ' - ', users[9].password)
