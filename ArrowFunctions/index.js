//Old Way
function myOldFunction (){
    console.log("Hello Academy");
}

//Arrow function
()=>{
    console.log("Hello Academy");
}

//Only one param (zero or more than 1 require parenthesis)
const myFunction = param=>param*2;

console.log (myFunction(1));

const people =[
    {name:'Clark Kent',age:40},
    {name:'Bruce Wayne',age:42},
    {name:'Barry Allen',age:43}
];


//Map
const ages=people.map(function(person){
    return person.age;
});
console.log(ages);
const newages=people.map(person=>person.age);
console.log(newages);
