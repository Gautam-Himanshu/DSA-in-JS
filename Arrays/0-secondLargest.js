// Function to find the second largest number in an array
const secondLargest = (arr) => {
    // Check if array has at least two unique elements
    if (arr.length < 2) return null;
  
    // Initialize variables to track the largest and second largest numbers
    let largest = -Infinity;
    let secondLargest = -Infinity;
  
    // Iterate through the array to find the largest and second largest numbers
    arr.forEach((element) => {
      if (element > largest) {
        secondLargest = largest;
        largest = element;
      } else if (element > secondLargest && element !== largest) {
        secondLargest = element;
      }
    });
  
    // Return the second largest number
    return secondLargest;
  };
  
  // Example usage
  const input1 = [12, 35, 1, 10, 34, 1, 35];
  const result = secondLargest([input1]);
  console.log(result); // Output: 34
  