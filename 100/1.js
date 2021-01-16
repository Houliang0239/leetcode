/**
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
 * @param {Array} nums
 * @param {Number} target
 */


// var twoSum = function(nums, target) {
//     var i = 0,
//         len = nums.length,
//         dict = {};
//     for (; i < len; i++) {
//         var dif = target - nums[i];
//         if (dif in dict) {
//             return [dict[dif], i];
//         };
//         dict[nums[i]] = i;
//     };
// };

var twoSum = function (nums, target) {
    let current, map = {}
    for (let i = 0; i < nums.length; i++) {
        current = target - nums[i]
        if (map[current] != undefined) {
            return [map[current], i]
        } else {
            console.log(map[current])
            map[nums[i]] = i
        }
    }
}

let nums = [2, 7, 11, 15]
let target = 9

console.log(twoSum(nums, target))
