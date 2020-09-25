"use strict";
//Object-oriendted programming
//class:template
//object: instance of a class
//JavaScript classes
// -introduced in ES6

//1.CLass declarations
class Person {
  //constructor
  constructor(name, age) {
    //fields
    this.name = name;
    this.age = age;
  }
  //methods
  speak() {
    console.log(`${this.name}:hello`);
  }
}
const hyunha = new Person("hyunha", 20);
console.log(hyunha); //Person {name: "hyunha", age: 20}
console.log(hyunha.name);
console.log(hyunha.age);
hyunha.speak(); //hyunha:hello

//2. getter and setter
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get age() {
    return this._age;
  }
  set age(value) {
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User("Steve", "Jobs", -1);
const user2 = new User("hh", "k", 20);
console.log(user1.age); //0
console.log(user2.age); //20
//**##%%^^&&왕중요 왜냐면 내가 모르기 때문에 */
// this.age = 4;  // 1. 'age'라는 셋터가 정의 되어져 있기때문에 할당 연산자를 이용해서 할당하게 되면 우리가 정의한 'age' 셋터 함수가 호출되어집니다.

// set age(number) {  // 2. 이 함수가 호출되어지죠
//    this.age = number;    // 3. 근대 여기서 또다시 할당 연산자를 쓰기 때문에 다시 'age' 셋터 함수가 호출되어지죠. 그리고 다시 이 라인이 실행되어지고 또 다시 셋터가 호출되어져서 이것이 무한반복 되어져요
// }
// 즉, 모든
// this.age =
// 이 코드는 이제 셋터를 호출하기 때문이예요. 그래서 셋터 안에서는
// this._age =
// 다른 이름을 이용해서 필드에 값을 저장해야지 더이상 'age'의 셋터가 호출되지 않게 되는거랍니다.
// 실제로 데이터는 '_age'에 저장되어 지고 '.age' 는  셋터와 겟터를 호출한답니다.

//3.Fields(public, private)
//최근에 나와서 알고만있어

//4.Static propertiex and methods
//이것도 최근에 나오사ㅓ 알고만 있어

class Article {
  static publisher = "Dream coding";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }
  static printPublisher() {
    console.log(Article.publisher);
  }
  make() {
    console.log("haha");
  }
}
//static을 붙여주면 오브젝트에 상관없이 클래스 자체에 연결 되어있는다
const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); //undefined
console.log(article1.articleNumber); //1
console.log(Article.publisher); //Dream coding static이 붙어서!!
Article.printPublisher(); //Dream coding static이 붙어서!!
article1.make(); //haha

//5.Ingeritance
//하나의 클레스르르 다른 클래스에서 쓰는 방법

class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  draw() {
    console.log(`drwing ${this.color} color`);
  }
  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {} //extends Shape을 써 줌으로 써 Rectangle클래스는 shape클래스의 모든 속성들을 가지게 된다(상속된다.)
class Triangle extends Shape {
  draw() {
    super.draw(); //공통적을 정의한 draw도 그려주고 새로 정의한 것도 출력하고 싶을 때 super을 사용해서 부모의 함수를 호출한다.
    console.log("gogosing"); //새로 만든것!
  }
  getArea() {
    return (this.width * this.height) / 2;
  } //오버라이딩!! 상속되는 것 중에 수정이 필요한 부분이 있으면 가져 와서 수정한다.
  //다형성이 빛을 발한다!!
}

const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw(); //drwing blue color
console.log(rectangle.getArea()); //400

const triangle = new Triangle(20, 20, "red");
triangle.draw(); //drwing red color
console.log(triangle.getArea()); //200

//6.Class checking: instanceOf

console.log(rectangle instanceof Rectangle); //true
console.log(triangle instanceof Rectangle); //false
console.log(triangle instanceof Triangle); //true
console.log(triangle instanceof Shape); //true
console.log(triangle instanceof Object); //true
console.log(triangle.toString());
