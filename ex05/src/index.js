var myNestedArray = [["Toblerone", 5], ["Milka", 3]];

function myNestedFunction(arr){
    var newArr = [...arr];

    return newArr;
}

console.log(myNestedFunction(myNestedArray));
module.exports = myNestedFunction;