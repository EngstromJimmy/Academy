const fs=require("fs");
const result=fs.readdirSync(__dirname);
console.log(result);

const fileContent=fs.readFile(__dirname + "/index.js",'utf8',(err,content)=>{
    console.log(content);
});