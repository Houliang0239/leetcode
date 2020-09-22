function bulbSwitch(n) {
    let ans=0
    for (let i = 1;i<=n;i++){
        if(Math.floor(Math.sqrt(i))===Math.sqrt(i)){
            ans++
        }
    }
    // console.log(ans)
    return ans
}
bulbSwitch(4)