class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seen = new Map();

        for(let i = 0; i < nums.length; i++){
            const currentNumber = nums[i];
            const complement = target - currentNumber;
            if(seen.has(complement)){
                const complementIndex = seen.get(complement);
                return[complementIndex, i];
            }
            seen.set(currentNumber, i)
        }
        return [];
    }
}
