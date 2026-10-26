const billInput = prompt("Enter bill amount:");
const tipInput = prompt("Enter tip percentage:");

if (
  billInput === null ||
  tipInput === null ||
  billInput.trim() === "" ||
  tipInput.trim() === ""
) {
  console.log("Invalid input. Please enter valid numbers.");
} else {
  const subtotal = Number(billInput);
  const tipPercentage = Number(tipInput);

  if (
    !Number.isFinite(subtotal) ||
    !Number.isFinite(tipPercentage) ||
    subtotal < 0 ||
    tipPercentage < 0
  ) {
    console.log("Invalid input. Enter valid non-negative numbers.");
  } else {
    const tip = (subtotal * tipPercentage) / 100;
    let total = subtotal;
    total += tip;

    console.log(`Subtotal: $${subtotal}`);
    console.log(`Tip Percentage: ${tipPercentage}%`);
    console.log(`Calculated Tip: $${tip}`);
    console.log(`Total Amount to Pay: $${total}`);
  }
}
