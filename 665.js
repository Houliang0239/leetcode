function checkPossibility(nums) {
    let num = 0
    if (nums.length < 3) return true
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] > nums[i]) {
            big = nums[i]
            num++
            if (num > 1) return false
            if (nums[i - 2] > nums[i]) {
                nums[i] = nums[i - 1]
            } else {
                nums[i] = nums[i]
            }
        }
    }
    return true
}
let nums = [1,4,1,2]
console.log(checkPossibility(nums))