'use strict';

let money = prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let question1 = "Введите обязательную статью расходов в этом месяце",
    question2 = "Во сколько обойдется?";    

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let a1 = prompt(question1, ''),
    a2 = prompt(question2, ''),
    a3 = prompt(question1, ''),
    a4 = prompt(question2, '');

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;    

alert(appData.budget / 30);