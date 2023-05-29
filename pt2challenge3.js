const mark = {
    firstName: "Mark",
    lastName: "Miller",
    mass:78,
    height:1.69,
    calcBMIMark: function (){
         return(78/(1.69*1.69));
    }
};


const john = {
    firstName: "John",
    lastName: "Smith",
    mass:92,
    height:1.95,
     calcBMIJohn: function (){
        return (92/(1.95*1.95));
    }
};

console.log( mark.calcBMIMark(), john.calcBMIJohn());

if (mark.calcBMIMark() > john.calcBMIJohn()) {
    console.log(`Mark's BMI(${mark.calcBMIMark()}) is higher than John's BMI(${john.calcBMIJohn()})`);
}


else if(mark.calcBMIMark() < john.calcBMIJohn()){
    console.log(`John's BMI(${john.calcBMIJohn()}) is higher than Mark's BMI(${mark.calcBMIMark()}) `) ;
}

else {
    console.log('Draw');
}