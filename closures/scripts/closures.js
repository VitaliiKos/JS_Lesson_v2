function UserCard(balance = 100, transactionLimit = 100, historyLogs = [], key = 1) {

    let time = new Date().toLocaleTimeString();
    let today = new Date().toLocaleDateString("en-US");


    return {
        cardOperation: function (operationType, credits) {
            let operation = {};
            operation['operationType'] = operationType;
            operation['credits'] = credits;
            operation['operationTime'] = `${today} , ${time}`;
            historyLogs.push(operation)
        },

        getCardOptions: function () {
            let cardOption = {};
            cardOption['key'] = key;
            cardOption['balance'] = balance;
            cardOption['transactionLimit'] = transactionLimit;
            cardOption['historyLogs'] = historyLogs;

            return cardOption;
        },
        putCredits: function (money) {
            balance += money;
            this.cardOperation("Received credits", money)
        },

        takeCredits: function (money) {
            if (money <= balance && money <= transactionLimit) {
                balance -= money;
                this.cardOperation("Withdrawal of credits", money)
            } else {
                console.error('Недостатньо коштів або ви перевищили ліміт')
            }
        },

        setTransactionLimit: function (limit) {
            transactionLimit = limit
            this.cardOperation("Transaction limit change", limit)
        },

        transferCredits: function (transferCredits, transferCard) {

            let transferCreditsWithPercent = Math.ceil(transferCredits * 1.005 * 100) / 100;

            if (balance >= transferCreditsWithPercent && transferCreditsWithPercent <= transactionLimit) {

                balance -= transferCreditsWithPercent;
                transferCard.putCredits(transferCredits)
                this.cardOperation("Transfer operation", transferCreditsWithPercent)
            } else {
                console.error('Недостатньо коштів або ви перевищили ліміт')
            }
        }
    }
}

function UserAccount(userName, userCards = []) {
    let countOfCard = 1;


    return {
        addCard: function () {
            if (userCards.length === 3) {
                return console.error(`У вас максимальна кількість карток! Ви більше не можете добавити нову картку!`);

            } else {
                let new_card = new UserCard(undefined, undefined, undefined, countOfCard);
                userCards.push(new_card);
                countOfCard += 1;
            }
        },

        getCardByKey: function (cardNumber) {
            return cardNumber >= 1 && cardNumber <= 3 ?
                userCards.filter(value => value.getCardOptions().key === cardNumber)[0] :
                'Ви ввели не правильну чило.'
        },
        getUserInfo() {

            return {userName, userCards}
        }
    }
}

let user = new UserAccount('Bob');
user.addCard();
user.addCard();
user.addCard();
let card1 = user.getCardByKey(1);
let card2 = user.getCardByKey(2);
card1.putCredits(500);
card1.setTransactionLimit(800);
card1.transferCredits(300, card2);
card2.takeCredits(50);
console.log(card1.getCardOptions());
console.log(card2.getCardOptions());
