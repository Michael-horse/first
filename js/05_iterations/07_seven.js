let num =[1,2,3,4,5]

// const r=num.map((num)=>num+10)
// console.log(r);

let newnum=num.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>40)
console.log(newnum)