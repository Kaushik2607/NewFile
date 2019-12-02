/*function Username(name,age,company,salary){
    console.log(`
    my name is ${name} and my age is ${age} i work 
    for ${company} and i earn ${salary}
    `);
}
Username("Shahsi",30,"Jspiders",300000)*/
/*function addNumbers(a,b)
{
    var c=a+b;
    return c;
}
console.log(addNumbers(3,5));*/
/*function numbers(num)
{
    if(num===undefined){
    num=10;}
console.log(num);
}
numberswithES5()*/
/*function names(){
    var[...names]=arguments;
    names.forEach(function(name){
    console.log(name);
    });
}
names("Shashi","Manu","Dhanu","Kanu");*/
/*username();
function username(){
    console.log("My name is Kaby");
}*/
/*company();
var company=function(){
    console.log("My company is Qsp ")
}*/
/*var x="hello x";
function show(){
    var innerBlock="hello inner block";
    console.log(innerBlock);
    function innerBlock(){
        var innerText="hello innerText";
    }
}*/
/*var x="hello x";
function show(){
    var outerText="Hello outerText";
    function innerBlock(){
        var innerText="Hello innerText";
        console.log(innerText);
        console.log(outerText);
        console.log(X);
    }
  innerBlock();
}*/
/*function test(){}
*/
/*var usernamewithES6=()=>{
    console.log("hello");

};
usernamewithES6();*/
/*var usernamewithES6=name=>name;
console.log(us               ernamewithES6("Shashi"));
*/
var user={
    name:"Manu",
    age:20,
    company:"L&T",
    salary:25000,
    userinfo:()=>{
        console.log(`name $(user.name) $(user.age) $(user.company) $(user.salary)`)
    }
    user.userinfo();
}