//https://leetcode.com/problems/remove-element/

function removeElement(nums: number[], val: number): number {
    let sum = nums.length
    let totalItems = nums.length
    for(let i = 0; i< totalItems; i++){
        if( nums[i] == val){
            nums[i] = 51;
            sum = sum - 1;
        }
    }
    nums.sort();
    return sum
};