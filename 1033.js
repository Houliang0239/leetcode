function numMovesStones(a, b, c) {
    let ans = [0, 0]
    let arr = [a, b, c]

    function compare(x, y) {
        return x - y
    }
    arr.sort(compare)
    console.log(arr)
    a = arr[0]
    b = arr[1]
    c = arr[2]
    console.log(a,b,c)
    if (b - a == 2 || c - b == 2) {
        ans[0] = 1;
    } else {
        if(b-a>1){
            ans[0]++
        }
        if(c-b>1){
            ans[0]++
        }
    }
    ans[1] = c-a-2
    console.log(ans)
    return ans
}
numMovesStones(4, 3, 2)