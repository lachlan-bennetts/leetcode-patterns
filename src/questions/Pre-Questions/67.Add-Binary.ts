function addBinary(a: string, b: string): string {
  let result: string = '';
  let carry: number = 0;
  let i: number = a.length - 1;
  let j: number = b.length - 1;

  while (i >= 0 || j >= 0) {
    let sum: number = carry;

    if (i >= 0) {
      sum += parseInt(a[i--]);
    }

    if (j >= 0) {
      sum += parseInt(b[j--]);
    }

    result = (sum % 2) + result;
    carry = Math.floor(sum / 2);
  }

  if (carry > 0) {
    result = carry + result;
  }

  console.log(result);
  return result;
}
