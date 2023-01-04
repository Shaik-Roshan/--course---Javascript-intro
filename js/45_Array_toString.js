// Array_tostring

const array1 = [1, 2, 'a', '1a'];

document.write(array1.toString()+"<br>");
// expected output: "1,2,a,1a"

//Array -toString() Function:

var a=["sanjay","Aman","Rehman"];

document.write(a+"<br>");
var b=a.toString();

document.write(b+"<br>");

document.write(typeof(a)+"<br>");//object
document.write(typeof(b)+"<br>");//string



//Array -valueOf() Function:
var friends =["roshan","zameer","shaik"];
document.write(friends+"<br>");//roshan,zameer,shaik
friends.valueOf();

document.write(friends+"<br>");//roshan,zameer,shaik it return just same as document.write()


//Array -fill() Function:
var subjects=["English","maths","science"];
document.write(subjects+"<br>");

subjects.fill("commerce");
document.write(subjects+"<br>");
