//function with parameter
// Example_1:
function sum(a,b)
{
  document.write(a*b);
}
sum(2,3);
document.write("<br>");


// Example_2:
function Greeting(fname,lname){
document.write("hello "+ fname +" "+ lname+ " "+"how are you?")
}
Greeting("roshan","zameer");
document.write("<br>");
Greeting("mohammad","yaseen");
document.write("<br>");

Greeting("waheed","basha");
document.write("<br>");


//by default value
function sample(subject="maths",marks="99"){//if you forgot to enter value in parameters then by default it will take this values
    document.write("hey i got"+" "+marks+" in "+subject)
}
sample("telugu","89")