function judgeCircle(moves){
    let ans = 0
    for (let i=0;i<moves.length;i++){
        if(moves[i] == 'L'){
            ans += 1;
        }else if(moves[i] == 'R'){
            ans -= 1;
        }else if(moves[i] == 'U'){
            ans += 2;
        }else if(moves[i] == 'D'){
            ans -= 2;
        }
    }
    if(ans) return false
    else return true
}