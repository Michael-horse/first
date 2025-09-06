const obj={
    js:'javascript',
    cpp:'c++',
    rb:'ruby'
}
for(const key in obj)
{console.log(obj[key])
}
let arr=[1,2,3,4,5]
for(const i in arr) //prints index rather than elements
{
    console.log(arr[i])
}