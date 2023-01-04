//Array_some()

// checks if any of the elementsin an Array pass test


//if any condtion pass in an array then it return true
var ages=[20,12,28,18,24,13];
document.write(ages+"<br>")

// some method wont work simply we should include function and then we should run test

var result=ages.some(checkAdult);
document.write(result);


function checkAdult(age){
    return age>=18
}



ages>=adult_age
