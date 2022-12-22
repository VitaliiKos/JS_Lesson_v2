const day_block = document.querySelector('.tilesWrap')

//f1
function startDay(myVariables, callback) {
    setTimeout(() => {
        let step = document.createElement('div');
        step.className = 'step';
        step.innerHTML = `<h2> ${myVariables.step}</h2>`;
        myVariables.step += 1;

        let wake_up = document.createElement('div');
        let message = document.createElement("p");
        if (myVariables.workingDay) {
            if (!myVariables.oversleep) {
                myVariables.mood += 10;
                wake_up.innerHTML = `<h3>Сьогодні виспався</h3>`;
                message.innerText = 'Випити каву і можна їхати на роботу.';

            } else {
                myVariables.mood -= 15;
                wake_up.innerHTML = `<h3>Проспав, треба швидко збиратись нароботу.</h3>`;
                message.innerText = 'Треба бігти на роботу. Не люблю запізнюватись... ';
            }
            step.append(wake_up, message);
            day_block.append(step);

            callback(null, myVariables);
        } else {
            callback('Сьогодні вихідний. Можна повалятись в ліжку, почитати книжку...', null);
        }
    }, 1000);
}

//f2
function clearTheCarOfSnow(myVariables, callback) {
    setTimeout(() => {
        let step = document.createElement('div');
        step.className = 'step';
        step.innerHTML = `<h2>${myVariables.step}</h2>`;
        myVariables.step += 1;

        let wake_up = document.createElement('div');
        let message = document.createElement("p");
        wake_up.innerHTML = `<h3>Всю ніч падав сніг... </h3>`;

        if (myVariables.oversleep) {
            myVariables.mood -= 15;
            message.innerText = 'Потрібно хоча б трохи очистити вікно в машині... Решта по дорозі розтане.';
        } else {
            myVariables.mood += 10;
            message.innerText = 'В мене достатньо часу, щоб повністю очистити машину від снігу... Головне не помилитись і не почистити машину сусіда :)';
        }
        step.append(wake_up, message);
        day_block.append(step);

        callback(null, myVariables);
    }, 200);
}

//f3
function trafficJams(myVariables, callback) {
    setTimeout(() => {
        let step = document.createElement('div');
        step.className = 'step';
        step.innerHTML = `<h2>${myVariables.step}</h2>`;
        myVariables.step += 1

        let wake_up = document.createElement('div');
        let message = document.createElement("p");
        let trafficJamsStatus = [true, false][Math.floor(Math.random() * 2)];

        if (trafficJamsStatus) {
            myVariables.oversleep ? myVariables.mood -= 25 : myVariables.mood = -15;
            wake_up.innerHTML = `<h3>Корки на дорогах.</h3>`;
            message.innerText = 'Ну  де ви всі із самого ранку їдете!?';
        } else {
            myVariables.mood += 15;
            wake_up.innerHTML = `<h3>Машин практично немає.</h3>`;
            message.innerText = 'Можна не поспішати і спокійно добратись до роботи!?';
        }
        step.append(wake_up, message);
        day_block.append(step);

        callback(null, myVariables);
    }, 1200);
}

//f4
function systemStatus(myVariables, callback) {
    let step = document.createElement('div');
    step.className = 'step';
    step.innerHTML = `<h2>${myVariables.step}</h2>`;
    myVariables.step += 1

    let wake_up = document.createElement('div');
    let message = document.createElement("p");
    wake_up.innerHTML = `<h3>В першу чергу потрібно перевірити стан систем.</h3>`;

    let checkStatus = [true, false][Math.floor(Math.random() * 2)];
    setTimeout(() => {
        if (checkStatus) {
            myVariables.mood += 15;
            message.innerText = 'Система працює в штатному режимі...';
        } else {
            myVariables.mood -= 20;
            message.innerText = 'Хтось поламав мою систему... Трішки поправимо і буде як новенька!';
        }
        step.append(wake_up, message);
        day_block.append(step);

        callback(null, myVariables);
    }, 700);
}

//f5
function drinkCoffeeWithBoss(myVariables, callback) {
    let step = document.createElement('div');
    step.className = 'step';
    step.innerHTML = `<h2>${myVariables.step}</h2>`;
    myVariables.step += 1

    let wake_up = document.createElement('div');
    wake_up.innerHTML = `<h3>Випити з шефом по філіжанці кави.</h3>`;
    let message = document.createElement("p");

    let boos_mood = [true, false][Math.floor(Math.random() * 2)];
    setTimeout(() => {
        if (boos_mood) {
            myVariables.mood += 15;
            myVariables.money -= 100;
            message.innerText = "В шефа гарний настрій. Можна з'їсти круасана... можна потеревенити про що не-будь";
        } else {
            myVariables.mood -= 5;
            myVariables.money -= 50;
            message.innerText = "Шеф злий. П'ю каву, стараюсь не говорити зайвого, погоджуюсь зі всім, щоб не 'навішали' роботи :|";
        }
        step.append(wake_up, message);
        day_block.append(step);

        callback(null, myVariables);
    }, 400);
}

