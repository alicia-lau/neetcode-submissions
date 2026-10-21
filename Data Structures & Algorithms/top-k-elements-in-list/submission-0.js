class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();

        for (let i=0; i < nums.length; i++) {
            if (!map.has(nums[i])) {
                map.set(nums[i], 1)
            } else {
                map.set(nums[i], map.get(nums[i]) + 1)
            }
        }

        console.log(map)

        const sortedMap = new Map([...map.entries()].sort((a,b) => b[1] - a[1]))
        console.log(sortedMap)

        let count = 0
        let result = []
        for (let [key, val] of sortedMap.entries()) {
            if (count < k) {
                result.push(key)
                count++;
            }
        }
        return result
    }
}
