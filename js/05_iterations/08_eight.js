let arr=[1,2,3,4,5]
const iv=0;
const sum=arr.reduce((accumulator,currentval)=>accumulator+currentval,iv)
console.log(sum)
const s=arr.reduce(function (acc,cval){
    return acc+cval
})
console.log(s)
//only in first iteration iv is stored in accumulator
//after each iteration accumulator=accumulator+currentval
//currentval=val of array elements