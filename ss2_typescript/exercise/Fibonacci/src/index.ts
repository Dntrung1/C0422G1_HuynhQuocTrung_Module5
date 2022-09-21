// happy coding 👻
function f(n: number) : number {
    if (n==0)return 0;
    if (n==1 || n == 2)return 1;
    return f(n-1) + f(n-2);
}

let sum = 0;
for (let i = 0; i < 10  ; i++) {
    sum+=f(i);
}
console.log(sum);