let number = prompt('Enter your number');
number = +number;
if(number > 1000 || number < 0) console.log("Данные неверны")
let p_numbers = [2,3,5,7,11,13,17,19,23,29,31,33]
let IsPrime = true;

for(let i = 0; i < p_numbers.length; ++i) {
    if(!number%p_numbers[i] || number === 1){
        IsPrime = false;
        break;
    }
}
console.log(IsPrime);