//this will also work as some() but in some if one test pass it will return true but here to get true every test should pass

var marks=[16,23,18,19,20];
document.write(marks+"<br>");

var result=marks.every(checkResult)
document.write(result);

function checkResult(marks){
    return marks>=18
}