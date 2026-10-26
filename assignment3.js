
const score = 85;
let grade;

if (score < 0 || score > 100) {
  console.log("Invalid score");
} else {
  if (score >= 90) {
    grade = "A";
  } else if (score >= 80) {
    grade = "B";
  } else if (score >= 70) {
    grade = "C";
  } else if (score >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }

  switch (grade) {
    case "A":
      console.log("Excellent");
      break;
    case "B":
      console.log("Very Good");
      break;
    case "C":
      console.log("Good");
      break;
    case "D":
      console.log("Needs Improvement");
      break;
    default:
      console.log("Failing Grade");
  }

  const status = score >= 40 ? "Passed" : "Failed";

  console.log(`Score: ${score}`);
  console.log(`Grade: ${grade}`);
  console.log(`Status: ${status}`);
}
