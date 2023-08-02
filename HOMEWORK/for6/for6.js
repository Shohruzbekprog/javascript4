let n = 2;
let sum = 0;
let mul = 1;

for (let i = 1; i <= n; i++) {
  sum += i;
  mul *= i;
}
console.log(mul);