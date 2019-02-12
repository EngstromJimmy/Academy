const argsv=require("yargs").option("f",{
    alias:"file",
    demandOption:true,
    default:"file.json",
    describe:"The file you'd like to use",
    type:"string"
}).argv;
console.log(argsv);
