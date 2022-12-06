// 1. Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.user_id = id;
    this.user_name = name;
    this.user_surname = surname;
    this.user_email = email;
    this.user_phone = phone;
}

let users = [];
users.push(new User(1, 'Mateo', 'Smith', 'Sincere@april.biz', '1-770-736-8031'));
users.push(new User(4, 'Ezra', 'Davis', 'Shanna@melissa.tv', '1-010-692-6593'));
users.push(new User(7, 'Rowan', 'Miller', 'Nathan@yesenia.net', '1-463-123-4447'));
users.push(new User(9, 'Gael', 'Garcia', 'Julianne.OConner@kory.org', '1-493-170-9623'));
users.push(new User(2, 'Waylen', 'Jones', 'Lucio_Hettinger@annie.ca', '1-254-954-1289'));
users.push(new User(10, 'Silas', 'Brown', 'Karley_Dach@jasper.info', '1-477-935-8478'));
users.push(new User(8, 'Elias', 'Williams', 'Telly.Hoeger@billy.biz', '1-210-067-6132'));
users.push(new User(5, 'Aurelius', 'Johnson', 'Sherwood@rosamond.me', '1-586-493-6943'));
users.push(new User(3, 'Bruno', 'Barrett', 'Chaim_McDermott@dana.io', '1-775-976-6794'));
users.push(new User(6, 'Blythe', 'Anderson', 'Rey.Padberg@karina.biz', '1-024-648-3804'));

console.log('Homework 1:');
console.log(users);
console.log('***************');


// 2. Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filtered_users = users.filter(value => value.user_id % 2 === 0);
console.log('Homework 2:');
console.log(filtered_users);
console.log('***************');

// 3. Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sorted_users = users.slice().sort((a, b) => a.user_id - b.user_id);
console.log('Homework 3:');
console.log(sorted_users);
console.log('***************');


// 4. створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
function Client(id, name, surname, email, phone, order) {
    this.client_id = id;
    this.client_name = name;
    this.client_surname = surname;
    this.client_email = email;
    this.client_phone = phone;
    this.client_order = order;
}

let clients = [];
clients.push(new Client(1, 'Liam', 'Mason', 'Sincere@april.biz', '1-770-736-8031', ['apple', 'juice']));
clients.push(new Client(4, 'Noah', 'Hudson', 'Shanna@melissa.tv', '1-010-692-6593', ['potato']));
clients.push(new Client(7, 'Lucas', 'Lincoln', 'Nathan@yesenia.net', '1-463-123-4447', ['orange', 'oil', 'butter']));
clients.push(new Client(9, 'Benjamin', 'Grayson', 'Julianne.OConner@kory.org', '1-493-170-9623', ['onion', 'garlic', 'lard', 'bread']));
clients.push(new Client(2, 'William', 'Carter', 'Lucio_Hettinger@annie.ca', '1-254-954-1289', []));
clients.push(new Client(10, 'James', 'Wyatt', 'Karley_Dach@jasper.info', '1-477-935-8478', ['mango', 'banana', 'persimmon', 'lemon']));
clients.push(new Client(8, 'Elijah', 'Jackson ', 'Telly.Hoeger@billy.biz', '1-210-067-6132', ['cucumber', 'carrot', 'tomato']));
clients.push(new Client(5, 'Oliver', 'Logan', 'Sherwood@rosamond.me', '1-586-493-6943', ['fish', 'meat']));
clients.push(new Client(3, 'Aden', 'Adler', 'Chaim_McDermott@dana.io', '1-775-976-6794', ['beer', 'chips']));
clients.push(new Client(6, 'Keane', 'Huxley', 'Rey.Padberg@karina.biz', '1-024-648-3804', ['cake']));

console.log('Homework 4:');
console.log(clients);
console.log('***************');


// 5. Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sorted_clients = clients.slice().sort((a, b) => a.client_order.length - b.client_order.length);

console.log('Homework 5:');
console.log(sorted_clients);
console.log('***************');


