"use strict";

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();



let question1 = "Введите обязательную статью расходов в этом месяце",
    question2 = "Во сколько обойдется?";    

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let quest1 = prompt(question1, ''),
            quest_num2 = prompt(question2, '');
        if (typeof(quest1) === 'string' && (typeof(quest1) != null) && (typeof(quest_num2)) != null && quest1 != '' 
        && quest_num2 != '' && quest1.length < 50) {
            console.log("All questions are done");
        appData.expenses[quest1] = quest_num2;
        } else {
            i = i - 1;
            quest1 = prompt(question1, ''),
            quest_num2 = prompt(question2, '');
        }
    }
}
chooseExpenses();
/* let i=0;
do {
    let quest1 = prompt(question1, ''),
        quest_num2 = prompt(question2, '');
    i++;
    if (typeof(quest1) === 'string' && (typeof(quest1) != null) && (typeof(quest_num2)) != null && quest1 != '' 
    && quest_num2 != '' && quest1.length < 50) {
        console.log("All questions are done");
    appData.expenses[quest1] = quest_num2;
    } 

} while (i != 2); */

/*  let i =0;
while (i != 2) {
    let quest1 = prompt(question1, ''),
        quest_num2 = prompt(question2, '');
    if (typeof(quest1) === 'string' && (typeof(quest1) != null) && (typeof(quest_num2)) != null && quest1 != '' 
    && quest_num2 != '' && quest1.length < 50) {
        console.log("All questions are done");
        appData.expenses[quest1] = quest_num2;
    }
    i++;    
} */
  
appData.moneyPerDay =  (appData.budget / 30).toFixed();
alert("Ежедневный бюджет " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальній доход");
} else if (appData.moneyPerDay > 100){
    console.log("Средний доход");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
    console.log("хороший достаток");
} else {
    console.log("Wrong way situation");
}


function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?", ""),
            percent = +prompt("Под какой процент?", "");
        
        appData.monthIncome = save/100/12 * percent;
        alert("ДОход в месяц с накоплений: " + appData.monthIncome);
    }
}
checkSavings();