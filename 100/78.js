/**
 * 返回给定数组的所有子集
 * 回溯
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function a(nums, ans) {
    // console.log(nums)
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        console.log(arr)
        arr.push(nums[i])
        ans.push(arr)
    }
}

var subsets = function (nums) {
    let ans = [
        []
    ]
    for (let i = 0; i < nums.length; i++) {
        a(nums.slice(i,nums.length), ans)
    }
    return ans
};

let nums = [1, 2, 3]

console.log(subsets(nums))