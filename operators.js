//Operators -> Mathematical and logiacal analysis
// Types : Unary ,Binary ,Ternary
//****Unary : Single operand(increment,decrement)
//****Binary : 2 operand (add,sub,mul,div)
//****Ternary : 3 operand(conditional operators)

//Binary 
//****1.Arithmetic operators -Add,Sub,Mul,Div,Modulus,Exponentiation(2**3=8),increment,decrement
//****2.Comparison operator - (<,>,>=,<=,!==,!=,==,===)
/*3.Logiacl operators
    -> && - Logical AND = true && false -> false
    -> || - Logiacl OR = true || false -> true
    -> !  - Logiacl NOT=!true -> false

/*Short circuit operators -> logical AND & logical OR 
let a=(30>5) && (9>5);
console.log(a) //checks 1st condition its false,it is and so does not check 2nd conditiion becoz if one fasle the whole is false
Same for OR only change is if one it true then whole is true

let a=5;
console.log(++a)
//pre increment -> prints the incremented value
//post increment -> prints the value before increment
//Both increments the value to 6 but return value differs

/*
let a=5;
let b=a++ + --a;  
let c=++b + b++;
a++;
console.log(a);
console.log(b);
console.log(c);

output : 6 12 22
*/      

/*
let a=true;
!!!!!!a;          //here value of a is not stored in anything so directly prints true (if a=!!!a then result is false)
console.log(a);
*/

/*
let a=4 & 3;
console.log(a);  //prints 0

let a=4||3;
console.log(a);   //prints 4
*/