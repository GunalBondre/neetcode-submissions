class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
       const obj = {};

  for (let i in nums) {
    obj[nums[i]] = obj[nums[i]] + 1 || 1;
  }
  console.log(obj);
  for (let i in obj) {
    if (obj[i] > 1) {
      return true;
    }
  }
  return false;
    }
}
