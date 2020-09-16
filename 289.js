let origin = [
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0]
]
let answer = origin
console.log(99 ** 3)

function check(type, num) {
    if (type) {
        switch (num) {
            case 0:
            case 1:
                return 0;
            case 2:
            case 3:
                return 1;
        }
        if (num > 3) {
            return 0;
        }
    } else {
        if (num == 3) {
            return 1
        }
    }
}

function rules(ruleIndex, i, j) {
    switch (ruleIndex) {
        case 1:
            if (origin[i - 1][j - 1]) return origin[i - 1][j - 1];
        case 2:
            if (origin[i - 1][j]) return origin[i - 1][j];
        case 3:
            if (origin[i - 1][j + 1]) return origin[i - 1][j + 1];
        case 4:
            if (origin[i][j - 1]) return origin[i][j - 1];
        case 6:
            if (origin[i][j + 1]) return origin[i][j + 1];
        case 7:
            if (origin[i + 1][j - 1]) return origin[i + 1][j - 1];
        case 8:
            if (origin[i + 1][j]) return origin[i + 1][j];
        case 9:
            if (origin[i + 1][j + 1]) return origin[i + 1][j + 1];
    }
}

function useRules(ruleArray, i, j, num) {
    for (let k = 0; k < ruleArray.length; k++) {
        num += rules(ruleArray[k], i, j)
    }
}

function gameOfLife(origin) {
    for (let i = 0; i < origin.length; i++) {
        for (let j = 0; j < origin[i].length; j++) {
            let num = 0;
            if (i == 0) {
                if (j == 0) {
                    useRules([6, 8, 9], i, j, num)
                }
                if (j == origin[i].length - 1) {
                    useRules([4, 7, 8], i, j, num)

                } else {
                    useRules([4, 6, 7, 8, 9], i, j, num)
                }
            }
            answer[i][j] = check(origin[i][j], num)
        }
    }
    return answer
}
gameOfLife(origin)