name = prompt("what is your name?","Anonymous");


const h3 = document.getElementById('n');
console.log(n);

h3.innerText += `Welcome ${name}`;




const ctime = document.getElementById('time');
function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
}
setInterval(clock,1000);