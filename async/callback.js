"use strict";

//자바스크립트는 동기적이다
//호이스팅이 된이후부터는 코드가 순서대로 작동한다
//호이스팅은? var, functiondeclartion같은 것들이 제일 위로 올라가는것
console.log("1"); //동기
setTimeout(() => console.log("2"), 1000); //비동기
console.log("3"); //동기

//동기적 콜백
function printim(print) {
  print();//콜백함수
}
printim(() => console.log("hh"));

//비동기 콜백
function printdelay(print, timeout) {//(함수,시간)
  setTimeout(print, timeout);
}

printdelay(() => console.log("async callback"), 2000); //비동기
console.clear();

//callback hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "ellie" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "ellie") {
        onSuccess({ name: "ellie", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

//1) id,pw  받아오기
//2) login
//3)roles
//4)print name and role

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
console.log(id);

userStorage.loginUser(
  id,
  password,
  user => {
    userStorage.getRoles(
      user,
      user => {
        alert(`${user.name}, you login success you are ${user.role}`);
      },
      error => {
        console.log(error);
      }
    );
  },
  error => {
    console.log(error);
  }
);
