function mySplice(arr1, arr2, n){
    var par1 = [...arr1];
    var par2 = [...arr2];

    for(var i = 0; i < par1.length; i++){
        par2.splice(n, 0, par1[i]);
    }
    
    return par2;
}

console.log(mySplice([1, 2, 3], [4, 5], 2));
module.exports = mySplice;