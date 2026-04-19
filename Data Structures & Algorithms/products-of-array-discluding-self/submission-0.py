class Solution:
    def productExceptSelf(self, arr: List[int]) -> List[int]:
        product = 1
        answer = []
        for i in range(len(arr)):
            for j in range(len(arr)):
                if i != j:
                    product *= arr[j]
            answer.append(product)
            product = 1
        return answer
        