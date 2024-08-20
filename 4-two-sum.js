// TWO SUM

// input: num = [2, 7, 11, 15], target = 9
// Output: [0, 1]

const getTwoSum = (input, target) => {
  for (let index = 0; index < input.length; index++) {
    const element = input[index];
    for (let j = 0; j < input.length; j++) {
      if (element + input[j] === target) return [index, j];
    }
  }
};

//Iterations
// {
//   "2" : 0,
//   "7" : 1,
//  "11" : "2"
//  "15" : "3"

// }

const optimizeTwoSum = (nums, target) => {
  const visited = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (visited[target - num]>=0) {
      return [visited[target-num], i];
    } else {
      visited[num] = i;
    }
  }
};

const nums = [2,11,15,7]
target = 26;
const result = optimizeTwoSum(nums, target);
console.log(result);
