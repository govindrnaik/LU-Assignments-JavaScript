let d = prompt("Enter the date and time till what you want to countdown","feb 8, 2021  5:00")
var countDownDate = new Date(d).getTime();

console.log();
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("stopwatch").innerHTML = days + "d  " + hours + "h "
  + minutes + "m  " + seconds + "s  ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("stopwatch").innerHTML = "TIMES UP";
  }
}, 1000);
