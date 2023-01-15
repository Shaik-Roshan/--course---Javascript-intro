// syntax for loop :
//******** for loop inside for loop*********

/*for(initialization; test condition ; increment or decremrnt)
{
    block of statement;
    for(initialization; test condition ; increment or decremrnt)
    {
        block of statement;
    }
}*/

for(i=0;i<3;i++){
    document.write(i+"----outer for loop---- "+"<br>")
    for(j=0;j<2;j++){
        document.write(j+"inner for loop"+"<br>")
    }

}
// output
// 0----outer for loop----
// 0inner for loop
// 1inner for loop
// 1----outer for loop----
// 0inner for loop
// 1inner for loop
// 2----outer for loop----
// 0inner for loop
// 1inner for loop


// for(a = 1; a <= 100; a = a+10){
//   for(b = a; b<a+10; b++){
//     document.write(b +" ");
//   }
//   document.write("<br>" +" ")
// }
//output
/*1 2 3 4 5 6 7 8 9 10
11 12 13 14 15 16 17 18 19 20
21 22 23 24 25 26 27 28 29 30
31 32 33 34 35 36 37 38 39 40
41 42 43 44 45 46 47 48 49 50
51 52 53 54 55 56 57 58 59 60
61 62 63 64 65 66 67 68 69 70
71 72 73 74 75 76 77 78 79 80
81 82 83 84 85 86 87 88 89 90
91 92 93 94 95 96 97 98 99 100*/
