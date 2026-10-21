class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this._bubbleUp();
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._bubbleDown();
        return top;
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    _bubbleUp() {
        let index = this.heap.length - 1;
        const value = this.heap[index];

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] <= value) break;
            this.heap[index] = this.heap[parentIndex];
            index = parentIndex;
        }

        this.heap[index] = value;
    }

    _bubbleDown() {
        let index = 0;
        const length = this.heap.length;
        const value = this.heap[0];

        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let swap = null;

            if (left < length && this.heap[left] < value) {
                swap = left;
            }

            if (
                right < length &&
                this.heap[right] < (swap === null ? value : this.heap[left])
            ) {
                swap = right;
            }

            if (swap === null) break;
            this.heap[index] = this.heap[swap];
            index = swap;
        }

        this.heap[index] = value;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    
    topKFrequent(nums, k) {
        // hashmap sort
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
