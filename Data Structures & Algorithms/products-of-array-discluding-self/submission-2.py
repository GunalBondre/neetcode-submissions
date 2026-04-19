class Solution:
    def productExceptSelf(self, arr: List[int]) -> List[int]:

        prefix_sum = 1
        ans = [1] * len(arr)
        for i in range(len(arr)):
            ans[i] = prefix_sum
            prefix_sum *= arr[i]
        print(ans)
        postfix_sum = 1
        for i in range(len(arr) -1,-1,-1):
            ans[i] *= postfix_sum
            postfix_sum *= arr[i]
        return ans
