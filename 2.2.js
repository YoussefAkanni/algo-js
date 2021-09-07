let min = prompt("Enter a min number");
let max = prompt("Enter a max number");
let current = prompt("Enter a last number");

if (current > min && current < max) {
  document.write(current);
} else if (min > max) {
  alert("you don't understand anything");
}
