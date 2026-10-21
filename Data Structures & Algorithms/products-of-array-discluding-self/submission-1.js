class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let length = nums.length;
        const results = new Array(length);
        let prefix = 1
        let suffix = 1

        for (let i = 0; i<length; i++) {
            results[i] = prefix
            prefix *= nums[i]
        }

        for (let i = length-1; i>=0; i--) {
            results[i] *= suffix
            suffix *= nums[i]

        }
    return results
    }
}
