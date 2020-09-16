function numIdenticalPairs(nums) {
    let ans = 0;

    let button = []
    nums.forEach(num => {
        if (button[num] == undefined) {
            button[num] = 1;
        } else {
            button[num]++;
        }
    })
    button.forEach(item => {
        if (item != undefined) {
            ans += item * (item - 1) / 2
        }
    })
    // console.log(ans)
    return ans
}
numIdenticalPairs([1, 2, 3, 1, 1, 3])