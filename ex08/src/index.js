function myMutation(arr){
    var par = [...arr];
    var a = par[0].toLowerCase();
    var b = par[1].toLowerCase();

    for(var i = 0; i < b.length; i++){
        if(a.indexOf(b[i]) < 0){
            return false;
        }
    }
    return true;
    
}

console.log(myMutation(["hello", "Hello"]));
module.exports = myMutation;