class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let obj = {}
        for(let i in nums){
            let find = target - nums[i]
            if(obj[find]!==undefined){
                return [Number(obj[find]),Number(i)]
            }
            obj[nums[i]] = i
        }
    }
}
