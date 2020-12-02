/**
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 */

var singleNumber = function(nums) {
    return nums.reduce((acc,i) =>{
        return acc^i
    },0)  
};

let nums = [2,2,1]

console.log(singleNumber(nums))