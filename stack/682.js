function calPoints(ops) {
    let ans = 0
    let preScore = []
    for (let i = 0; i < ops.length; i++) {
        switch (ops[i]) {
            case 'C':
                ans -= preScore.pop()
                break
            case 'D':
                ans += preScore[preScore.length - 1] * 2
                preScore.push(preScore[preScore.length - 1] * 2)
                break
            case '+':
                ans += (preScore[preScore.length - 1] + preScore[preScore.length - 2])
                preScore.push(preScore[preScore.length - 1] + preScore[preScore.length - 2])
                break
            default:
                preScore.push(parseInt(ops[i]))
                ans += parseInt(ops[i])
                break
        }
    }
    return ans
}
let ops =  ["5","-2","4","C","D","9","+","+"]
calPoints(ops)