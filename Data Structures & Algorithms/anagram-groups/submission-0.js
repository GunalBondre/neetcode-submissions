class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let obj = {}

        for(let i in strs){
            let sorted = strs[i].split('').sort().join('')

            if(obj[sorted]){
                obj[sorted].push(strs[i])
            }else{
                obj[sorted] = [strs[i]]
            }
        }
        return Object.values(obj)
    }
}
