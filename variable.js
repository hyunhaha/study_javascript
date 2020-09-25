//1.use strict
//added in ES6
//use this for vanilla javascript
"use strict";

//2.variable(read/write)
// let (added in ES6)
{
  let a = "haha";
  console.log(a);
}

//var는 이제 쓰지 마세요
//no block scope
//var hoisting
// {
//   b = haha;
//   var b;
// }
// console.log(b);

//3.constant(read only)
//값을 선언하고 난 후에 다시는 값을 변경 할 수 없다
//바꿀 필요가 없다면 const로 선언하는 것을 추천
//-보안상의이유
//-실수를 줄일수 있다.
//
const dayInWeek = 7;
const hourInADay = 24;

//note!
// immutable data types: premitive types, frozen objects
// nutable data types: all objects by default nutable in JS
//faver immutable data type always for a reason:
// -security
// - thread safety
// - reduce human mistake

//4. variable types
//primitive, single item: number, string,boolean, null,undefined, symbol
//object, box container
//function, first-class function

const count = 17;
const size = 17.2;
console.log(`value: ${count}, type ${typeof count}`);
console.log(`value: ${size}, type ${typeof size}`);

//number -special numeric values: infinity,-infinity, NaN
const infinity = 1 / 0;
const negativeinfinity = -1 / 0;
const nAn = "non a number" / 2;

console.log(infinity); //Infinity
console.log(negativeinfinity); //-Infinity
console.log(nAn); //NaN

//sitng
const char = "c";
const hh = "hh";
const greeting = "hello" + hh;
console.log(`value: ${greeting}, type ${typeof greeting}`);
const helloBob = `hi ${hh}! `;
console.log(`value: ${helloBob}, tyep: ${typeof helloBob}`);

//boolean
//flase: 0, null, undefined, NaN, ''
//ture: any other value

const canRead = true;
const test = 3 < 1;
console.log(`value: ${canRead}, tyep: ${typeof canRead}`);
console.log(`value: ${test}, tyep: ${typeof test}`);

//null
let nothing = null;
console.log(`value: ${nothing}, tyep: ${typeof nothing}`); // null

//undefined
let x;
console.log(`value: ${x}, tyep: ${typeof x}`); // undefined

//symbol, create unique identifiers for objects
const sym1 = Symbol("id");
const sym2 = Symbol("id");
//고유한 식별자가 필요할 때 사용한다.
console.log(sym1 === sym2); //false
const gsym1 = Symbol.for("id");
const gsym2 = Symbol.for("id");
console.log(gsym1 === gsym2);
console.log(`value: ${sym1.description}, tyep: ${typeof sym1}`); // null

//object 박스형태
const hahaha = { name: "hyunha", age: 20 };
console.log(hahaha);
hahaha.age = 21; // 변경 가능
console.log(hahaha);

//5.dynamic typing
let text = "hello";
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`); //string
text = 1;
console.log(`value: ${text}, tyep: ${typeof text}`); //number
text = "7" + 5;
console.log(`value: ${text}, tyep: ${typeof text}`); //string
text = "8" / "2";
console.log(`value: ${text}, tyep: ${typeof text}`); //number
//console.log(text.charAt(0)); //error
