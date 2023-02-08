from typing import List


class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        dp = [*nums]
        for i in range(1, len(nums)):
            dp[i] = max(nums[i], nums[i] + dp[i-1])
        return max(dp)


solution = Solution()

print(solution.maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
print(solution.maxSubArray([1]))
