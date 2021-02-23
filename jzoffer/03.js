/**
 * @param {number[]} nums
 * @return {number}
 */

function compare(a,b){
    return a-b
}

var findRepeatNumber = function(nums) {
    nums = nums.sort(compare)
    for (let i = 0;i<nums.length-1;i++){
        if(nums[i] === nums[i+1]){
            return nums[i]
        }
    }
};

let nums = [2, 3, 1, 0, 2, 5, 3]

console.log(findRepeatNumber(nums))