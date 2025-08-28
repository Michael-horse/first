//array 
const arr=[1,2,3,4,5]
const arr2=new Array(1,2,3,4)
// console.log(arr.concat(arr2))

// //array methods
// //push=> to add elements
// arr.push(6)
// console.log(arr.length)
// //pop=>removes last value from an array
// arr.pop()
// console.log(arr)
// //unshift=>adds to beginning of array
// //shift=>removes element from start of array
// arr.shift();
// console.log(arr)

// //includes->checks if a particular element is present and returns boolean value
// //join=>converts arr into string 
// let newarr=arr.join()
// console.log(newarr)
console.log(arr)
let myn1=arr.slice(1,3)//displays elements at index 1 and 2
console.log(myn1);
console.log(arr)
const myn2=arr.splice(1,3)
console.log(myn2)
console.log(arr)
//slice returns elements from start to end -1 index and original array remains same
//splice returns elements from start to end and range of elememts of original array are removed