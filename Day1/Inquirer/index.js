const inq=require("inquirer");
inq.prompt([{
type:"list",
name:"inputHandlingReview",
message: "Node.js input handling is..",
choices:["Easy","Okay","Complicated"],
filter:val=>val.toLowerCase()
}]).then(answers=>console.log(answers));