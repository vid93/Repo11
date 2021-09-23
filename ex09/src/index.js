function myBouncer(arr){
    var par = [...arr];
    var bouncer = [];

    for(var i = 0; i < par.length; i++){
        if(par[i] !== false && par[i] !== null && par[i] !== 0 && par[i] !== "" && par[i] !== undefined && par[i] !== NaN){
            bouncer.push(par[i]);
        }
    }
    return bouncer;
}

console.log(myBouncer([7, "ate", "", false, 9]));
module.exports = myBouncer;