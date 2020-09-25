//1. String concatenation

console.log("my" + "cat");
console.log("1" + 2);
console.log(`string literal 



1111

1+2=3`);

//2. numeric operators
console.log(1 + 1);
console.log(1 - 1);
console.log(1 * 1);
console.log(1 / 1);
console.log(1 % 1);
console.log(1 ** 1);

//3. Increment and decrement operators
let counter = 3;
const preIncrement = ++counter;
// counter= counter+1;
//preIncrement=counter;

const postIncrement = counter++;
const preDecrement = --counter;
const postDecrement = counter--;

//4. Assingnment operators
let x = 3;
let y = 8;
x += y; // x=x+y

//5. comparison operators
console.log(10 < 6);
//<=
//>
//>=

//6.logical poerators: ||(or), &(and),!(not)

const value1 = false;
const valuse2 = 4 < 2;

//||(or) 처음 하나가 참이면 참이 되고 뒤에 것을 확인 하지 않는다
// 그러므로 연산이 많이 필요한 것은 최대한 뒷쪽에 놓고 마지못해 확인하도록 한다.
console.log(`or: ${value1 || valuse2 || check()}`);

//&&(and)
console.log(`and: ${value1 && valuse2 && check()}`);
//and는 null 확인 할 때도 사용한다
// if (nullableObject != null) {
//   nullableObject, somthing;
// }

function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log("gg");
  }
  return true;
}
//!(not)
console.log(!value1);

//7.Equality
const stringFive = "5";
const numberFive = 5;

//== loose equality, with type conversion 타입이 같은지는 확인 안한다
console.log(stringFive == numberFive); //true
console.log(stringFive != numberFive); //false

//===stric equality, no type convertion 타입도 같은지 확인한다.
console.log(stringFive === numberFive); //false
console.log(stringFive !== numberFive); //true
//코딩 할때 웬만하면 '==='사용하자!

// object equality by reference
const hh1 = { name: "hyunha" };
const hh2 = { name: "hyunha" }; //hh1과 hh2 는 같은 값이 넣어져 있지만 다른곳에 저장되어 있다.
const hh3 = hh1;
console.log(hh1 == hh2); //false
console.log(hh1 === hh2); //false
console.log(hh1 === hh3); //true
console.log(hh1 == hh3); //true

//equality-puzzler
console.log(0 == false); //true
console.log(0 === false); //false
console.log("" == false); //true
console.log("" === false); //false
console.log(null == undefined); //ture
console.log(null === undefined); //false

//8. conditional operaoers:if
// if, else if, else
const name = "hyunha";
if (name === "hyunha") {
  console.log(`welcome ${name}`);
} else if (name === "coder") {
  console.log("you are amazing coder");
} else {
  console.log("unkwon");
}

//9. ternary operator:?
//condition ? value1: value2
console.log(name === "hyunha" ? "yes" : "no");

//10. swich statement
//여러개를 검사할때
const brower = "IE";
switch (brower) {
  case "IE":
    console.log("go away!");
    break;
  case "Chrome":
  case "Firefox":
    console.log("love you!");
    breakl;
  default:
    console.log("same all!");
    break;
}
// 11.Loops

let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

do {
  console.log(`do while:${i}`);
  i--;
} while (i > 0);

for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i--) {
  console.log(`inline varlable for: ${i}`);
}

//nested loops
// O(n**2)
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}

//break, contiue
//Q1 숫자를 0-10까지 짝수만 출력
for (let i = 0; i < 11; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}
//Q2 0-10까지 출력하는데 8을 만나면 멈춤
for (let i = 0; i < 11; i++) {
  if (i === 8) {
    break;
  }
  console.log(i);
}