//f6
function workDay(myVariables, callback) {

    setTimeout(() => {
        let wake_up = document.createElement('div');
        let message = document.createElement("p");
        let step = document.createElement('div');
        step.className = 'step';
        step.innerHTML = `<h2>${myVariables.step}</h2>`;
        myVariables.step += 1;

        myVariables.mood += 10;
        wake_up.innerHTML = `<h3>Назбиралось трохи роботи.</h3>`;
        message.innerText = "Потрібно скласти звіти... віднести... принести... Рутинна робота";

        step.append(wake_up, message);
        day_block.append(step);

        callback(null, myVariables);
    }, 1500);
}

//f7
function checkSystem(myVariables, callback) {
    setTimeout(() => {
        let step = document.createElement('div');
        step.className = 'step';
        step.innerHTML = `<h2>${myVariables.step}</h2>`;
        myVariables.step += 1;

        let wake_up = document.createElement('div');
        let message = document.createElement("p");
        wake_up.innerHTML = `<h3>Потрібно перевірити стан систем.</h3>`;

        let checkStatus = [true, false][Math.floor(Math.random() * 2)];

        if (checkStatus) {
            myVariables.mood += 10;
            message.innerText = 'Все працює. Чудово!';
        } else {
            myVariables.mood -= 15;
            message.innerText = 'Збій системи!!! Потрібно терміново усунути несправність.';
        }
        step.append(wake_up, message);
        day_block.append(step);

        callback(null, myVariables);
    }, 800);
}

//f8
function endOfWorkingDay(myVariables, callback) {
    setTimeout(() => {
        let step = document.createElement('div');
        step.className = 'step';
        step.innerHTML = `<h2>${myVariables.step}</h2>`;
        myVariables.step += 1;

        let wake_up = document.createElement('div');
        let message = document.createElement("p");

        myVariables.mood += 20;
        myVariables.money += 300;
        wake_up.innerHTML = `<h3>Робочий день добіг кінця.</h3>`;
        message.innerText = 'Можна їхати додому.';

        step.append(wake_up, message);
        day_block.append(step);

        callback(null, myVariables);
    }, 1500);
}

//f9
function buyProducts(myVariables, callback) {
    setTimeout(() => {
        let step = document.createElement('div');
        step.className = 'step';
        step.innerHTML = `<h2>${myVariables.step}</h2>`;
        myVariables.step += 1;

        let wake_up = document.createElement('div');
        let message = document.createElement("p");
        wake_up.innerHTML = `<h3>Швидко вибрати продукти і на касу.</h3>`;

        let priceForProducts = Math.floor(Math.random() * 10000) / 10

        if (myVariables.money >= priceForProducts) {
            myVariables.money = Math.floor((myVariables.money - priceForProducts) * 100) / 100;
            message.innerText = 'Швиденько розплатився і додому.';
        } else {
            myVariables.mood -= 25;
            message.innerText = 'Не хватило готівки. Оплачу покупку кредитною картою';
        }
        step.append(wake_up, message);
        day_block.append(step);

        callback(null, myVariables);
    }, 1200);
}

//f10
function atHome(myVariables, callback) {
    setTimeout(() => {
        let step = document.createElement('div');
        step.className = 'step';
        step.innerHTML = `<h2>${myVariables.step}</h2>`;
        myVariables.step += 1;

        let wake_up = document.createElement('div');
        let message = document.createElement("p");

        myVariables.mood += 25;
        message.innerText = 'Я в дома! ';
        wake_up.innerHTML = `<h3>Ура!!!.</h3>`;

        step.append(wake_up, message);
        day_block.append(step);

        callback(null, myVariables);
    }, 800);
}

let day_btn = document.querySelector('#day_btn_block');

day_btn.onclick = (ev) => {
    ev.preventDefault();
    day_btn.textContent = 'Почати новий день';
    let myVariables = {

        oversleep: [true, false][Math.floor(Math.random() * 2)],
        workingDay: Math.floor(Math.random() * 3),
        mood: 50,
        money: 500,
        step: 1
    };

    while (day_block.firstChild) {
        day_block.removeChild(day_block.firstChild);
    }

    startDay(myVariables, (errFn1, resFn1) => {
        if (errFn1) {
            let step = document.createElement('div');
            step.classList.add('step', 'free_day');

            let wake_up = document.createElement('div');
            wake_up.innerHTML = `<h3>${errFn1}</h3>`;

            step.append(wake_up);
            day_block.append(step);

        } else {
            clearTheCarOfSnow(resFn1, (errFn2, resFn2) => {
                trafficJams(resFn2, (errFn3, resFn3) => {
                    systemStatus(resFn3, (errFn4, resFn4) => {
                        drinkCoffeeWithBoss(resFn4, (errFn5, resFn5) => {
                            workDay(resFn5, (errFn6, resFn6) => {
                                checkSystem(resFn6, (errFn7, resFn7) => {
                                    endOfWorkingDay(resFn7, (errFn8, resFn8) => {
                                        buyProducts(resFn8, (errFn9, resFn9) => {
                                            atHome(resFn9, (errFn10, resFn10) => {
                                                let result = document.createElement('div');
                                                result.className = 'result';
                                                let wake_up = document.createElement('div');
                                                let message = document.createElement("h3");

                                                wake_up.innerHTML = `<h3>Мій настрій: ${resFn10.mood}</h3>`;
                                                message.innerText = `Кошти: ${resFn10.money}`;

                                                result.append(wake_up, message);
                                                day_block.appendChild(result);
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        }
    });
}



