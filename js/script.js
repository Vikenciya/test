let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в фотмате YYYY-MM-DD");

let appData = {
    badget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings : false
}

let question1 = prompt("Введите обязательную статью расходов в этом месяце:");
let question2 = prompt("Во сколько обойдется?");

appData.expenses = question1 + " : " + question2;

alert("Ваш бюджет на день составляет: " + (money - question2)/ 30);

console.log(appData.expenses);