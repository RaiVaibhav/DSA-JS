function merge(arr1, arr2) {
  let rArr = [],
    l = 0,
    r = 0;
  while (l < arr1.length && r < arr2.length) {
    if (arr1[l] < arr2[r]) {
      rArr.push(arr1[l]);
      l++;
    } else {
      rArr.push(arr2[r]);
      r++;
    }
  }

  return rArr.concat(arr1.slice(l)).concat(arr2.slice(r));
}
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const middle = Math.floor((arr.length + 1) / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle, arr.length);
  return merge(mergeSort(left), mergeSort(right));
}
