// Ques 2 - Rotate Array by K
// Given an integer array nums, rotate the array to the right by k steps,
// where k is non - negative.
// Input: nums = [1,2, 3, 4,5, 6,7], k = 3  ---->>>›> Output: [5,6,7, 1,2,3,4]
// Input: nums = [-1, -100, 3, 99], k = 2  ---->>>>> Output: [3,99, -1, -100]

// function rotateArray(arr, k) {
//   for (let index = 0; index < k; index++) {
//     arr.unshift(arr[arr.length - 1]);
//     arr.pop();
//   }
//   return arr;
// }

// // without inbuilt method

// const reverse = (arr, left, right) => {
//   while (left < right) {
//     const temp = arr[left];
//     arr[left] = arr[right];
//     arr[right] = temp;
//     left++;
//     right--;
//   }
//   return arr;
// };

// const optimizedRotate = (nums, k) => {
//   k = k % nums.length;
//   reverse(nums, 0, nums.length - 1); //[7, 6, 5, 4, 3, 2, 1]
//   reverse(nums, 0, k - 1); //[5, 6, 7, 4, 3, 2, 1]
//   reverse(nums, k, nums.length - 1);
//   return nums;
// };

const reverseArray = (start, end) => {
  while (start < end) {
    temp = nums[start]; // 7
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
};

const optimizedRotate = (nums, k) => {
  reverseArray(0, nums.length - 1); // [7, 6, 5, 4, 3, 2, 1]
  reverseArray(0, k - 1); // [5, 6, 7, 4, 3, 2, 1]
  reverseArray(k, nums.length - 1); // [5, 6, 7, 1, 2, 3, 4]

  return nums;
};

nums = [1, 2, 3, 4, 5, 6, 7]; // Output: [5, 6, 7, 1, 2, 3, 4]
k = 3;

const rotatedArray = optimizedRotate(nums, k);
console.log(rotatedArray);
