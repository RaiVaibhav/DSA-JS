function quickSort(arr) {
  if (arr.length === 0) {
    return arr;
  }
  const pivot = arr[0];
  const leftArr = [];
  const rightArr = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  return quickSort(leftArr).concat([pivot], quickSort(rightArr))
}

const testArr = [5,89,0,4,2,7,89,0,4,5,6,3,4,9,8]
console.log(quickSort(testArr));