// 6. Створити функцію конструктор яка дозволяє створювати об'єкти car,
// з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, manufacturer, year, max_speed, engine) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.max_speed = max_speed;
    this.engine = engine;

    this.drive = function (km = this.max_speed) {
        return `їдемо зі швидкістю ${km} на годину`;
    }

    this.info = function () {
        let car_info = {};
        for (const carKey in this) {
            if (typeof this[carKey] !== 'function') {
                car_info[carKey] = this[carKey];
            }
        }
        return car_info;
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.max_speed += newSpeed;
        return `New car's speed : ${this.max_speed} km/h`;
    }
    this.changeYear = function (newValue) {
        return newValue >= 1990 && newValue <= new Date().getFullYear() ?
            `You changed car's year: ${this.year = newValue}` :
            'Wrong date';
    }
    this.addDriver = function (driver) {
        this.driver = driver;
        return this.driver;
    }

}

let car1 = new Car('bmw', 'Germany', 2010, 250, 'Diesel 2.0')

console.log('Homework 6:');
console.log(car1.drive());
console.log(car1.info());
console.log(car1.increaseMaxSpeed(50));
console.log(car1.changeYear('2022'));
console.log(car1.addDriver({name: 'Leanne', surname: 'Graham', email: 'Sincere@april.biz', phone: '1-770-736-8031'}));
console.log(car1.info());
console.log('***************');


// 7. (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class CarCreate {
    constructor(model, manufacturer, year, max_speed, engine) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.max_speed = max_speed;
        this.engine = engine;
    }
    drive (km = this.max_speed) {
        return `їдемо зі швидкістю ${km} на годину`;
    }

    info () {
        let car_info = {}
        for (const carKey in this) {
            if (typeof this[carKey] !== 'function') {
                car_info[carKey] = this[carKey];
            }
        }
        return car_info;
    }

    increaseMaxSpeed (newSpeed) {
        this.max_speed += newSpeed;
    }

    changeYear (newValue) {
        newValue >= 1990 && newValue <= new Date().getFullYear() ? this.year = newValue : this.year;
    }

    addDriver (driver) {
        this.driver = driver;
    }

}
let car2 = new CarCreate('Volvo', 'Swedish', 2015, 280, 'Diesel 2.0');
let driver2 = {name: 'Clementina', surname: 'DuBuque', email: 'Rey.Padberg@karina.biz', phone: '1-024-648-3804'};

console.log('Homework 7:');
console.log(car2.drive());
console.log(car2.info());
car2.increaseMaxSpeed(40);
car2.changeYear('2018');
car2.addDriver(driver2);
console.log(car2.info());
console.log('***************');


// 8. створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
console.log('Homework 8:');

class Cinderella {
    constructor(name, year, size) {
        this.name = name;
        this.year = year;
        this.size = size;
    }
}

class Prince {
    constructor(name, year, shoe_size) {
        this.name = name;
        this.year = year;
        this.shoe_size = shoe_size;
    }
}

let prince = new Prince('Vasya', 23, 36);

let cinderellas =[];
cinderellas.push(new Cinderella('Mika', 24, 37));
cinderellas.push(new Cinderella('Lina', 36, 38));
cinderellas.push(new Cinderella('Milla', 25, 37));
cinderellas.push(new Cinderella('Emma', 31, 39));
cinderellas.push(new Cinderella('Amelia', 21, 35));
cinderellas.push(new Cinderella('Nika', 22, 36));
cinderellas.push(new Cinderella('Mia', 23, 35));
cinderellas.push(new Cinderella('Charlotte', 38, 40));
cinderellas.push(new Cinderella('Olivia', 31, 37));
cinderellas.push(new Cinderella('Mia', 18, 34));

for (const cinderella of cinderellas) {
    if (cinderella.size === prince.shoe_size){
        console.log(`Принц знайшов свою принцесу, її звати ${cinderella.name}`, cinderella);
        break
    }
}
console.log('***************');


//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let prince2 = new Prince('Petya', 27, 39);
let lucky_cinderella = cinderellas.find(value => value.size === prince2.shoe_size)
console.log(lucky_cinderella)
console.log('***************');
