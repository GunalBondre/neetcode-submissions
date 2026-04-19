class Solution:
    def isPalindrome(self, s: str) -> bool:
      

        only_char = ''.join(char for char in s if char.isalnum())
        only_char = only_char.lower()
        left = 0
        right = len(only_char)-1
        while(left <= right):
            if only_char[left] != only_char[right]:
                return False
            left += 1
            right -= 1
        return True
        