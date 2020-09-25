"use strict";

//Promise is a JavaScript object for asynchronous operation.
//state: pending->fulfilled of rejected
//producer vs consumer
//1. producer
//when new Promise is created, the excutor runs automatically.
const promise = new Promise((resolve, reject) => {
  //promise 오브젝트를 만든다
  //doing some heavy work(ntwork, read files)
  console.log("doing something..."); //비동기적으로 수행하고 싶은 코드들을 promise 오브젝트 안에 작성한다.
  setTimeout(() => {
    //resolve("hh");//성공했을 때
    reject(new Error("no network")); //실패했을 때
  }, 2000);
});

//2. consumers:then, catch, finally
promise
  .then(value => {
    console.log(value); //성공한 값을 받아온다.
  }) //promise를 리턴한다 그래서 그것을 다시 캐치에 넣을수 있다->체이닝
  .catch(error => {
    console.log(error); //실패한 에러를 받아온다
  })
  .finally(() => {
    console.log("finally"); //성공과 실패에 상관없이 무조건 마지막에 호출 되는 함수
  });

//3.promise 연결하기 chaining

const fetchnumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchnumber //
  .then(num => num * 2)
  .then(num => num * 3)
  .then(num => {
    return new promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then(num => console.log(num));

//4.Error handling
const getHen = () => {
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("chicken"), 1000);
  });
};
const getEgg = () => {
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${hen}=> egg`), 1000);
  }); //=>reject(new Error(`error! ${hen}=> egg`))
};
const cook = () => {
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg}=> fried egg`), 1000);
  });
};
getHen()
  .then(hen => getEgg(hen)) //then(getEgg)
  .catch(error => {
    return "bread";
  })
  .then(egg => cook(egg)) //then(cook)
  .then(meal => console.log(meal)) //tnen(console.log)
  .catch(console.log);
