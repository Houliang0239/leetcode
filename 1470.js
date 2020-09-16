function shuffle(nums,n){
    let ans = []
    for(let i = 0;i<n;i++){
        ans.push(nums[i])
        ans.push(nums[n+i])
    }
    return ans
}
let nums = [2,5,1,3,4,7]
let n = 3
shuffle(nums,n)