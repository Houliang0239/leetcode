/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let ans = 0
    let length = s.length
    let box = []
    for (let i = 0;i<length;i++){
        if(box.indexOf(s[i])==-1){
            box.push(s[i])
        }else { 
            box = box.splice(box.indexOf(s[i]) ,box.length)
        }
        console.log(box)
        ans = Math.max(ans,box.length)
    }
    return ans
};

let test = 
"aabaab!bb"
console.log(lengthOfLongestSubstring(test))
