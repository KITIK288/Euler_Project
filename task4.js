// Число-палиндром с обеих сторон (справа налево и слева направо) читается одинаково.
//
// Самое большое число-палиндром, полученное умножением двух двузначных чисел – 9009 = 91 × 99.
//
// Найдите самый большой палиндром, полученный умножением двух трехзначных чисел.

function isPalindrome(num) {
    const str = num.toString();
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

function task4() {
    let maxPalindrome = 0;

    for (let i = 999; i >= 100; i--) {
        for (let j = 999; j >= 100; j--) {
            const product = i * j;

            if (isPalindrome(product) && product > maxPalindrome) {
                maxPalindrome = product;
            }
        }
    }

    return maxPalindrome;
}

const result = task4();
console.log(`Самое большое число-палиндром, полученное умножением двух трехзначных чисел: ${result}`);
