class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
          let obj = {};
  let arr = [];
  let res = [];
  for (let i in nums) {
    obj[nums[i]] = obj[nums[i]] + 1 || 1;
  }

 for (let i = 0; i <= nums.length; i++) {
    arr.push([]);
  }

  for (let [key, value] of Object.entries(obj)) {
    arr[value].push(parseInt(key));
  }
  for (let i = arr.length - 1; i >= 0 && res.length < k; i--) {
    if (arr[i].length > 0) {
      res.push(...arr[i]);
    }
  }
  return res.slice(0, k);
    }
}
