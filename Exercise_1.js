function getNumEvenOddZeros() {
    let array = [1,2,3,4,5,6,67,0,0, '', true];
    let numZeros = 0;
    let numEven = 0;
    let numOdd = 0;
    array.forEach(function(item) {
        if(typeof item === "number"){
            if(item === 0) numZeros++;
            else if (item%2 === 0) numEven++;
            else if (item%2 === 1) numOdd++;
        }
    })
    console.log(`Количество нулей - ${numZeros}, Количество чётных чисел - ${numEven}, Количество нечётных чисел - ${numOdd}`);
}
getNumEvenOddZeros();