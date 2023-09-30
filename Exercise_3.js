function callFunc(first) {
    return function(second) {
        return first + second;
    }
}

let resFunc = callFunc(123);
console.log(resFunc(1234));