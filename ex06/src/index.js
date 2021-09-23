function multiplyArrayFunction(myArray){
    var pArr = [...myArray];
    var arr = [];

    var sum = 0;
    var product = 1;
    for(var i = 0; i < pArr.length; i++){
        for(var j = 0; j < pArr[i].length; j++){
            sum += pArr[i][j];
            product *= pArr[i][j];
        }
    }
    arr.push(product, sum);

    return arr
}

console.log(multiplyArrayFunction([[1, 2], [3, 4, 5, 6], [7, 8, 9]]));
module.exports = multiplyArrayFunction;