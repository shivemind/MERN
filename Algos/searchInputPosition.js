var searchInsert = function(nums, target) {
    var result = nums.indexOf(target);
    if(result === -1){
        for(let i = 0; i < nums.length;i++){
            if(nums[nums.length-1] < target){
                result = nums.length;
            }else if(nums[0] > target){
                result = 0;
            }else if(nums[i] < target && nums[i + 1] > target){
                result = i + 1;
            }
        }
    }
    return result;
};