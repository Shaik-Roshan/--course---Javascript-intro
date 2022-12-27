var a=["ajay","aqib","sanjay","rehman"];
var b= "roshan";
var c=22;

document.write(a+"<br>")
document.write(b+"<br>")
document.write(c+"<br>")

//to check whether it is array or not for Array
var d=Array.isArray(a);
document.write(d+"<br>")

//to check whether it is array or not for String
var e=Array.isArray(b);
document.write(e+"<br>")

//to check whether it is array or not for integer
var f=Array.isArray(c);
document.write(f+"<br>")

//we can use this method in if condition
if(Array.isArray(a)){
    document.write("yes this is Array")
}else{
    document.write("no this is not an array")
}