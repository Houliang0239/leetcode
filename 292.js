function canWinNim(n){
    if((n-1)%4 ==0 || (n-2)%4 ==0 || (n-3)%4 == 0){
        return true
    }else {
        return false
    }
}
canWinNim(5)