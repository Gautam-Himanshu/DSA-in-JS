// Best time to buy and sell stocks
// prices[i] = price of stock in Ith day
// To maximize profit choose single day to buy and choose different day in future to sell a stock

// Input: prices = [7, 1, 5, 3, 6, 4]; ----------->>>>>>>>>>> Output: 5;
// Input: prices = [7, 6, 4, 3, 1]; ------->>>>>>> Output: 0;

// Brute Force Solution

const maxProfit = (prices) => {
  let maxPro = 0; // 4
  let lowestPrice = prices[0]; //1
  for (let i = 1; i < prices.length; i++) {
    if (lowestPrice > prices[i]) {
      lowestPrice = prices[i];
    } else {
      let currProfit = prices[i] - lowestPrice;
      maxPro = currProfit > maxPro ? currProfit : maxPro;
    }
  }
  return maxPro;
};

const prices = [7, 1, 5, 3, 6, 4];
const maximumProfit = maxProfit(prices);

console.log(maximumProfit);
