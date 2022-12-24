var friends=["yaseen","panda","Fazil","Roy"]
document.write(friends+"<br>");//before shift and unshift

//output
//yaseen,panda,Fazil,Roy


friends.shift();
document.write(friends+"<br>");//after shift

// output
// panda,Fazil,Roy

friends.unshift("Tousif")
document.write(friends+"<br>")//after unshift

// output
// Tousif,panda,Fazil,Roy