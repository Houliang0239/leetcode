function pivotIndex(nums) {
    let sum = 0
    let ansSum = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }
    if(sum - nums[0] == 0) return 0
    else if(sum - nums[nums.lenght-1]==0) return nums.length -1
    for (let i = 1; i < nums.length; i++) {
        ansSum += nums[i-1]
        if (ansSum == (sum-nums[i]) / 2) {
            return i
        }
    }
    return -1
}
let nums = [-1,-1,-1,0,1,1]
let ans = pivotIndex(nums)
console.log(ans)