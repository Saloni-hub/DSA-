// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

function maximumProfit(arr){
   let minStockPurchasePrice = arr[0] || 0;
   let maxPrice = 0
    for(let i=0;i<arr.length;i++){
       if(minStockPurchasePrice > arr[i]){
          minStockPurchasePrice = arr[i]
      }
      maxPrice = Math.max(maxPrice,arr[i] - minStockPurchasePrice)
    } 
   return maxPrice
}

let prices = [7,1,5,3,6,4]

console.log(maximumProfit(prices));
