//dates
let date=new Date()
console.log(date.toJSON())
let newdate=new Date(2022,6,23)//input in order (year , month , date , hour , minutes , seconds)
//months start from 0
console.log(newdate)
let timestamp=Date.now()
console.log(timestamp)
console.log(date.getTime())
//to get in seconds
console.log(Math.floor((date.getTime())/1000))