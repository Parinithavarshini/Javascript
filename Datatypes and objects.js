/*
let a=12345; //consider as int
*/

/*
let a=12345n;  //2 types of declaring BigInt -> 1st- by adding n at last
let a=BigInt(12345);    -> mentioning as BigInt
*/

/* Object declaration method-1

let student1={       //object
    name:["abi","rani"], // array size=2
    age : 20,
    isStudent : true,
    address : {             //Nested objects
        state : "Tamilnadu",
        city : "Erode"
},
hello : function(){
    console.log("hi students");
 }
}
console.log(student1.name[1])   //[0] -> abi , [1] -> rani (based on array indexing)
*/

/*  Object declaration method-2

let student1 = new Object();
student1.name="abi";
student1.age=20
student1.hello = function ()  //Creating a function
{
    console.log("hi students");
}
console.log(student1) //student1 -> prints both the name and age,if only name give student1.name
student1.hello()   //Function call
*/

