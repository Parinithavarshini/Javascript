/*  if else
var a=6;
if(a%3==0 && a%5!=0)
{
    console.log("Hi")
}
else if(a%5==0 && a%3!=0)
{
    console.log("Hello");
}
else if(a%3==0 && a%5==0)
{
    console.log("Hi Hello")
}
*/

//It can also easily done as//

/*
var a=6;
if(a%3==0){
    console.log("Hi")
}
if(a%5==0){
    console.log("Hello")
}
*/

/* SWITCH
let choice="hi";
switch(choice)
{
    case "hi":
        console.log("HI");
        break;
    case "hello":
        console.log("HELLO");
        break;
    case "welcome":
        console.log("WELCOME");
        break;
}
*/

/*
let choice=2;
switch(choice)
{
    case 1:
        console.log("ONE"); //IN THIS CASE THE OUTPUT IS 2 BEECAUSE 2ND CASE IS ONLY EXECUTED 
    case 2:
        console.log("TWO");
        break;
    case 3:
        console.log("THREE");
        break;
}
*/

/* prints 1 to 10
for(let a=1;a<=10;a++)
    console.log(a)
*/

/* prints hi infinite times
for(;;){
    console.log("Hi")
}
*/

/*
let a=1
for(a=1;a<100;a++); //prints the op as hi 100
    console.log("hi");
    console.log(a);
*/

/*
for(let a=1;a<100;a++) //prints the op as 99 times hi amd 100 for var(globally scoped) and for let 99 times hi and undefined(executes only within a block)
    console.log("hi");
    console.log(a);
*/

