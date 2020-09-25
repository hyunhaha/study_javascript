"use strict";

//Function
//-기본적인 빌딩블럭
//어려번 재사용이 가능하다
//한가지의 일이나 값을 계산해준다

//1. 함수 선언
//function name(param1, param2){body... return;}
//하나의 함수는 하나의 일을 해야한다.
//naming: doSomthing ,command, verb
//함수는 오브젝트이다!!! js에서는

function prinHello() {
  console.log("hello");
}

prinHello();

function log(message) {
  console.log(message);
}

log("hello");

//2.Parameters
//premitive타입인 경우에는 메모리에 값이 그대로 저장 되어 있기 때문에 값이 전달이 된다.
//오브젝트인 경우에는 메모리에 레퍼런스가 저장 되어 있기 때문에 레퍼런스가 전달 된다.
function changeName(obj) {
  obj.name = "coder";
}

const hyunha = { name: "hyunha" };
console.log(hyunha);
changeName(hyunha);
console.log(hyunha);

//3.Default parameters (added in ES)
function showMessage(message, from) {
  console.log(`${message} by ${from}`);
}
showMessage("hi"); // hi by undefined

function showMessage2(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}
showMessage2("hi"); // hi by unknown

//4. rest parameters (add in ES6)

function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    //배열을 하나씩 가져오는 반복을 할 때
    console.log(arg);
  }

  args.forEach(arg => console.log(arg));
}

printAll("dream", "coding", "ellie");

//5. local scope
//자식은 부모부분에서 선언된 메시지들을 쓸수 있지만 부모는 자식 부분에서 정의된 메시지를 쓸 수 없다.
let globalMessage = "global";
function printMessage() {
  let message = "hello";
  console.log(message);
  console.log(globalMessage);

  function prinAnother() {
    console.log(message);
    let childMessage = "hello";
  }
  //console.log(childMessage);//error
}

printMessage();

//6.return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`);

//7. early returnm early exit

//bad
function ungradUser(user) {
  if (user.point > 10) {
    //long ungrade logic...
  }
}

//good
function upgradUser(user) {
  if (user.point <= 10) {
    return;
  }
  //long ungrade logic...
}

// first class function
//1. function expression
// function declaration과 function expression의 차이
// function expression은 함수를 선언하기 전에 함수를 호출하면 에러가 난다.
//하지만 function declaration은 hoisting이 되어서 함수를 선언하기전에 호출해도 실행이 된다.
const print = function () {
  // anonymous function
  console.log("print");
};

print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

//2.callback function using function expression
//함수를 전달해서 상황이 맞으면 전달 된 함수를 불러라고 전달 하는 것을 콜백 함수라고 한다.
function randomQuiz(answer, printYes, printNo) {
  // 두가지의 콜백함수가 파라메터로 전달 되어있다
  if (answer === "love you") {
    printYes(); // 경우에 따라서 각각 실행 된다
  } else {
    printNo();
  }
}
//anonymous function
const printYes = function () {
  console.log("yes");
};
//named function
//디버깅을 할 때 함수의 이름이 나오게 하기 위해 이름을 정의 했다.
const printNo = function print() {
  console.log("no");
  //print();//계속 실행된다
};

randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);

//Arrow function
//항상 이름이 없다
const simplePrint = function () {
  console.log("simpleprint");
};

const simple = () => console.log("simple print");
const Add = (a, b) => a + b; //@@##!!~~!!짱이다~~~!!!@@@###$$
const ADd = (a, d) => {
  //do something more 더 긴 수행이 필요할때
  return a + b; //리턴을 꼭 써줘야 한다
};

//IIFE: immediately inoked function expression
//함수를 선언하자마자 호출 시키기
(function hello() {
  console.log("IIFE");
})();
