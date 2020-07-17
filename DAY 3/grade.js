no = prompt("Enter Your marks from 100:");
if(100>=no>= 80){
    g = "A"
}else if(80>no>= 60){
    g = "B"
}else if(60>no>= 40){
    g = "C"
}else if(40>no>= 20){
    g = "D"
}
else if(20>no> 0){
    g = "E"
}
else{
    g = "null"
}


console.log(`Your Marks are ${no} And your grade is ${g}.`)