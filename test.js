function calculate(type, operands) {
    console.log(type);
    console.log(operands);
    this.type = type;
    let result = 0;
    //this.operands=operands;
    console.log(this.type);
    if (this.type.type === 'add') {
        for (let i in this.type.operands) {
            console.log(this.type.operands[i]);
            this.result += this.type.operands[i];


            console.log(this.result);
            return this.result;
        }
    }
    else if (this.type.type === 'multiply') {
        for (let i in this.type.operands) {
            this.result *= this.type.operands[i];
            return this.result;
        }
    }
}
console.log(calculate({ "type": "add", "operands": [1, 2] }));

const arr = [1, 2, 3, 4];
const obj = { "type": "add", "operands": [1, 2] }
for (let i in arr) {
    console.log(typeof (i));
    console.log(i);
}
for (let i in obj.operands) {
    console.log(typeof (obj.operands[i]));
    console.log(obj.operands[i]);
}