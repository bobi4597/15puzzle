export const isSolved = (board) => {
  const size = board.length;
  const squareOfSize = size * size;

  for (let rowIndex = 0; rowIndex < size; ++rowIndex) {
    for (let colIndex = 0; colIndex < size; ++colIndex) {
      const expectedValue = (rowIndex * size + colIndex + 1) % squareOfSize;
      if (board[rowIndex][colIndex] !== expectedValue) {
        return false;
      }
    }
  }

  return true;
};