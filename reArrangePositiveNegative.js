/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    
  const newArr = [];
  // let {positiveArr, negativeArr} = nums.reduce(({ positiveArr, negativeArr}, i) => {
  //     return ({
  //         positiveArr: i>0 ? positiveArr.concat(i): positiveArr,
  //         negativeArr: i<0 ? negativeArr.concat(i): negativeArr
  //     })
  // }, {positiveArr: [], negativeArr: []})
  // if (positiveArr.length > negativeArr.length) {
  //     for (let i = 0;i<negativeArr.length;i++) {
  //         nums[i*2] = positiveArr[i];
  //         nums[i*2+1] = negativeArr[i]
  //     }
  //     for (let j = negativeArr.length*2;j<nums.length;j++) {
  //         nums[j] = positiveArr[j - negativeArr.length];
  //     }
  // } else {
  //     for (let i = 0;i<positiveArr.length;i++) {
  //         nums[i*2] = positiveArr[i];
  //         nums[i*2+1] = negativeArr[i]
  //     }
  //     for (let j = positiveArr.length*2;j<nums.length;j++) {
  //         nums[j] = negativeArr[j - positiveArr.length];
  //     }
  // }
  let start = -2;
  let end = -1
  for (let i=0;i<nums.length;i++) {
      if (nums[i] > 0) {
          start+=2;
          newArr[start] = nums[i]
      } else {
          end+=2
          newArr[end] = nums[i]
      }
  }
  return newArr;
};