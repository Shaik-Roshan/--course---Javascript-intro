// logical operator is nothing but it is used to check more than one condition

// &&--> logical AND
// ||--> logical OR
// !--> logical Not


// example_1:
var num1=100;
var num2=200;
var num3=300;
var num4=300;
//&&--> run only if both the condition is true
if (num3&&num4==300){
    document.write("the value of num3 and num4 is same that is 300");
}

document.write("</br>")
//||-> statement run only if any of the condition is true 
if (num2||num3==300){
    document.write("num2 or num3 may contain 300");
}
document.write("</br>")
// statement run only if the is condition in not true
if (num2!=300){
    document.write("here num2 is not equal to 300");
}
document.write("</br>")

// example_2:
var age=20;
if(age>=18 && age<=50){
    document.write("your eligible for driving licence");
}
document.write("</br>")

if(age>=18 || age<=50){
    document.write("  your eligible for driving licence");
}
document.write("</br>")
if (!age<18){
    document.write("As age is not les than 18 your eligible for driving licence");
}