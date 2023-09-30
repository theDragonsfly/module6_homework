let a = prompt('Enter your first number'), b = prompt('Enter your second number');
a = +a;
b = +b;
let intervalId = setInterval(function() {
    if(a <= b) console.log(a);
    ++a;
}, 1000);
if(a >= b) clearInterval(intervalId);