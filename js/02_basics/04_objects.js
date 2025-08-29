//singleton object
const myobj = new Object();
myobj.name="huf"
myobj.id="12324"
myobj.logged=false

const user={
    email:"abc@email.com",
    full_name:{
        userfullname:{
            firstname:"fdjn",
            lastname:"fjsnf"
        }
    }
}
console.log(user.full_name.userfullname.firstname)

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
// let obj3=Object.assign(obj1,obj2)//obj1 is target and other objects are stored in it
let obj4=Object.assign({},obj1,obj2)//obj1 remains same
console.log(obj4)
console.log(obj1)
const obj3={...obj1,...obj2}
console.log(obj3)


//array of objects
const u=[
    {
        id:"2323"
    },
    {
        id:"2934"
    }
]
console.log(u[1].id)
console.log(typeof (Object.keys(myobj)))//object 
let a=[1,2,3]
console.log(Object.entries(myobj))//returns array of key value pairs
console.log(myobj.hasOwnProperty('namee'))


//destructuring of objects

const course={
    course:"js",
    price:0,
    teacher:"skdj"
}

//to extract values into an object
//destructuring
const {teacher: t}=course//teacher is referred as t
console.log(t)

//API 
// //json=>receives values from backend
// if anything is declared in {} without name then it is treated as json
// {
//     "name":"fsk",
//     "coursename":"js",
//     "price":"free"
// }
//in json both key and value pairs are strings

//api may be received in form of arrays or objects
//json=> javascript object notation
[
    {},
    {}
]