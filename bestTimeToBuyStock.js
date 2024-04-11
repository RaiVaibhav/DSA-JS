// Kadane's Algorithm
var maxProfit = function(prices) {
  let startPointer = 0;
  let max = 0;
  let start = -1;
  let end = -1;
  for (let i=1;i<prices.length;i++) {
      const diff = prices[i] - prices[startPointer];
      if (diff<0) {
          startPointer = i;
      }
      if (diff > max) {
          max = diff;
          start = startPointer;
          end = i
      }
  }
  console.log(start, end)
  return max
};