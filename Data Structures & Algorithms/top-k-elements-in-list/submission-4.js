class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freqMap = new Map();

        // 1. get frequency
        for (let num of nums) {
            freqMap.set(num, (freqMap.get(num)||0) +1)
        }

        const sorted = Array.from(freqMap.entries()).sort((a,b) => b[1] - a[1]);

        return sorted.slice(0, k).map(pair => pair[0])

    }
}
