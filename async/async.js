//async &await
//clear style of using promise

//1.async
function fetchUser() {
    //do network request in 10 secs...
    return 'ellie';
}

const user = fetchUser();
console.log(user);
//비동기적인 처리를 하지 않으면 10초가 걸려서 출력이 된다
//만약 이 뒤에 웹페이지 ui를 받아오는 코드들이 있다면 화면에 10초이상 뒤에 보여지기 때문에 사용자는 기다려야한다
//이렇게 오래걸리는 일들은 비동기 적으로 처리 해줘야 한다

function fetchUser2() {
    return new Promise((resovle, reject) => {
        resovle('ellie')
    });
}
const user2 = fetchUser2();
user2.then(console.log);
console.log(user2);

//async를 함수 앞에 붙여준다
async function fetchUser3() {
    return 'ellie';
}

const user3 = fetchUser3();
user3.then(console.log);
console.log(user3);

//2.await
//async가 붙은 함수 안에서만 사용할 수 있따

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));

}

async function getApple() {
    await delay(3000);//delay함수가 끝날때 까지 기댜려준다
    return 'apple';//3초있다가 apple 리턴
}

async function getBanana() {
    await delay(3000);//동기적인 코드를 쓰는 것 처럼 쓸수 있따
    return 'banana';
}
function getBanana2() {
    return delay(3000);
    then(() => banana);
}

function pickFruits() {
    return getApple()
        .then(apple => {
            return getBanana().then(banana => `${apple}+${banana}`);
        });
}

pickFruits().then(console.log);

async function pickFruits2() {
    const apple = await getApple();
    const banana = await getBanana();

    return `${apple}+${banana}`;
}

pickFruits2().then(console.log);

async function pickFruits3() {
    const applePromise = getApple();//병렬적으로 실행한다
    const bananaPromise = getBanana();//병렬적으로 실행한다
    const apple = await applePromise();
    const banana = await bananaPromise();

    return `${apple}+${banana}`;
}

//3. useful Promise APIs
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()]).then(fruits => fruits.join('+'));
    //promise배열을 전달 하게 되면 모든 promise들이 병렬적으로 다 받을 때까지 모아 주는 아이 
}
pickAllFruits().then(console.log);


async function getAPPLE() {
    await delay(5000);
    return 'apple';
}
async function getBANANA() {
    await delay(4000);
    return 'banana';
}
function pickOnlyone() {
    return Promise.race([getAPPLE()], [getBANANA()]);

}
pickOnlyone().then(console.log);