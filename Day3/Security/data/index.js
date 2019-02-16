var users=require("./users");
module.exports.users=users;
module.exports.Save=()=>{
    var str = JSON.stringify(users)
        var fs=require("fs")
        fs.writeFile(__dirname +"/users.json",str,(err)=>{});
}
