let stavka = document.querySelector('.stav1');
let kef1 = document.querySelector('.kef1s');


let objStav = { sum: 50, kefOne: 1.5 };


function isAll() {
    if (Object.values(objStav).every(el => el > 0) == true) {
        vilkas(objStav.sum, objStav.kefOne);
    }
}
isAll();

stavka.addEventListener('input', function () {
    objStav.sum = stavka.value;
    isAll();
});
kef1.addEventListener('input', function () {
    objStav.kefOne = kef1.value;
    isAll();
});



function vilkas(sum, kf1) {
    let win1 = sum * kf1;

    let part = (win1 / 100) * 10;
    let sum2 = win1 - sum - part;
    let kf2s = win1 / sum2
    console.log(win1 + ':' + part + ':' + sum2 + ':' + kf2s)
}