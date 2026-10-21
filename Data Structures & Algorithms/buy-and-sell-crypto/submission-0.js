class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = Infinity
        let maxProfit = 0;

        for (let i=0; i<prices.length; i++) {
            // update minPrice if we find lower price
            if (prices[i] < minPrice) {
                minPrice = prices[i];
            } else {
                // calculate potential profit and update max profit
                let profit = prices[i] - minPrice
                maxProfit = Math.max(maxProfit, profit)
            }
        }

        return maxProfit;
    }
}
