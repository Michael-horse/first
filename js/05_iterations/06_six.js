const code=['js','python','cpp']

const values=code.forEach((item)=>{//foreach does not return any value
console.log(item)
return item
})
console.log(values)

const mynum=[1,2,3,4,5,6,7,8,9,10]
const r=mynum.filter((item)=>item%2==0)//filter can be used to return values

console.log(r)