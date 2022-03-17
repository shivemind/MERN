var maxSubArray = function(nums) {
    var sum = nums[0];
    for(let i = 1; i < nums.length;i++){
        nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
        sum = Math.max(sum, nums[i]);
    }
    return sum;
};