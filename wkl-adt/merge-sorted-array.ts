//https://leetcode.com/problems/merge-sorted-array/
/**
 Do not return anything, modify nums1 in-place instead.
 */
 function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    if (m <= 0) {
        for (let x=0; x<n; x++) {
            nums1[x] = nums2[x];
        }
    }
    let y = m-1;
    let z = n-1;
    let i = m + n - 1;
    while(z >= 0){
        if(nums1[y] <= nums2[z]){
            nums1[i] = nums2[z];
            z = z - 1;
            i = i - 1;
        }
        if(nums1[y] > nums2[z]){
            nums1[i] = nums1[y];
            y = y - 1;
            i = i - 1;
        }
    }
};