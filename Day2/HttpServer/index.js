const http=require("http");
const fs=require("fs");
const port=8080;

const server=http.createServer(
    (req,res)=>{

        console.log(req.url);
        switch(req.url)
        {
            case "/test":
                res.end("Hello Academy");
            break;  
            case "/test2":
                res.end("Hello Academy2");
            break;
            case "/image":
                fs.readFile(__dirname + "/helloacademy.png",
                (err,data)=>{
                    res.setHeader("content-type","image/png");
                    res.end(data);
                });
                break;
            default:
                res.statusCode=404;
                res.end();
        }
              
    }
);

server.listen(port,err=>{
    if(err){
        console.log(err);   
    }
    console.log("Server is listening");
})