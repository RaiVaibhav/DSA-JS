//Find max consecutive number in an array

var findMaxConsecutiveNumber = function(nums, k) {
  let count = 0;
  let maxCount = 0;
  for (let i = 0 ;i<nums.length;i++) {
      if (nums[i] === k) {
          count++;
          (count > maxCount) && maxCount++;
      } else {
          count = 0
      }
  }
  return maxCount
};