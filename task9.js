// Тройка Пифагора - три натуральных числа a < b < c, для которых выполняется равенство
//
// a2 + b2 = c2

// Например, 32 + 42 = 9 + 16 = 25 = 52.
//
// Существует только одна тройка Пифагора, для которой a + b + c = 1000.
// Найдите произведение abc.

function task9(sum) {
    for (let a = 1; a < sum; a++) {
        for (let b = a + 1; b < sum; b++) {
            let c = sum - a - b;
            if (a * a + b * b === c * c) {
                return a * b * c;
            }
        }
    }
    return null;
}

const sum = 1000;
const result = task9(sum);

console.log(`Произведение abc для Пифагоровой тройки, где a + b + c = ${sum}, равно: ${result}`);

