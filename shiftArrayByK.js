function rotateByOneK(arr, k) {
  //Time - O(n)
  //Space - On(n)
  const left = [];
  const right = [];
  
  for (let i=0;i<k;i++){
    right.push(arr[i])
  }
  for (let j=k;j<arr.length;j++){
    left.push(arr[j])
  }
  return left.concat(right)
}

function reverse(arr, start, end) {
  
  const middle = Math.floor((end +start)/2);
  for (let i = start;i<=middle;i++) {
    const lIndex = ((end-i) + start)
    const a = arr[i];
    const b = arr[lIndex]
    arr[i] = b;
    arr[lIndex] = a;
  }
}
function rotateByTwoK(arr, k) {
  // Time - O(n)
  // Space - O(1)
  const arrL = arr.length;
  reverse(arr, 0, k-1);
  reverse(arr, k, arrL-1);
  reverse(arr, 0, arrL - 1);
  return arr;
}
console.log(rotateByTwoK([4,9,2,8,0,4,5,7,3], 4));