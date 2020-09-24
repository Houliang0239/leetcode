var CQueue = function () {
    this.arr1 = []
    this.arr2 = []
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
    if (this.arr1.length == 0 && this.arr2.length != 0) {
        this.arr1 = this.arr2.reverse()
        this.arr2 = []
    }
    this.arr1.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
    if (this.arr1.length == 0 && this.arr2.length == 0) {
        return -1
    } else if (this.arr1.length != 0 && this.arr2.length == 0) {
        this.arr2 = this.arr1.reverse()
        this.arr1 = []
        return this.arr2.pop()
    } else if (this.arr1.length ==0 && this.arr2.length != 0){
        return this.arr2.pop()
    }
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */