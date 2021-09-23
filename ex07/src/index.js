function largestNumFromArr(arr){
    var parArr = [...arr];
    var maxNumArray = [];
    
    for(var i = 0; i < parArr.length; i++){
        var max = 0;
        for(var j = 0; j < parArr[i].length; j++){
            if(max < parArr[i][j]){
                max = parArr[i][j];
            }
        }
        maxNumArray.push(max);
    }
    return maxNumArray;
}

console.log(largestNumFromArr([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
module.exports = largestNumFromArr;