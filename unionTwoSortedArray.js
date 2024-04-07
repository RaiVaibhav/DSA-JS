//Find union of two sorted array
//There are various ways to do, it using map or
// using 2 pointers i.e., i, j
// using  pointer has better space complexity
function commonAndElement(arr1, arr2) {
  // [1, 1, 2, 3, 4, 5] [2, 3, 4, 4, 5, 6]
  let i = (j = 0);
  let union = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      const isLastUnionElementSame = arr1[i] === union[union.length - 1];
      !isLastUnionElementSame && union.push(arr1[i]);
      i++;
    } else if (arr1[i] < arr2[j] && arr1[i] !== arr2[j]) {
      const isLastUnionElementSame = arr1[i] === union[union.length - 1];
      !isLastUnionElementSame && union.push(arr1[i]);
      i++;
    } else if (arr2[j] < arr1[i] && arr1[i] !== arr2[j]) {
      const isLastUnionElementSame = arr2[j] === union[union.length - 1];
      !isLastUnionElementSame && union.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    const isLastUnionElementSame = arr1[i] === union[union.length - 1];
    !isLastUnionElementSame && union.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    const isLastUnionElementSame = arr2[j] === union[union.length - 1];
    !isLastUnionElementSame && union.push(arr2[j]);
    j++;
  }
  return union;
}

console.log(commonAndElement([2, 3, 4, 4, 5, 6], [1, 1, 2, 3, 4, 5, 7, 9]));

