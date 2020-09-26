/**
 * initialize your data structure here.
 */
var MinStack = function() {
     this.stack = []
     this.minStack = []
     this.min = Infinity
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if(this.stack.length == 0){
        this.min = Infinity
    }
    if(x < this.min){
        this.min = x
    }
    this.stack.push(x)
    this.minStack.push(this.min)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop()
    this.minStack.pop()
    this.min = this.minStack.pop()
    this.minStack.push(this.min)
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    let result = this.stack.pop()
    this.stack.push(result)
    return result
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let result = this.minStack.pop()
    this.minStack.push(result)
    return result
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */