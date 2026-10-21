class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();

        for (let str of strs) {
            let sortedStr = str.split('').sort().join('');
            if (!map.has(sortedStr)) {
                map.set(sortedStr, [])
            }
            map.get(sortedStr).push(str)
            console.log(map)
        }

        return Array.from(map.values())
    }
}
