"use strict";
const numbers = [2, 4, 53, 93, 629, 73, 89, 6, 8, 10];
const ood_numbers = [];
const even_numbers = [];
let ood = '';
let even = '';
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        ood_numbers.push(numbers[i]);
    }
    else {
        even_numbers.push(numbers[i]);
    }
}
for (let j = 0; j < ood_numbers.length; j++) {
    ood += ood_numbers[j].toString();
    if (j != (ood_numbers.length - 1)) {
        for (let l = 0; l < 1; l++) {
            ood += ',';
        }
    }
}
for (let k = 0; k < even_numbers.length; k++) {
    even += even_numbers[k].toString();
    if (k != (even_numbers.length - 1)) {
        for (let m = 0; m < 1; m++) {
            even += ',';
        }
    }
}
console.log(`ood numbers : ${ood}`);
console.log(`even numbers : ${even}`);
