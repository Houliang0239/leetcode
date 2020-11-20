/**
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * @param {Array} nums
 */


var moveZeroes = function (nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            nums.splice(i, 1);
            nums.push(0);
            i = i - 1;
            count++;
        }
        if(count == nums.length - i) break
    }
    return nums
};
let nums = [0,1,0,3,12]
console.log(moveZeroes(nums))