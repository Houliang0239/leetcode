function minAddToMakeValid(s) {
    let ans = 0
    let left = 0
    for (let i = 0; i < s.length; i++) {
        if(s[i]=="("){
            left ++
        }else {
            if(left > 0 ){
                left -- 
            }
            else {
                ans++
            }
        }
    }
    ans +=left
    return ans
}
let s = "()))(("

minAddToMakeValid(s)