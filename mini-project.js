
"use strict";

console.log("--- Initializing Inventory System ---");

const inventory = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 }
];

function getCategory(price) {
  let category;

  if (price < 50) {
    category = "Budget";
  } else if (price < 200) {
    category = "Standard";
  } else {
    category = "Premium";
  }

  switch (category) {
    case "Budget":
      return "Budget";
    case "Standard":
      return "Standard";
    case "Premium":
      return "Premium";
    default:
      return "Unknown";
  }
}

const productNameInput = prompt("Enter new product name:");
const productPriceInput = prompt("Enter product price:");

if (
  productNameInput === null ||
  productPriceInput === null ||
  productNameInput.trim() === "" ||
  productPriceInput.trim() === ""
) {
  console.log("Product not added: missing input.");
} else {
  const productName = productNameInput.trim();
  const productPrice = Number(productPriceInput);

  if (!Number.isFinite(productPrice) || productPrice <= 0) {
    console.log("Product not added: enter a valid positive price.");
  } else {
    inventory.push({
      name: productName,
      price: productPrice
    });

    console.log(
      `[Prompt executed: User adds "${productName}" at "$${productPrice}"]`
    );
  }
}

function calculateTotal(items) {
  let total = 0;

  for (const item of items) {
    if (!Number.isFinite(item.price) || item.price <= 0) {
      continue;
    }

    total += item.price;
  }

  return total;
}

function calculateFinalPrice(price, taxRate = 0, discountRate = 0) {
  const tax = (price * taxRate) / 100;
  const discount = (price * discountRate) / 100;

  return price + tax - discount;
}

console.log("\n--- Processing Inventory Roster (forEach) ---");

inventory.forEach((item) => {
  console.log(
    `* Item: ${item.name} ($${item.price}) -> Category: ${getCategory(item.price)}`
  );
});

const searchName = "Monitor";
let foundProduct = null;

for (const item of inventory) {
  if (!item.name) continue;

  if (item.name.toLowerCase() === searchName.toLowerCase()) {
    foundProduct = item;
    break;
  }
}

if (foundProduct) {
  console.log(`Search Result: ${foundProduct.name} found.`);
} else {
  console.log(`Search Result: ${searchName} not found.`);
}

console.log("\n--- Financial Analytics ---");

const totalValue = calculateTotal(inventory);
console.log(`Total Inventory Value: $${totalValue}`);

const affordableProducts = inventory.filter(
  (item) => item.price < 200
);

console.log(
  "Filtered Affordable Items (Under $200):",
  JSON.stringify(affordableProducts.map((item) => item.name))
);

const formattedReport = inventory.map(
  (item) => `${item.name.toUpperCase()}: $${item.price}`
);

console.log("Formatted Report List:", JSON.stringify(formattedReport));

const examplePrice = 100;
const finalPrice = calculateFinalPrice(examplePrice, 10, 5);

console.log(
  `Example Final Price ($100, 10% tax, 5% discount): $${finalPrice}`
);
