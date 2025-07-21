function singleNumber(nums: number[]): number {
  const numSet = new Set<number>();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (numSet.has(num)) {
      numSet.delete(num);
    } else {
      numSet.add(num);
    }
  }

  return numSet.values().next().value;
}
