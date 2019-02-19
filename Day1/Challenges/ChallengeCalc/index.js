const inquirer=require("inquirer");
const chalk=require("chalk");
const chalkAnimation=require("chalk-animation");
const argv=require("yargs")
.option("n1",{
    alias:"number1",
    demandOption:true,
    describe:"The first number you want to use",
    type:"number"
    })
    .option("n2",{
        alias:"number2",
        demandOption:true,
        describe:"The second number you want to use",
        type:"number"
        }).argv;


        const {number1,number2}=argv;

        inquirer.prompt([{
            type:"list",
            name:"operator",
             message:`What operator should you use in the two numbers ${number1} and ${number2}?`,
             choices:["Add","Subtract","Multiply","Divide"],
             filter:val=>val.toUpperCase()
        }])
        .then(({operator})=>{
        let answer;
        switch (operator)
        {
            case "ADD":
                answer=number1+number2;
            break;
            case "SUBTRACT":
                answer=number1-number2;
            break;
            case "MULTIPLY":
                answer=number1*number2;
            break;
            case "DIVIDE":
                answer=number1/number2;
            break;
            default:    
                answer=-1 ;
            break;


        }
        chalkAnimation.rainbow(`${answer}`);

        })


    