(function(homeController){
homeController.init=(app)=>
    {
        app.get("/",(req,res)=>{
            res.render("index",{title:"From a controller"})
        });
    };
})(module.exports);