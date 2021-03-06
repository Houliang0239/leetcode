/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.first = 0
    this.last = 0
    this.k = k
    this.count = 0
    this.queue = []
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if(!this.isFull()){
        this.queue[this.last] = value
        this.last = (this.last + 1) % this.k 
        this.count ++ 
        return true
    }else {
        return false
    }
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if(!this.isEmpty()){
        this.queue[this.first] = null
        this.first = (this.first + 1) % this.k 
        this.count --
        return true
    }else {
        return false
    }
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if(this.isEmpty()){
        return -1
    }else {
        return this.queue[this.first]
    }
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if(this.isEmpty()){
        return -1
    }else {
        console.log(this.queue)
        console.log(this.last)
        return this.queue[(this.last + this.k - 1) % this.k]
    }
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    if(this.count === 0){
        return true
    }else {
        return false
    }
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    if(this.count == this.k) {
        return true
    }else {
        return false
    }
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */