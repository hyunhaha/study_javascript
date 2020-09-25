// const n = 3;
// console.log(Number.isInteger(Math.sqrt(n)));


// const phone_number = '01033334444';
// let arr = phone_number.split('');
// console.log(phone_number.split(''));
// for (let i = 0; i < phone_number.length - 4; i++) {
//     console.log(phone_number[i]);
//     arr[i] = "*"

// }
// console.log(arr.join(''));
// const n = 3;
// var answer = '';
// let a = parseInt(n / 2);
// let b = n % 2;
// console.log(a, b);
// for (let i = 0; i < a; i++) {
//     answer += '수박'
//     console.log(answer);
// }
// b === 1 ? answer += '수' : answer;
// console.log(answer);

// let s = 'Zbcdefg';
// console.log(s.split('').sort((a, b) => b - a));
// s.split('').map(e => e.charCodeAt(0)).sort((a, b) => b - a).forEach(e => answer+='String.fromCharCode(e)');

//["Z", "b", "c", "d", "e", "f", "g"]
//["Z", "b", "c", "d", "e", "f", "g"]
//["Z", "b", "c", "d", "e", "f", "g"]
// let s = 'a234';
// s.split('').map(e => e.charCodeAt(0)).forEach(e => {
//     if (e >= 48 && e <= 57) {
//         console.log(e);
//     }

// });

let str = '12.1234';
console.log(Number(str));//12.1234
console.log(parseInt(str));//12
const arr = [1, 2, 3, 4];
console.log(Math.min(...arr));