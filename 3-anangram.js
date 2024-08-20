// Valid Anagram

// Input: (s = "anagram"), (t = "nagaram"); ----------->>>>>>>>>> output: true;
// Input: (s = "rat"), (t = "car"); ----------->>>>>>>>>>> output: false;

// const isAnagram = (string1, string2) => {
//   if (string1.length !== string2.length) return false;
//   else {
//     let counter = {};
//     for (let letter of string1) {
//       counter[letter] = (counter[letter] || 0) + 1;
//     }
//     for (let item of string2) {
//       if (!counter[item]) {
//         return false;
//       } else {
//         counter[item] -= 1;
//       }
//     }

//     return true;
//   }
// };

const isAnagramPracticed = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  else {
    const counter = {};
    for (char of str1) {
      counter[char] = (counter[char] || 0) + 1;
    }
    for (char of str2) {
      if (!counter[char]) return false;
      else counter[char]--;
    }
  }
  return true;
};

console.log(isAnagramPracticed("carfuck", "cakrfcu"));
console.log(isAnagramPracticed("rat", "tar"));
