// Find the Majority Element that occurs more than N/2 times

function MooreVoting(arr) {
  let el;
  let count = 0;
  for (let i=0;i<arr.length;i++) {
      if (count === 0){
          el = arr[i]
      }
      if (arr[i] === el) {
          count++
      } else {
          count --;
      }
  }
  return el
}

console.log(MooreVoting([7,7,5,7,5,1,5,7,5,5,7,7,5,5,5,5]));
console.log(MooreVoting([2, 2, 3, 3, 1, 2, 2]))