var RecentCounter = function () {
    this.requestQueue = []
};

/** 
 * @param {number} 
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
    this.requestQueue.push(t)
    this.requestQueue = this.requestQueue.filter(time => t - time <= 3000)
    if(this.requestQueue.length != 0){
        return this.requestQueue.length
    }else {
        return null
    }
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */