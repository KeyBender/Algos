
from typing import List


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:

        d = {}
        for i, value in enumerate(nums):
            r = target - value
            if r in d: return [d[r], i]
            d[value] = i



solution = Solution()

print(solution.twoSum([2,7,11,15],9))
print(solution.twoSum([3,3], 6))
print(solution.twoSum([3,2,4], 6))