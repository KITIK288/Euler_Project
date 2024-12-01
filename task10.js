// Сумма простых чисел меньше 10 равна 2 + 3 + 5 + 7 = 17.
//
// Найдите сумму всех простых чисел меньше двух миллионов.

function isPrime(num) {
    if (num < 2) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function task10() {
    num = 0;
    summa = 0;
    while (num < 2000000) {
        if (isPrime(num) === true) {
            summa += num;
            console.log(num)
        }
        num++
    }
    console.log(summa)
}

task10()
