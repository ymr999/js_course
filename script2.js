

if (num < 50) {
    console.log("Мало!");
} else if (num > 100) {
    console.log("Много!");
} else {
    console.log("Верно!");
}

(num == 50) ? console.log("Верно!") : console.log("НЕ верно!");

switch (num) {
    case num < 49:
            console.log("Мало!");
            break;
    case num > 100:
            console.log("Много!");
            break;
    case num > 80:
            console.log("Много!");
            break;
    case 50:
            console.log("Верно!");
            break;
    default:
        console.log("чтото пошло не так!");
        break;
}

let num =50;

/*while (num <= 55) {
    console.log(num);
    num++;
}
*/

do {
    console.log(num);
    num++;
}
while (num < 55);

for (let i = 1; i <= 8; i++) {
    if (i == 6) {
        break;
    }
    console.log(i);
}

for (let m = 1; m < 8; m++) {
    if (m == 6) {
        continue;
    }
    console.log(m);
}