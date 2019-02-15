(function (controllers){

    var homeController=require("./homecontroller");
    controllers.init=(app)=>
    {
        homeController.init(app);
    };
})(module.exports);