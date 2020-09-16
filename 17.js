let phoneNumeberList = [
    ['a','b','c'],
    ['d','e','f'],
    ['g','h','i'],
    ['j','k','l'],
    ['m','n','o'],
    ['p','q','r','s'],
    ['t','u','v'],
    ['w','x','y','z']
]

function addNewEle(originArr,targetArr){
    let resultArr = []
    for(let i = 0;i<targetArr.length;i++){
        for (let j = 0;j<originArr.length;j++){
            resultArr.push(originArr[j]+targetArr[i])
        }
    }
    return resultArr
}

function letterCombinations(digits){
    if(digits.length == 0) {
        return []
    }
    let ans = ['']
    for (let i = 0;i<digits.length;i++){
        ans = addNewEle(ans,phoneNumeberList[parseInt(digits[i])-2])
    }
    console.log(ans)
    return ans
}
let test = '234'
letterCombinations(test)