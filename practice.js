/*var languages=["java","java","java","Python","Python"]

var testresult=languages.filter(function(value,index,array){
    return array.indexOf(value)===index;
});
console.log(testresult);
var num=[1,5,3,80,32,60,109,4001,1001]
var result=num.filter(x=>x>50);
console.log(result);*/
var names=["Anu","Anu","Manu","shashi","manu"]
var[...es6waytoRemoveDuplicates]=new Set(names)
console.log(es6waytoRemoveDuplicates)
var names=["Anu","Anu","Manu","shashi","manu"]
var duplicates=[];
for(var i=0;i<names.length;i++)
{
    if(names.indexOf(names[i]==-1)){
        duplicates.push(names[i])
    }
}
console.log(es6waytoRemoveDuplicates)
var num=[10,20,50,60,700,550,660,800]
var test=num.reduce((a,b)=>{
    console.log(a)
    console.log(b)
    return a+b;
})
console.log(test)
var numbers=[10,40,400,600,30,50,43,600,200];
var lang=["jee","angular","react","node","aws"];
var test=lang.fill("Java");
console.log(lang);
console.log(test);
var numbers=[10,40,400,600,30,50,43,600,200];
for(let x of numbers)
{
    console.log(x)
}
var users=["sashi","manu","tanu"]
for(let x of users)
{
    console.log(x);
}
var name="shashi"
for(let x of name)
{
    console.log(x)
}
var lang=["jee","angular","node","react"]
var keys=lang.keys();
var values=lang.values();
for(let key of keys){
    console.log(key);
}
for(let value of values)
{
    console.log(value)
}