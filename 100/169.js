/**
 * 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
 *你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 */

 /**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let obj = {}
    let ans = 0
    for (let i = 0; i<nums.length;i++){
        if(nums[i] in obj){
            obj[nums[i]] ++
        }else {
            obj[nums[i]] = 1
        }
    }
    for (item in obj){
        console.log(item,obj[item])
        if(obj[item] > nums.length/2){
            ans = parseInt(item)
        }
    }
    return ans
};

let nums = [10,9,9,9,10]
console.log(majorityElement(nums))