let n = 5;

let sum = 0

for (let i = n; i <= 2 * n; i +=n) {
  sum += i ** n;
}

console.log(sum);