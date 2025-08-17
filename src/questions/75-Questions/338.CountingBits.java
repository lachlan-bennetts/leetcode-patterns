class Solution {
  public int[] countBits(int n) {
    int[] ans = new int[n + 1];
    switch (n) {
      case 0:
        ans[0] = 0;
        break;

      case 1:
        ans[0] = 0;
        ans[1] = 1;
        break;

      default:
        ans[0] = 0;
        ans[1] = 1;
        int powerOfTwo = 2;

        for (int i = 2; i <= n; i++) {
          if (isPowerOfTwo(i) == true) {
            powerOfTwo = i;
            ans[i] = 1;
          } else {
            int leftover = i - powerOfTwo;
            System.out.println(leftover);
            ans[i] = 1 + ans[leftover];
          }
          System.out.println(powerOfTwo);

        }
        break;
    }
    return ans;
  }

  public static boolean isPowerOfTwo(int n) {
    return n > 0 && (n & (n - 1)) == 0;
  }
}

// Even better solution, very simple
// class Solution {
// public int[] countBits(int n) {
// int[] dp = new int[n + 1];
// int sub = 1;

// for (int i = 1; i <= n; i++) {
// if (sub * 2 == i) {
// sub = i;
// }

// dp[i] = dp[i - sub] + 1;
// }

// return dp;
// }
// }

// 100 => (2^2*1) + (2^1*0) + (2^0*0) == 4
// 101100 => (2^5*1) + (2^4*0) + (2^3*1) + (2^2*1) + (2^1*0) + (2^0*0) = 44
