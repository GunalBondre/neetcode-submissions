class Solution:
    def productExceptSelf(self, arr: List[int]) -> List[int]:
        product = 1
        answer = []
        start = 0
        end = 1
        while start < len(arr):
            if start != end:
                product *= arr[end]
                end = end + 1
            if start == end:
                end += 1
            if end == len(arr):
                end = 0
                start = start + 1
                answer.append(product)
                product = 1

        return answer
        