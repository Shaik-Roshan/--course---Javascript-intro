//Array of Object
var students=[
    {
        Ravi:"2nd std",
        Raju:"4th std",
        Roshan:"10th std"
    },
    {phone:123456789},
    {location:"Rariton"},

]
document.write(students+"<br>");//[object object]

document.write(typeof(students)+"<br>")//objects

for(var a=0;a<students.length;a++){
    document.write(students[a]+"<br>");
}

