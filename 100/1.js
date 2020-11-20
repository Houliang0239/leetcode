/**
* 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
* 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
* @param {Array} nums
* @param {Number} target
*/
function compare(x,y){
    return x-y
}

var twoSum = function(nums, target) {
    var i = 0,
        len = nums.length,
        dict = {};
    for (; i < len; i++) {
        var dif = target - nums[i];
        if (dif in dict) {
            return [dict[dif], i];
        };
        dict[nums[i]] = i;
    };
};

let nums = [3,3]
let target = 6

console.log(twoSum(nums,target))