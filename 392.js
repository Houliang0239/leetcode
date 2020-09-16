let t = 'sabvdasbjdkasd';
let s = 'avdab';

function isSubsequence(s, t) {
    if (s.length == 0) {
        return true
    } else if (t.length == 0 && s.length != 0) {
        return false
    } else {
        // let j = 0;
        // for (let i = 0; i < t.length; i++) {
        //     if (t[i] == s[j]) {
        //         j++;
        //     }
        //     if(j== s.length){
        //         break;
        //     }
        // }
        // return j == s.length
        let index = -1;
        for (let i = 0; i < s.length; i++) {
            index = t.indexOf(s[i], index + 1);
            if (index > -1) {
                continue;
            } else {
                return false
            }
        }
        return true
    }
}
isSubsequence(s, t)