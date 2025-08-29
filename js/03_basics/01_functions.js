function saymyname()
{
    console.log("ref")
}
// saymyname//reference of func
saymyname()//execution of func
 function add(n1,n2)
 {
    return (n1+n2)
 }
let a=add(1,2)
console.log(a)
function loggedin(username)
{  if(!username)//undefined is false by deafult so using !username runs if username is undefined
{
    console.log(`please enter a username`)
    return
}
    return `${username} just logged in`
}
console.log(loggedin())// username is undefined by default
//rest operator=> ... is used to convert collection of elements into array
function calculatecartprice(...num1)
{
   return num1
}
console.log(calculatecartprice(40,60,90))

const user={
    usernamew:"ac",
    price:23
}
function handleobj(anyobj)
{
    console.log(`username is ${anyobj.usernamew} and price is ${anyobj.price}`)
}

handleobj(user)