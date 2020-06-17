var maxProfit = function(prices) {
    //i:array of numbers 
    //o:number of most profit
    //c:
    //e:
    
    var result = 0;
    
    
    for (var i = 0; i < prices.length; i++) {
        for (var j = i + 1; j < prices.length; j++) {
            if (prices[i] < prices[j] && prices[j]-prices[i] > result) {
                result = prices[j]-prices[i]
            }
        }
    }
    
    return result
};