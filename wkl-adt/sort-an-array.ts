//https://leetcode.com/problems/sort-an-array/
// mergesort
function sortArray(nums: number[]): number[] {
    mergeSort(nums, 0, nums.length-1)
    return nums
};

function mergeSort(arr: number[], start: number, end: number){
    if (start >= end){
        return arr;
    }
    let middle = Math.floor((start+end)/2)
    mergeSort(arr, start, middle)
    mergeSort(arr, middle+1, end)
    merge(arr, start, middle, end)
}

function merge(arr: number[], start: number, middle:number, end: number){
    let temp = []
    let i = start;
    let j = middle + 1;
    let k = start;
    while (i <= middle && j <= end) {
        if (arr[i] <= arr[j]) {
            temp[k] = arr[i];
            k++;
            i++;
        }
        else {
            temp[k] = arr[j];
            k++;
            j++;
        }
    }

    while (i <= middle) {
        temp[k] = arr[i];
        k++;
        i++;
    }

    while (j <= end) {
        temp[k] = arr[j];
        k++;
        j++;
    }

    for (let m = start; m <= end; m++) {
        arr[m] = temp[m];
    }
}

// quicksort

function sortArray(nums: number[]): number[] {
    if (nums.length <= 1) {
        return nums;
    }

    const pivotIndex = Math.floor(Math.random() * nums.length);
    const pivot = nums[pivotIndex];
    const leftArr = [];
    const rightArr = [];

    for (let i = 0; i < nums.length; i++) {
        if (i !== pivotIndex) {
            if (nums[i] < pivot) {
                leftArr.push(nums[i]);
            } else {
                rightArr.push(nums[i]);
            }
        }
    }

    return [...sortArray(leftArr), pivot, ...sortArray(rightArr)];
}