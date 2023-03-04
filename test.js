"use strict";
let a = 5;
let b = 'Aibol';
let c = true;
let d = ['Aibol', 'Erlan', 'Azamat'];
d = d.map((item) => item.toUpperCase()); // AIBOL, ERLAN, AZAMAT
let e = 5;
e = 'Arman';
function Test(a, b) {
    return a + ' ' + b;
}
Test('Miras', 'Kaidarov'); // Miras Kaidarov
const Test2 = (a) => {
    return a * 2;
};
Test2(3); // 6
