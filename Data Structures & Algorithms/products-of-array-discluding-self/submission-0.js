class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let length = nums.length;
        const results = new Array(length);
        results.fill(1)

        for (let i = 0; i<nums.length; i++) {
            for (let j=0; j< nums.length; j++) {
                if (i!==j) {
                    results[i] *= nums[j]
                }
            }
        }
        return results
    }
}
