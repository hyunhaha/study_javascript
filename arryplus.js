const arr1 = [[1, 2], [2, 3]];
const arr2 = [[3, 4], [5, 6]];
var answer = [[]];
for (let i = 0; i < arr1.length; i++) {

    if (i > 0) {
        answer.push([]);
    }
    for (let j = 0; j < arr1[0].length; j++) {

        answer[i][j] = arr1[i][j] + arr2[i][j];
    }

}
console.log(answer);