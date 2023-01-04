var fruits=["Apple","Banana","Orange"]

document.write(fruits+"<br>")//Before modify

fruits[2]="strawberry";
fruits[0]="watermelon";

document.write(fruits+"<br>")//After modify


delete fruits[1];
document.write(fruits+"<br>")//after deleting