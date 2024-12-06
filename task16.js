// 215 = 32768, сумма цифр этого числа равна 3 + 2 + 7 + 6 + 8 = 26.
//
// Какова сумма цифр числа 21000?

function task16() {
    num = BigInt(2 ** 1000);
    console.log(num);
    num = `${num}`;
    summa = 0;
    for (i = 0; i < num.length; i++) {
        console.log(num[i]);
        a = Number(num[i])
        summa += a;
    }
    console.log(summa);
}

task16()
