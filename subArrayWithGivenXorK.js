//Count the number of subarrays with given xor K

function subArrayWithGivenXorK(A, B){
  const mMap = new Map([[0, 1]]);
  let count = 0
  let sum = 0;
  for (let i = 0;i<A.length;i++) {
      sum^= A[i];
      let left = B^sum
      if (mMap.has(left)) {
          count += mMap.get(left)
      }
      if (mMap.has(sum)) {
          mMap.set(sum, mMap.get(sum) + 1)
      } else  {
          mMap.set(sum, 1)
      }
  }
  return count;
}

console.log(subArrayWithGivenXorK([4, 2, 2, 6, 4]))