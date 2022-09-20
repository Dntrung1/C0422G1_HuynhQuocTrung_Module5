function isPrime(n) {
    var isPrime = true;
    if (n < 2) {
        isPrime = false;
    }
    else if (n > 2) {
        for (var i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                isPrime = false;
                break;
            }
        }
    }
    return isPrime;
}
var arr = [1, 5, 9, 2, 6, 15, 19, 35, 51, 53];
var sum = 0;
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var n = arr_1[_i];
    if (isPrime(n)) {
        sum += n;
        console.log(n);
    }
}
console.log("Tổng : " + sum);
