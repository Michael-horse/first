//explicit declaration of number data type
const a=new Number(57.6566);
console.log(a)
console.log(a.toString())
console.log(a.toFixed(3))
const h=1000000000000000000
console.log(h.toLocaleString('en-IN'))
console.log(a.toPrecision(3))//returns string rounded off to nearest sig digit

//math.random func
/*
Range=Math.floor((Math.random()*(max-min+1))+min)
*/