let a = [1, 2, 3, 4]

function runningSum(nums) {
    let ans = []
    nums.reduce((accumulator, currentValue) => {
        ans.push(accumulator)
        return accumulator + currentValue
    })
    ans.push(ans[ans.length - 1] + nums[nums.length - 1])
    return ans
}
runningSum(a)