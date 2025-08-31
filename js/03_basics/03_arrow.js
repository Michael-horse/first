const user={
    name:"hds",
    wallet:12,
    welcomemsg: function(){
        console.log(`${this.name}, welcome to website`)
    }
}

user.welcomemsg()
user.name="sfj"
user.welcomemsg()
// console.log(this)//returns null object as this does not refer to any onject in node
//global object in browser is window object

function ab()
{
    user:"jsn"
console.log(this)//undefined as no obj  in func
}
ab()

//arrow func
const f=()=>
{
    user:"jsn"
console.log(this)//undefined as no obj  in func
}
f()
//arrow func syntax
// const add=(n1,n2) => {
//     return n1+n2

//}
//implicit return
const add=(n1,n2)=>(n1+n2)
console.log(add(3,4))

//returning objects
const obj=(n1,n2)=>({name:"guitar"})
console.log(obj)