//Array_find()

var age=[10,23,19,20]
document.write(age+"<br>");

var result=age.find(checkAdult);
document.write(result+"<br>")

function checkAdult(age){
    return age>=20;
}

