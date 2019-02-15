const MyEvent=require("./myEvent");
const myEvent=new MyEvent();

myEvent.on("FileRead",(result)=>{
    console.log(result.fileContent);
});

myEvent.readFile();
