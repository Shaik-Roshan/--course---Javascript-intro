// Example_1:
var day = prompt("enter day of the week");

switch (day) {
  case 0:
    document.write("today is monday");
    break;
  case 1:
    document.write("today is tuesday");
    break;
  case 2:
    document.write("today is wednesday");
    break;
  case 3:
    document.write("today is Thursday");
    break;
  case 4:
    document.write("today is friday");
    break;
  case 5:
    document.write("today is saturday");
    break;
  case 6:
    document.write("today is sunday");
    break;

  default:
    document.write("enter the valid week day");
    break;
}
document.write("<br>")

// example_2:

var marks = prompt("enter your marks");
switch (true) {
  case (marks >= 35 && marks <= 50):
    document.write("your in top 40 list");
    break;

  case (marks >= 51 && marks <= 70):
    document.write("your in top 20 list");
    break;

  case (marks >= 71 && marks <= 92):
    document.write("your in top 10 list");
    break;

  default:
    document.write("enter valid marks ");
    break;
}
