//var does not follow scope rules
//let and const follow scope rules
var c=300//global scope
let a=300
if(true)
{
let a=10;
const b=20;
var c=30;//value of c is modified
console.log(a)//10 is printed as local scope
}
console.log(a)//300 is printed as global scope
// console.log(b)
console.log(c)
//{} is called block scope of a program
//values outside scope can be accessed from inside block scope but vals inside block cannot be accessed outside

//nested scope
function one()
{
    const name="ahdd"
   two()
    function two()
    {
        const site='yt'
        console.log(name)//can be accessed
    }
    //console.log(site) cannot be accessed
}
 one()
 //closure=> property of child function to access parent function

 if(true)
 {
    let name="ads"
    if(name==="ads")
    {
        let wnf=" y"
        console.log(name+wnf)
    }
    // console.log(wnf)
 }
console.log(addone(8))
 function addone(num)
 {
    return num+1
 }

addtwo(9)//since function is contained in a variable therefore variable must be defined and initialized before function inside it is called
 store=function addtwo(num){
    return num + 2
 }