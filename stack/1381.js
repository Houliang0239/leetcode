function CustomStack(maxSize) {
    this.maxSize = maxSize
    this.item = new Array(this.maxSize)
    this.length = 0
}
CustomStack.prototype.push = function (x) {
    if (this.length < this.maxSize) {
        this.item[this.length] = x
        this.length ++ 
    }
}
CustomStack.prototype.pop = function () {
    let result = -1
    if (this.length != 0) {
        result = this.item[this.length - 1]
        this.item.pop()
        this.length --
    }
    return result
}
CustomStack.prototype.increment = function (k, value) {
    if (k > this.length) k = this.length
    for (let i = 0; i < k; i++) {
        this.item[i] += value
    }
}

let stack = new CustomStack(10)
let a
console.log(stack)
stack.push(1)
a = stack.pop()
console.log (a)
a = stack.pop()
console.log (a)
stack.push(2)
stack.push(3)
stack.increment(3,4)