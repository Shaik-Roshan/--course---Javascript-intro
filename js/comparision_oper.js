//comaprision operator is used to comapare 2 values and it will return boolean value as a result (true or false)
// comparision operators(<(less than), >(greater than), <=(lessthan and equal), >=(greaterthan and equal), ==(to check whether the value is eqal or not), )

var a=10;
var b=20;
var c=a>b;
var d=a<b;
var e=a<=b;
var f=a>=b;
var g=a==b;
var h=a===b;
var i=a!=b;
var j=a!==b;

document.write("a>b="+c);
document.write("<br>");

document.write("a<b="+d);
document.write("<br>");

document.write("a<=b="+e);
document.write("<br>");

document.write("a>=b="+f);
document.write("<br>");

document.write("a==b(it will check whether the values are equal)=>"+g);
document.write("<br>");

document.write("a===b(it will check whether the values are same and also check datatype is same)=>"+h);
document.write("<br>");

document.write("a!=b(not equal and return true if the value is not same(equal) or else false)="+i);
document.write("<br>");

document.write("a!==b(not equal and their type )="+j);
document.write("<br>");

document.write(null==undefined);//return true because null means no value and undefined also contain no value
document.write("<br>");

document.write(null===undefined);//return false because its type is not same  