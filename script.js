'use strict';

let money = prompt("Your months budget?", ""),
    time = prompt("PLease enter date in format YYYY-MM-DD", "");

let question1 = "Your current spends?",
    question2 = "How much?";    

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