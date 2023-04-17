'use strict';

        // Напишите функцию getAverageValue
        // для получения среднеарифметического значения
        // с округлением в меньшую сторону до целого числа
        // С помощью этой функции получите средний чек за день, в массиве данные всех чеков за день:

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];
let sum = 0;

const getAverage = (numb) => {
    for (let i=0; i < numb.length; i++) {
        sum += numb[i];
    }
    let middleSum = Math.trunc(sum/numb.length);
    return middleSum;
}

console.log(getAverage(allCashbox));
