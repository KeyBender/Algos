class Solution:
    def containsDuplicate(self, nums):
        for value in range(0, len(nums)):
            compare = nums.pop()
            if compare in nums:
                return True
        return False



solution = Solution()
print(solution.containsDuplicate([1,2,3,1]))