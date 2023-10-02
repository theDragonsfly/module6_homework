function betweenAandB(a, b) {
  const intervalId = setInterval(function() {
    if(a <= b) console.log(a);
    ++a;
  }, 1000);
  if(a >= b) clearInterval(intervalId);
}

let a = 5, b = 15;
betweenAandB(a,b);
