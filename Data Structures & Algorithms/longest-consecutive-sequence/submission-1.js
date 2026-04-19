class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length === 0) return 0

        let numSet = new Set(nums)
        let bestSeq = []
        let longestStreak = 0
        for(let num of numSet){
            if(!numSet.has(num-1)){
                let currentNum = num
                let currentStreak = 1
                let longestSeq = [currentNum]

                while(numSet.has(currentNum + 1)){
                    currentNum++
                    currentStreak++
                    longestSeq.push(currentNum)
                }

                if(currentStreak > longestStreak) {
                    longestStreak = currentStreak
                    bestSeq = longestSeq
                }
            }
        }

        return bestSeq.length
    }
}
