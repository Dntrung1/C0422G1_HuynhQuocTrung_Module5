let arr = [0,1]
let x = 0;
let y = 1;
let fibo = 1;
while (fibo<100){
    arr.push(fibo);
    x = y;
    y = fibo;
    fibo = x + y;
}

let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(arr);
console.log(sum);
