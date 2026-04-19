class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false
        
        let freqMap1 = {}
        let freqMap2 = {}

        for(let char in s) {
            freqMap1[s[char]] = freqMap1[s[char]] + 1 || 1
        }
         for(let char in t) {
            freqMap2[t[char]] = freqMap2[t[char]] + 1 || 1
        }

        for(let char in freqMap1){
            if(freqMap1[char] !== freqMap2[char]) {
                return false
            }
        }
        return true
    }
}
