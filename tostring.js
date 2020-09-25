// const n = 101234;
// var answer = [];
// const n__string = String(n);
// console.log(n__string);
// const n_arr = n__string.split('');
// console.log(n_arr);
// n_arr.forEach(e => {
//     answer.push(Number(e));
// });
// console.log(answer.reverse());
// answer.sort((var1, var2) => var2 - var1);
// console.log(answer);
var answer = 0;
const n = 118372;
const string_n = String(n);
const n_arr = string_n.split('');
let int_n_arr = [];
n_arr.forEach(e => {
    int_n_arr.push(Number(e));
});
console.log(int_n_arr);
int_n_arr.sort((num1, num2) => num2 - num1);
console.log(int_n_arr);
let len = int_n_arr.length;
int_n_arr.forEach(e => {

    console.log(len - 1);
    answer += e * (10 ** (len - 1));
    len--;
    console.log(answer);
});
console.log(answer);

const newN = n + '';//string이된다.
const newarr = newN.split("").sort();//문자열도 정렬된다

console.log(typeof (n));
console.log(typeof (newN));
console.log(newarr.reverse().join(''));

function solution(n) {
    var answer = 0;
    const new_n = n + '';
    answer = new_n.split('').sort().reverse().join("");
    return answer;
}

function solution(n) {
    const newN = n + "";
    const newArr = newN
        .split("")
        .sort()
        .reverse()
        .join("");

    return +newArr;
}