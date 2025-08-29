//singleton object => created using constructor
//object.create()=> singleton object
// not singleton when declared as a literal

//object literals
const sym=Symbol("key1")
//stored as key value pairs
const jsuder=
{
  name:"abd",
  age:12,
  mail:"ksfm",
  "full name":"sjfksfj",//cannot be accessed using .function
  //to use symbol
  [sym]:"mykey",
  loggedin:false,
  lastlogindays:["monday","saturday"]
}
//to access object data
//object_name.variable_name
//object_name["variable_name"]
console.log(jsuder.name)
console.log(jsuder["name"])
//jsuder.fullname cant be used
console.log(jsuder["full name"])
console.log(typeof [sym])
Object.freeze(jsuder)//changes are no longer propogated
console.log(jsuder)