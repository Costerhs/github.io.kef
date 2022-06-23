let ob = document.querySelector('.sum');
let kf1 = document.querySelector('.kef1');
let kf2 = document.querySelector('.kef2');
let vyg = document.querySelector('.vygoda');
let n1 = document.querySelector('.left');
let n2 = document.querySelector('.right');
let cent = document.querySelector('.centL');
let cert = document.querySelector('.centR')
let btn = document.querySelector('button')


let obj = { sum: 300, kefOne: 1.5, kefTwo: 4 };


function isAlls() {
    if (Object.values(obj).every(el => el > 0) == true) {
        vilka(obj.sum, obj.kefOne, obj.kefTwo);
    }
}
isAlls();
ob.addEventListener('input', function () {
    obj.sum = ob.value;
    isAlls();
});
kf1.addEventListener('input', function () {
    obj.kefOne = kf1.value
    isAlls();
});
kf2.addEventListener('input', function () {
    obj.kefTwo = kf2.value
    isAlls();
});

function vilka(sum, k1, k2) {
    let isComplete = 1 / k1 + 1 / k2;
    let amount = 100 - (isComplete * 100);
    let num1 = (1 / k1 / isComplete) * sum;
    let num2 = (1 / k2 / isComplete) * sum;

    // console.log(num1, num2, String(amount).slice(0, 4), String(num2 * k2).slice(0, 4) + 'som');
    vyg.textContent = String(amount).slice(0, 5) + '%';
    n1.textContent = String(num1).slice(0, 4) + 'som';
    n2.textContent = String(num2).slice(0, 4) + 'som';
    // cent.textContent = String(num1 * k1).slice(0, 4);
    cent.textContent = Math.floor(num1 * k1);
    cert.textContent = Math.floor(num2 * k2);
}

let i = 1;


btn.addEventListener('click', function () {
    console.log(i + ")" + ob.value + '>' + Number(cent.textContent));
    ob.value = Number(cent.textContent);
    vilka(cent.textContent, obj.kefOne, obj.kefTwo);
    i++;
})






