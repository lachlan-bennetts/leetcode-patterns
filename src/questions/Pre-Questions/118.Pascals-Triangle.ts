function generate(numRows: number): number[][] {
  if (numRows === 0) return [];
  if (numRows === 1) return [[1]];

  let result: number[][] = [[1]];

  for (let i: number = 1; i < numRows; i++) {
    let prevRow: number[] = result[i - 1];
    let newRow: number[] = [];

    newRow.push(1);

    for (let j: number = 1; j < prevRow.length; j++) {
      newRow.push(prevRow[j - 1] + prevRow[j]);
    }

    newRow.push(1);
    result.push(newRow);
  }
  return result;
}
