// XOR
function singleNumber(nums: number[]): number {
  // using xor
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total ^= nums[i];
  }

  return total;
}
