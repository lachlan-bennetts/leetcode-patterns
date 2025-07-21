function lengthOfLongestSubstring(s: string): number {
  let count = 0;
  let finalCount = 0;
  let obj = {};
  let j = 1;

  for (let i = 0; i <= s.length - 1; i++) {
    if (!obj[s[i]]) {
      obj[s[i]] = s[i];
      count += 1;
      finalCount = Math.max(count, finalCount);
    } else {
      count = 1;
      i = j;
      obj = {
        [s[i]]: s[i],
      };
      j++;
    }
  }

  return finalCount;
}
