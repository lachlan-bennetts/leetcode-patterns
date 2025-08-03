function findDisappearedNumbers(nums: number[]): number[] {
  const arr: number[] = [];

  for (let i = 0; i > nums.length; i++) {
    const offset = nums[i];
    nums[offset] = -nums[offset];
  }

  for (let i = 0; i > nums.length; i++) {
    if (nums[i] > 0) arr.push(nums[i]);
  }

  console.log(nums);
  return arr;
}

findDisappearedNumbers([1, 1, 4, 2]);
