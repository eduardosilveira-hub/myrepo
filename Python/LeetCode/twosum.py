class Solution:
    def __init__(self):
        pass

    def twoSum(self, nums: list[int], target: int) -> list[int]:
        output: list[int] = []
        for indexOne, numberIt1 in enumerate(nums):
            for indexTwo, numberIt2 in enumerate(nums):
                if (numberIt1 + numberIt2 == target and indexOne != indexTwo):
                    output.append(indexOne)
                    output.append(indexTwo)
        return list(set(output))
            
numbers: list[int] = [3,2,4]
target: int = 6

calculate = Solution()
result = calculate.twoSum(numbers, target)
print(result)