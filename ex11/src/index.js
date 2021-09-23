function splitArrayInGroups(arr, n){
    var par = [...arr];
    var size = n;
    var result = [];

    for(var i = 0; i < par.length; i += size){
        result.push(par.slice(i, i + size));
    }
    return result;
}

console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
module.exports = splitArrayInGroups;