function addnumbers(){
    var firstnumber = parseInt(document.getElementById("firstnumber").value);
    if(firstnumber==="")
    {
        alert('firstnumber is required');
        return;
    }
    var secondnumber=parseInt(document.getElementById("secondnumber").value);
    if(secondnumber===""){
        alert("secondnumber is required");
        return;
    }
    document.getElementById("result").value = firstnumber+secondnumber;
if(isNaN(firstnumber)){
    alert("please add first number")
}
if(isNaN(secondnumber))
{
    alert("please add second number")   
}
}
