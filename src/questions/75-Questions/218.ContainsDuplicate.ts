function containsDuplicate(nums: number[]): boolean {
  const numSet = new Set();
  let res = false;
  let i = 0;

  for (i = 0; i < nums.length; i++) {
    if (numSet.has(nums[i])) break;
    else numSet.add(nums[i]);
  }

  return i === nums.length ? false : true;
}

// First attempt, actually lowkey better.
// function containsDuplicate(nums: number[]): boolean {
//   const numSet = new Set();
//   let res = false;

//   for (let i = 0; i < nums.length; i++) {
//     if (numSet.has(nums[i])) {
//       res = true;
//       break;
//     }
//     numSet.add(nums[i]);
//   }

//   return res;
// }
