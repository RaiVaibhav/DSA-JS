// Two Sum : Check if a pair with given sum exists in Array

// O(N) + O(NlogN)
// Space - O(N) for sorting



function TwoSum(arr, k) {
  const newArr = arr.sort((a,b) => a-b);
  let i = 0;
  let j = arr.length - 1;
  let sum = 0;
  while(i<j) {
      sum = arr[i] + arr[j];
      
      if ((sum === k)) {
          break;
      }
      if (sum > k){
          j--;
      } else {
          i++
      }
  };
  if (j === i) {
      return [-1, -1]
  } 
  return [i, j]
}
console.log(TwoSum([2, 5, 6, 8, 11], 0))
