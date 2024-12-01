// 2520 - самое маленькое число, которое делится без остатка на все числа от 1 до 10.
//
// Какое самое маленькое число делится нацело на все числа от 1 до 20?

function isDivisibleByAll(num) {
    for (let i = 1; i <= 20; i++) {
        if (num % i !== 0) {
            return false;
        }
    }
    return true;
}

function task5() {
    let num = 1;
    while (true) {
        if (isDivisibleByAll(num)) {
            return num;
        }
        num++;
    }
}

const result = task5();
console.log({result});
