const useremail="ssba"//non empty string is assumed to be a true value
//empty array is true value
if(useremail)
{
    console.log("got")
}
else{
    console.log("no")
}

//falsy values
/*
false 
0
-0
BigInt 0n,
"",
null,
undefined,
NaN
*/

//truthy values
/*
"0",
[],
'false',
" ",
[],
{},
function(){} =>empty func
*/

//to check empty object

const obj={}
if(Object.keys(obj).length==0)
    console.log("yes")

//null coalescing operator (??): null undefined=> safety check for null/undefined value

let var1;
var1=5??10
var1=null??10
console.log(var1)

//ternary operator ?:

// condition?true:false

var1=(5>8)?4:5;
console.log(var1)