const user={
    name:"hds",
    wallet:12,
    welcomemsg: function(){
        console.log(`${this.name}, welcome to website`)
    }
}

user.welcomemsg()
user.name="sfj"
user.welcomemsg()
// console.log(this)//returns null object as this does not refer to any onject in node