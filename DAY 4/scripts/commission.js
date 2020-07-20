no = +prompt("Enter Your sales achived: ","3452");
if(0< no< 5000){
    g = "2%"
}else if(5000< no<10000){
    g = "5%"
}else if(10000< no < 20000){
    g = "7%"
}else if(no > 20000){
    g = "10%"
}

console.log(`Your total commission for this year is ${g}.`)
console.log(no)