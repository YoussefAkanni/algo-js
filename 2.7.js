let n = prompt("Enter a number");

let sum = 0;

for (let i = 0; i < n; i++) {
  let number = prompt("Enter another number");
  sum += parseInt(number);
}

console.log(sum);
