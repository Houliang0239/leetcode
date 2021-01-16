/**
 * 
 * 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    // 1.
    // while(k--){
    //     nums = [nums.pop()].concat(nums)
    // }

    // 2.

    nums = nums.slice(nums.length - k,nums.length).concat(nums).slice(0,nums.length)
    return nums
};

let nums = [1,2,3,4,5,6,7], k=3
console.log(rotate(nums,k))