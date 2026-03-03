class Solution:
    def __init__(self):
        pass

    def isPalindrome(self, x: int) -> bool:
        contrary: list[str] = list(str(abs(x)))[::-1]
        return int(''.join(contrary)) == x
    
start = Solution()
print(start.isPalindrome(-121))