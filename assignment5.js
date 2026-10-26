
function rectangleArea(length = 5, width = 4) {
  return length * width;
}

const arrowArea = (length = 5, width = 4) =>
  length * width;

console.log(
  `Standard Function Area (Default 5x4): ${rectangleArea()}`
);

console.log(
  `Arrow Function Area (Custom 10x3): ${arrowArea(10, 3)}`
);

function scopeDemo() {
  if (true) {
    let blockVar = 10;
    console.log("Inside block:", blockVar);
  }

  try {
    console.log(blockVar);
  } catch (error) {
    console.log(
      `Scope Test Error: ${error.name}: ${error.message}`
    );
  }
}

scopeDemo();
