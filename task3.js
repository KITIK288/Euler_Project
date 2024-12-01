// Простые делители числа 13195 - это 5, 7, 13 и 29.
//
// Каков самый большой делитель числа 600851475143, являющийся простым числом?

function isPrime(num) {
    if (num < 2) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function task3() {
    num = 0;
    max = 0;
    while (num < 600851475143) {
        if (600851475143 % num === 0 && isPrime(num) === true) {
            max = num;
            console.log(max)
        }
        num++
    }
    console.log(max)
}

task3()