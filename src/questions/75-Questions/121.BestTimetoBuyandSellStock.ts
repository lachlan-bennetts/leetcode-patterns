function findMaxProfit(prices: number[]): number {
  if (prices.length === 0) return 0;

  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
      continue;
    }
    maxProfit =
      prices[i] - minPrice > maxProfit ? prices[i] - minPrice : maxProfit;
  }

  return maxProfit;
}
