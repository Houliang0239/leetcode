function shuffle(nums,n){
    let ans = []
    for(let i = 0;i<n;i++){
        ans.push(nums[i])
        ans.push(nums[n+i])
    }
    return ans
}
let nums = [2,5,1,3,4,7]
let n = 3
shuffle(nums,n)
function Fn(){};
   
Fn.prototype = new Array();
console.log(Fn.prototype)
var f=new Fn();
   
console.log(f.constructor === Fn);
console.log(f.constructor === Array)
var f=new Fn();
   
function mynew(func,...args){
    if(!func instanceof Function) throw new error();
    func.context = this
    let obj = Object.create(func.prototype)
    let result = func.apply
}


