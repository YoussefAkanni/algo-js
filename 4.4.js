function pickLearner(inputAr, n) {
  return inputAr[n];
}

let arr = [
  "kevin",
  "léon",
  "hanna",
  "aubry",
  "dylan",
  "mohammad",
  "esteban",
  "shanon",
  "martin",
  "youssef",
  "victor",
];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

let a = getRandomInt(0, arr.length);

console.log(pickLearner(arr, a));
