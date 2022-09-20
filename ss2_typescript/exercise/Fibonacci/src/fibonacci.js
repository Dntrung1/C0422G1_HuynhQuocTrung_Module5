var arr = [0, 1];
var x = 0;
var y = 1;
var fibo = 1;
while (fibo < 100) {
    arr.push(fibo);
    x = y;
    y = fibo;
    fibo = x + y;
}
var sum = 0;
for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(arr);
console.log(sum);
