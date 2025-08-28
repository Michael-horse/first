const he=["thor","h","hf"]
const dc=["sm","flash","batman"]
he.push(dc)
// console.log(he)//array is pushed into he
// console.log(he[3])
// const a=he.concat(dc)// 3 elements are added
// console.log(a)

//spread(...)=> converts array into individual elements 
// console.log(...he,...dc)
const another_array=[1,2,3,[4,5,6],7,8,[9,[10,11]]]
//flat=> converts subarray components into single array
console.log(another_array.flat(Infinity))
//from=> converts string to array
console.log(Array.from({name:"abc"}))//key value pairs are not stored and an empty array is returned

//of=> returns array from set of elements
const ar=[1,4,7,8,9]
console.log(Array.of(ar[0],ar[4]))
