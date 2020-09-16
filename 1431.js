function kidsWithCandies(candies, extraCandies) {
    let max = 0;
    let ans = []
    candies.forEach(candy => {
        if (candy > max) {
            max = candy
        }
    });
    candies.forEach(candy => {
        if (max - candy <= extraCandies) {
            ans.push(true)
        } else {
            ans.push(false)
        }
    })
    return ans
}
kidsWithCandies([2, 3, 5, 1, 3], 3)