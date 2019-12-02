var names=["Manu","Tanu","Kaby","Maybach"];
var test=names.reverse();
console.log(test);
/*var str="Hello Js";
var test1=reverse(str);
console.log(test1);*/
var num=[10,20,6,4,300,1,30,40];
var numsort=num.sort(function(a,b)
{
    return a-b;//asecending=a-b,,descending=b-a..
});
console.log(numsort);