import { swap } from "./common-utils";
import directions from "./directions";

/**
 * Should move the tile at location (rowIndex, colIndex) only if the empty tile is its neighbour.
 * @returns 'true' if it can swap, 'false' otherwise.
 */
export const moveTile = (board, rowIndex, colIndex) => {
  const size = board.length;

  for (let directionIndex = 0; directionIndex < 4; ++directionIndex) {
    const direction = directions[directionIndex];
    const neighbourRow = rowIndex + direction.row;
    const neighbourCol = colIndex + direction.col;
    if (neighbourRow >= 0
      && neighbourRow < size
      && neighbourCol >= 0
      && neighbourCol < size
      && board[neighbourRow][neighbourCol] === 0) {
        swap(board, rowIndex, colIndex, neighbourRow, neighbourCol);
        return true;
    }
  }
  return false;
};