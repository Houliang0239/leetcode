/**
 * 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    return nums.sort((a,b)=>b-a)[k-1]
};

const nums = [6,3, 2, 3, 1, 2, 4, 5, 5, 6,-1]
const k = 4

console.log(findKthLargest(nums, k))