let favNumber;

while (true) {
  favNumber = prompt("What is your favorite number ? ");
  if (favNumber == 42) {
    break;
  }
  alert("Are you sure");
}
alert("correct answer!");
