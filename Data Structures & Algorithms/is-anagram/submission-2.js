class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false;
        }
        const charS = s.split('');
        const charT = t.split('');

        charS.sort();
        const sortedS = charS.join();
        charT.sort();
        const sortedT = charT.join();
        if(sortedS === sortedT){
            return true;
        }
        return false;
    }
}
