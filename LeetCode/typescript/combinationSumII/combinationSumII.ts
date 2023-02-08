/* Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

Each number in candidates may only be used once in the combination.

Note: The solution set must not contain duplicate combinations.

 

Example 1:

Input: candidates = [10,1,2,7,6,1,5], target = 8
Output: 
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]

Example 2:

Input: candidates = [2,5,2,1,2], target = 5
Output: 
[
[1,2,2],
[5]
]

 

Constraints:

    1 <= candidates.length <= 100
    1 <= candidates[i] <= 50
    1 <= target <= 30

 */

function combinationSum2(candidates: number[], target: number): number[][] {

    candidates = candidates.filter((val: number)=> val<=target).sort((a, b)=> a - b)
    const ans: number[][] = []

    //edge case
    if(candidates.includes(target)){
        ans.push([candidates[candidates.indexOf(target)]])
    }

    console.log(candidates)

    return [[]]
}


console.log(combinationSum2([10,1,2,7,6,1,5], 8))