// break will not allow the further iteration where continue only skip the selected condition and continue till end
for(a=1;a<=10;a++){
    if(a==3){
        document.write("hey this is number :3"+"<br>");
        continue;//if it is continue except this condition where a==3 remaining statement is printed
        break;//if it is break then it check condition if condition is true immediately it stop iteration
    }
    document.write("number :"+a+"<br>");
}