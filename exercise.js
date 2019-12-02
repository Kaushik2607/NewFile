function User(name,age,company,salary,designation){
    this.name=name;
    this.age=age;
    this.company=company;
    this.salary=salary;
    this.designation=designation;
}
let user1=new User("Manu",20,"Jsp",30000,"java developer");
console.log(user1);
 var languages=["java","python","react","node"];
languages.splice(1,2,"angular","js");
console.log(languages);
languages=["java","python","react","node"];
languages.unshift("sql");
console.log(languages);
languages.forEach(function(index,value,array)
{
    console.log(`${index}:${value}`)
})
languages.forEach(function(index,value,array)
{
    console.log(index);
    console.log(value);
    console.log(array);
})