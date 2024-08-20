// Palindrome Number
//Input 121 = true
//Input 10 = false
//Input -121 = false

const isPalindrome = (num) => {
  return num < 0 ? false : num === +num.toString().split("").reverse().join("");
};

const isStringPalindrome = (str) => {
  return str === str.split("").reverse().join("");
};

const isPalindromeWithoutInbuiltMethod = (string1) => {
  let left = 0;
  let right = string1.length - 1;

  while (left < right) {
    if (string1[left] !== string1[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

const isNumPalindrome = (num) => {
  let originalNum = num;
  let reverse = 0;

  while (num > 0) {
    let curr = num % 10; // Get the last digit of the number
    reverse = reverse*10 + curr
    num = Math.floor(num/10) 
  }
  console.log(reverse)
};
const num = 121;
const result = isNumPalindrome(123);

// console.log(num, `${result ? "=>is Palidrome" : "=>is not Palindrome"}`);

console.log(isPalindromeWithoutInbuiltMethod("civic"));
