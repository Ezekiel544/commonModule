const workLoad = require ("./export") ;
console.log(workLoad.add(5,10));
let work = workLoad.arrayOfObject ;
work.forEach(element => {
    console.log(`Good day my name is ${element.firstName} ${element.surName} and my age is ${element.age} with a complexion of ${element.complexion}.
        my relationship status is ${element.married} and i attained ${element.hub} , this my official ID ${element.ID}`);  
});

// const {number} = require ("./export") ;
// console.log(number);



 