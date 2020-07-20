opr = prompt("write which opration you want to perform from following: \n addition ,division, subtraction, multiplication, square root, percentage ","addition")
arg = prompt("Enter two numbers with space in between","5 5").split(" ")


function calc(opr, arg){
    let a = +arg[0];
    let b = +arg[1]; 
    if(opr ="addition")              return a+b
    else if(opr ="subtraction")      return a-b ;
    else if(opr ="multiplication")   return a*b;
    else if(opr ="division")         return a/b ;
    else if(opr ="square root")      return math.sqrt(a) ;
    else if(opr ="percentage")       return (a/b)*100;
}
result =calc(opr, arg);
console.log(result);
