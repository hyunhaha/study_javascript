//함수 선언
function doSomething() {
  console.log("hello");
}
function doAnything(b) {
  console.log(b); //add 함수 출력
  const result = b(2, 3); //()를 이용해서 함수를 호출한다.
  console.log(result); //add 실행하고 return 값 출력
}
function todo(add) {
  console.log(add);
}
function add(a, b) {
  const sum = a + b;
  return sum;
}
//함수 호출
doSomething();

add(1, 2); // 함수를 호출만해서 아무일도 일어나지 않는다
const result = add(1, 2); //함수가 호출되어서 리턴값이 전달되어서 result에 할당이 된다
console.log(result); //html과 다르게 ui가 없기 때문에 콘솔로그에 출력해 줘야 한다.

doAnything(add); //doAnything함수에 add라는 함수자체를 전달한다.
todo(add()); //add함수를 호출하는것이다
// 이렇게 되면 todo을 호출 하기 전에 add를 먼저
//호출이 되어지면서 add 함수의 코드블럭이 실행되고 return으로
//전달되는 sum이라는 값이 todo으로 전달 되게 된다

//함수를 변수에 할당하기
const addFun = add;
console.log(addFun);
const addFunresult = addFun(1, 2); //콘솔로그로 출력해줘야지!
console.log(addFunresult);

//add는 함수를 실행하지 않고 그대로 전달 하는 거야
//add()는 함수를 호출 하는 거다 실행시키는 거야
