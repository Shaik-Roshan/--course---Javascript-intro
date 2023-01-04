// here in this if else if statement we have more conditions if any one condition is true then its statement is executed 

var Total_marks =120;
if(Total_marks>80 && Total_marks<100)
{
    document.write("your in merit.")
}
else
if(Total_marks>60 && Total_marks<80)
{
    document.write("you have done good job");
}
else
if(Total_marks>40 && Total_marks<60)
{
    document.write("you have cleared ")
}
else
if(Total_marks>35 && Total_marks<40)
{
    document.write("you can do better.");
}
else
if(Total_marks<30)
{
    document.write("better luck next time.")
}
else
{
    document.write("enter valid number")
}