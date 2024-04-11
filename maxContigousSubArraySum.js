// Kadane's Algorithm

var maxSubArray = function(nums) {
  let sum = 0;
  let startPointer = 0;
  let start = -1;
  let end = -1;
  let max = Number.NEGATIVE_INFINITY;
  for (let i=0;i<nums.length;i++) {
      if(sum === 0) {
          startPointer = i;
      }
      sum+=nums[i];
      if (sum > max) {
          max = sum;
          start = startPointer;
          end = i
      }
      if (sum < 0) {
          sum = 0;
      }
  }
  console.log(start, end)
  return max
};

console.log(maxSubArray([]))