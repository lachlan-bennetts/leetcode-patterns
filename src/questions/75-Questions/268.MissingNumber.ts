function missingNumber(nums: number[]): number {
  const set = new Set<number>(
    Array.from({ length: nums.length + 1 }, (_, i) => i),
  );

  for (let i = 0; i < nums.length; i++) {
    set.delete(nums[i]);
  }

  return set.values().next().value;
}

// Set attempt, worked but slow.
// function missingNumber(nums: number[]): number {
//   const set = new Set<number>(
//     Array.from({ length: nums.length + 1 }, (_, i) => i),
//   );

//   for (let i = 0; i < nums.length; i++) {
//     set.delete(nums[i]);
//   }

//   return set.values().next().value;
// }

// Simple but elegant solution
// function missingNumber(nums: number[]): number {
//     let expectedSum = 0;
//     let foundSum = 0;

//     for (let i = 0; i < nums.length; i++) {
//         expectedSum += i + 1;
//         foundSum += nums[i];
//     }
//     return expectedSum - foundSum;
// };
