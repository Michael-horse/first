let score="33.33abc"
console.log(typeof score)
let a=Number(score)
console.log(typeof a)
console.log(a)
//when a string containing only numbers is converted , the conversion works
//when string conataining an character which is not a number is converted,  NaN is displayed
//if null is converted to number => 0 is displayed
//in case of boolean values 0=false and 1=true
//for undefined , NaN is displayed
let alive=-1;

let loggedin=Boolean(alive)
console.log(loggedin)
//any non zero value when converted to boolean is true
//0 equals false
//empty string is false
//non empty string equals true

let no=33;
let string=String(no)
console.log(typeof string)
console.log(string)