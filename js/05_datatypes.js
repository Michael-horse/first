//primitive

//7 types: string,number,boolean,null,undefined,symbol,BigInt

//reference(non primitive)

//array , objects, functions

//symbol is used when we have to store data in a unique manner
const id =Symbol('123')
const idd=Symbol('123')
console.log(id===idd)
//to make bigint
const bigient=4824019824089n
//array
let a=["ge","hr","okek"]
//object
let car={
 brand:"mercedes",
 cost:2099424,
}
function myfunc()
{
    console.log("helloo world")
}
myfunc()