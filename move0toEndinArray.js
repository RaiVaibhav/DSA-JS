function moveAllZeroToEnd(arr) {
  let i = null;
  let j = null;
  for(let k = 0;k<arr.length;k++) {
    if(!j && arr[k] === 0) {
      j = k;
      i = j + 1;
    }
  }
  while (i < arr.length) {
    const ithVal = arr[i];
    const jthVal = arr[j];
    if (ithVal !== 0) {
      arr[j] = ithVal;
      arr[i] = jthVal;
      j++
    } 
    i++
  }
  return arr;
}
console.log(moveAllZeroToEnd([2, 0, 1, 0, 0, 4, 5, 6]))