var myPetsArray = ["Dog", "Cat"];

function myArrayFunction(myPets){
    var myNewPets = [...myPets];

    myNewPets.push("Bird", "Fish");
    var firstPet = myNewPets[0];
    myNewPets.shift();
    var lastPet = myNewPets[myNewPets.length-1];
    myNewPets.pop();

    myNewPets.unshift("Lion");

    return myNewPets;

}


console.log(myArrayFunction(myPetsArray));
module.exports = myArrayFunction;