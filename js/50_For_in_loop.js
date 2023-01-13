// for in loop
// it is invented to print object

// let say we have object
var a = {
  Fname: "Roshan",
  Lname: "Zameer",
  Location: "Bangalore",
  Phone: 123456789,
  Country: "India",
};
// here to print each value we have to use print statement again and again instead of the we can also use "For in loop"

for (var i in a) {
  document.write(i + " :" + a[i] + "<br>");
}
