//Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k,
// and j != k, and nums[i] + nums[j] + nums[k] == 0
function ThreeSumProblem(nums) {
  nums.sort((a, b) => (a - b));
  let prevI;
  let prevJ;
  let prevK;
  let newArr = []
  for (let z = 0;z<nums.length;z++) {
      let i = z;
      let j = z + 1;
      let k = nums.length - 1;
      if (!(i>0 && nums[i] === prevI)) {
          while (j<k) {
              let sum = nums[i] + nums[j] + nums[k];
              if (sum === 0) {
                  newArr.push([nums[i], nums[j], nums[k]]);
                  prevJ = nums[j];
                  j++
                  while (nums[j] === prevJ) {
                      prevJ = nums[j]
                      j++
                  }
                  prevK = nums[k];
                  k--
                  while (nums[k] === prevK) {
                      prevK = nums[k]
                      k--;
                  }
              }
              if (sum < 0) {
                  prevJ = nums[j];
                  j++;
                  while (nums[j] === prevJ) {
                      prevJ = nums[j]
                      j++
                  }
              }
              if (sum > 0) {
                  prevK = nums[k];
                  k--
                  while (nums[k] === prevK) {
                      prevK = nums[k]
                      k--
                  }
              }
          }
      }
      prevI = nums[i];
      prevJ = nums[j];
      prevK = nums[k];
  }
  return newArr;
};