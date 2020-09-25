"use strict";

//Array
//1. DEclaration
const arr1 = new Array();
const arr2 = [1, 2];

//2. index position
const fruits = ["apple", "banana"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]);

//3.Looping over an array
//print all fruits
//for
for (let i of fruits) {
  console.log(i);
}

//foreach
fruits.forEach(fruit => console.log(fruit));

//4.addtion, deletion, copy
//push:add
fruits.push("berry", "peach");
console.log(fruits);

//pop:remove
fruits.pop();
fruits.pop();
console.log(fruits);

//unshift:앞에 추가
fruits.unshift("berry", "lemon");
console.log(fruits);

//shift
fruits.shift();
fruits.shift();

console.log(fruits);
//note! shift, unshift는  pop push보다 느리다
// 지정된 포지션에서 지우기
fruits.push("berry", "peach", "lemon");
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits); // ["appel", "berry", "peach", "lemon"]
fruits.splice(1, 1, "greenapple", "watermelon");
console.log(fruits);

//combine two arrays
const fruit2 = ["pear", "coco"];
const newFruits = fruits.concat(fruit2);
console.log(newFruits); //(7) ["appel", "greenapple", "watermelon", "peach", "lemon", "pear", "coco"]

//5.searching
//find the index

console.clear();
console.log(fruits);
console.log(fruits.indexOf("apple")); //0
//includes
console.log(fruits.includes("watermelon")); //true

//lastIndesOf
console.clear();
fruits.push("apple");
console.log(fruits);
console.log(fruits.indexOf("apple")); //0
console.log(fruits.lastIndexOf("apple")); //5

//혼자놀기
const arr = [1, 2, 3, 4, 5, 6, 7];
console.clear();
console.log(arr);
console.log(arr.length);

console.log(arr.toString()); //1,2,3,4,5,6,7

console.log(arr.toLocaleString()); //1,2,3,4,5,6,7

const a = arr.pop();
console.log(arr); //(6) [1, 2, 3, 4, 5, 6]
console.log(a); //7

arr.push(8);
console.log(arr); //(7) [1, 2, 3, 4, 5, 6, 8]

const arrabc = ["a", "b", "c"];
const arrabc123 = arr.concat(arrabc);
console.log(arrabc123); //(10) [1, 2, 3, 4, 5, 6, 8, "a", "b", "c"]
console.log(arrabc.join(",")); //a,b,c
console.log(arrabc.join("-")); //a-b-c
console.log(arrabc.reverse()); //(3) ["c", "b", "a"]
console.log(arrabc.shift()); //c
//맨앞에 제거한 것을 보여준다
console.log(arrabc); //(2) ["b", "a"]

const drink = ["water", "coffee", "juice", "milktea", "smootie", "tea"];
console.log(drink.slice(0, 3)); //(3) ["water", "coffee", "juice"]
const drinksliced = drink.slice(0, 3);
console.log(drinksliced); //(3) ["water", "coffee", "juice"]
console.log(drink); //(6) ["water", "coffee", "juice", "milktea", "smootie", "tea"]

const sort = [11, 2, 22, 1];
console.log(sort.sort((a, b) => a - b)); //(4) [1, 2, 11, 22]
console.log(sort.sort((a, b) => b - a)); //(4) [22, 11, 2, 1]

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersplice = number.splice(3, 6, 11, 12); //1,2번째 이자는 시작과 끝 이고 3번째 인자부터는 삭제된 위치에 추가 하는 것들이다
console.log(numbersplice); //(6) [4, 5, 6, 7, 8, 9]

console.log(number); //(4) [1, 2, 3, 10]

const unshift = [1, 2, 3, 4];
const unshifted = unshift.unshift(5, 6, 7, 8, 9);
console.log(unshift); //[5, 6, 7, 8, 9, 1, 2, 3, 4]
console.log(unshifted); //9

const testevery = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const testevery2 = [10, 11, 12, 13];
const isblewten = value => value < 10;
console.log(testevery.every(isblewten)); //true
console.log(testevery2.every(isblewten)); //false

const testsome = [1, 3, 5, 7, 8];
const testsome2 = [1, 3, 5, 7];
const isthereodd = value => value % 2 === 0;
console.log(testsome.some(isthereodd)); //true
console.log(testsome2.some(isthereodd)); //false

const foreachtest = [1, 2, 3];
foreachtest.forEach(value => console.log(value));
//1
//2
//3
const maptest = [1, 2, 3, 4];
maptest.map(valaue => console.log(valaue * 2));
const arrmaptest = maptest.map(value => value * 2);
console.log(arrmaptest); //(4) [2, 4, 6, 8]

const maptest2 = ["a", "b", "c", "d"];
const arrmaptest2 = maptest2.map(value => value + "haha");
console.log(arrmaptest2);

const filtertest = ["apple", "bear", "cup", "disc", "each", "fine", "apple"];
const filtertest2 = ["a", 1, 2, "a", "a", 3];
console.log(filtertest.lastIndexOf("apple")); //6 6번째
const filtertestarr = filtertest.filter(
  (value, index) => filtertest.indexOf(value) === index
);
console.log(filtertestarr); //(6) ["apple", "bear", "cup", "disc", "each", "fine"]
const filtertestarr2 = filtertest2.filter(
  (value, index) => filtertest2.indexOf(value) === index
);
console.log(filtertestarr2); //(4) ["a", 1, 2, 3]

const indexoftest = ["apple", "bear", "cup", "disc", "each", "fine"];
console.log(indexoftest.indexOf("apple")); //0 0번째에 있음
console.log(indexoftest.indexOf("disc")); //3 3번째에 있음

//객체 내의 값 인스턴스 개수 세기 :reduce
var names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];

var countedNames = names.reduce(function (allNames, name) {
  console.log(allNames, name);
  if (name in allNames) {
    allNames[name]++;
  } else {
    allNames[name] = 1;
  }
  return allNames;
}, {});
// countedNames is:

console.log(countedNames); // { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
