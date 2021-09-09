// This function return a random number below (a)
function rand10(a) {
  return Math.floor(Math.random() * a);
}

let n = rand10("11");
console.log(n);
let arr = [];

function multiRand(n) {
  for (let i = 0; i < n; i++) {
    arr += n;
  }
}

console.log(arr);
