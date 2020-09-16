function sumNums(n){
    // console.log(n+sumNums(n-1))
    return n && n + sumNums(n-1)
}
let n = 10
let b = sumNums(n)
console.log(b)

// 乘法用递归代替就可以。。。