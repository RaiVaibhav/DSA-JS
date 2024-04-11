// Two Sum : Check if a pair with given sum exists in Array

// O(N) + O(NlogN)
// Space - O(N) for sorting



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let i = 0;
    let j = nums.length - 1;
    let sum = 0;
    nums = nums.map((i, index) => ({
        val: i,
        index,
    }))
    let first = 0;
    let second = 0;
    nums.sort((a, b) => a.val - b.val)
    while(i<j) {
        sum = nums[i].val + nums[j].val;
        
        if ((sum === target)) {
            first = nums[i].index;
            second = nums[j].index;
            break;
        }
        if (sum > target){
            j--;
        } else {
            i++
        }
    };
    if (j === i) {
        return [-1, -1]
    } 
    return [first, second]
};
