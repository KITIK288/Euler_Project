// Выписав первые шесть простых чисел, получим 2, 3, 5, 7, 11 и 13.
//
// Очевидно, что 6-е простое число - 13.
//
// Какое число является 10001-м простым числом?

function isPrime(num) {
    if (num < 2) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function task7() {
    num = 1
    counter = 0
    while (counter !== 10001) {
        num++
        if (isPrime(num) === true) {
            console.log(num)
            counter++
        }
    }
    console.log(num)
}

task7()
