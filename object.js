//Objects
//objcet={key:value}

//1.Literals and properties
const obj1 = {};
const obj2 = new Object();

function print(person) {
  console.log(person.name);
  console.log(person.age);
}
const hh = { name: "hyunha", age: "age" };
print(hh);

hh.hasJob = true;
console.log(hh.hasJob);

delete hh.hasJob;
console.log(hh.hasJob);

//2. computed properites
//key should be always thring
console.log(hh.name);
console.log(hh["name"]);
hh["hasJob"] = true;
console.log(hh.hasJob);

function printValue(obj, key) {
  console.log(obj.key); //undefined로 출력
  console.log(obj[key]); //undefined로 출력
}

printValue(hh, "name");
printValue(hh, "age");

//3.Property value shorthand
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
const person4 = makePerson("hh", 20);
console.log(person4);
const person5 = new Person("hh", 30);
console.log(person5);
function makePerson(name, age) {
  return {
    //name: name,
    name,
    //age: age,
    age,
  };
}
//4. Constuctor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}
//5. in poerator:property ecistence check (key in obj)
console.log("name" in hh); //true
console.log("age" in hh); //true

//6.for..in vs for..of
//for(key in obj)
for (key in hh) {
  console.log(key); //name, age, ageJob
}

//for (value of iterable)
const array = [1, 2, 3, 4, 5];
for (i of array) {
  console.log(i);
}

//7.fun cloning
//object.assign(dest, [obj1, obj2 , obj3,...])
const user = { name: "hh", age: "20" };
const user2 = user;
user2.name = "coder";
console.log(user); //{name: "coder", age: "20"}

//old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.log(user3); //{name: "coder", age: "20"}

const user4 = {};
Object.assign(user4, user);
//같은 코드로 cons user4=Object.assign({}, user);
console.log(user4); //{name: "coder", age: "20"}

//another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); //blue 뒤에 나오는 아이 일수록 앞의 값을 덮어 씌우기 때문에 뒤의 값이 된다.
console.log(mixed.size); //big
