let y = [1, 2, 3, 4, 5];
let z = [100, 101, 102];

let sum = 0;
let sum2 = 0;

for (let i = 0; i < y.length; i++) {
  sum += y[i];
}

sum /= y.length;

console.log(sum);

for (let i = 0; i < z.length; i++) {
  sum2 += z[i];
}

sum2 /= z.length;

console.log(sum2);
