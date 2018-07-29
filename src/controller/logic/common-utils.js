/**
 * Finds the (row, col) indices of the empty tile (the tile with value === 0).
 */
export const findEmptyTilePosition = (board) => {
  const size = board.length;
  for (let rowIndex = 0; rowIndex < size; ++rowIndex) {
    for (let colIndex = 0; colIndex < size; ++colIndex) {
      if (board[rowIndex][colIndex] === 0) {
        return {
          row: rowIndex,
          col: colIndex,
        }
      }
    }
  }
  throw new Error('Invalid board: there is no empty tile.');
};

/**
 * Swaps the two tiles from the board.
 */
export const swap = (board, r1, c1, r2, c2) => {
  const tmpValue = board[r1][c1];
  board[r1][c1] = board[r2][c2];
  board[r2][c2] = tmpValue;
};