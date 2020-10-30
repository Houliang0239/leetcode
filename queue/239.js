/**
给定一个数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。
你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。

返回滑动窗口中的最大值。

*/
let nums = [1,3,-1,-3,5,3,6,7]
let k = 3
var maxSlidingWindow = function(nums, k) {
    let ans = - Infinity
    let index = 0
    for (let i = 0 ;i<k;i++){
        if(nums[i]>=ans){
            index = ans 
            
        }
    }
    for (let i = 0; i < nums.length ;i++){

    }
    return ans 
}(nums,k);
console.log(maxSlidingWindow)