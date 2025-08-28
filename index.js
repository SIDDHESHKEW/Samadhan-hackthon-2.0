// Function to find the highest marks
function findHighestMarks(marks) {
  let highest = marks[0]; // assume first element is highest

  for (let i = 1; i < marks.length; i++) {
    if (marks[i] > highest) {
      highest = marks[i]; // update if current mark is greater
    }
  }

  return highest;
}

// Example usage
let studentMarks = [78, 85, 92, 67, 99, 81];
console.log("Highest Marks:", findHighestMarks(studentMarks));
