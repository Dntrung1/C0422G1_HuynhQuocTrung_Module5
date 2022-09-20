function isPrime(n: number) : boolean {
    let isPrime = true;
    if (n < 2){
        isPrime = false;
    }else if (n > 2){
        for (let i = 2; i <= Math.sqrt(n) ; i++) {
            if (n % i == 0){
                isPrime = false;
                break;
            }
        }
    }
    return isPrime;
}

let arr = [1, 5, 9, 2, 6, 15, 19, 35, 51, 53];
let sum = 0;
for(let n of arr){
    if (isPrime(n)){
        sum += n;
        console.log("Số nguyên tố trong mảng" + n)
    }
}
console.log("Tổng : " + sum);