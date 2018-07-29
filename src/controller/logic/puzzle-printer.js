/**
 * Will print the puzzle by ensuring 4 characters for each value.
 * Rows are in separate line, and values in each row are surrounded with square brackets.
 * Example:
 * [   1   2   3]
 * [   4   5   6]
 * [   7       8]
 */
export const printPuzzle = (board) => {
  let output = '';
  board.forEach(row => {
    output = output.concat('[');
    row.forEach(value => {
      const outputValue = value === 0 ? '' : value.toString();
      output = output.concat(outputValue.padStart(4, ' '));
    });
    output = output.concat(']\n');
  });
  return output;
};