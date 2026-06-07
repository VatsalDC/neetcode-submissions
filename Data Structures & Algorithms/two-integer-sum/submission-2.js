class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seen = new Map();
        for(let i = 0; i<nums.length; i++){
            const currentNum = nums[i];
            const complement = target - currentNum;
            if(seen.has(complement)){
                const complementIndex = seen.get(complement);
                return[complementIndex, i]
            }
            seen.set(currentNum, i);
        }
        return[];
    }
}
