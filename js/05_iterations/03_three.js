//for of

const arr=[1,2,3,4,5]

// for (const i of arr) {
//     console.log(i)
// }
// const s="hello world"
// for(const i of s)
// {
//     console.log(i)
// }

const map=new Map();//object
//map is non iterable
//map store only unique values
map.set('IN','INDIA')
map.set('fr','france')
map.set('IN','INDIAA')
for(const [key,value] of map)
{
    console.log(value)
}

const ob={
    game1:'spider',
    game2:'tlou'
}

// for(const j of ob) objects are non iterable
// {
//     console.log(j)
// }