function majorityElement(nums) {
  const count = {};
  const majority = Math.floor(nums.length / 2);
  
  for (let i = 0; i < nums.length; i++) {
    if (!count[nums[i]]) {
      count[nums[i]] = 1;
    } else {
      count[nums[i]]++;
    }
    if (count[nums[i]] > majority) {
      return nums[i];
    }
  }
}
