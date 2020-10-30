function sort(intervals) {
    let item
    for (let i = 0; i < intervals.length - 1; i++) {
        for (let j = i; j < intervals.length; j++) {
            if(intervals[j][0]<intervals[i][0]){
                item = intervals[j]
                intervals[j] = intervals[i]
                intervals[i] = item
            }
        }
    }
    return intervals
}

function merge(intervals) {
    if (intervals.length == 0) return []
    intervals = sort(intervals)
    let ans = [intervals[0]]
    for (let i = 1; i < intervals.length; i++) {
        if (ans[ans.length - 1][1] >= intervals[i][0]) {
            let item = ans.pop()
            ans.push([item[0], intervals[i][1]])
        } else {
            ans.push(intervals[i])
        }

    }
    return ans
}


let intervals =[[1,3],[2,6],[8,10],[15,18]]
let ans = merge(intervals)
console.log(ans)