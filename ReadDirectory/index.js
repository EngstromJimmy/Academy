var fs=require("fs");

fs.readdir("./",(err,files)=>console.log(files));