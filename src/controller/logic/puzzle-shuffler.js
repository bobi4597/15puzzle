import {findEmptyTilePosition, swap} from './common-utils';
import directions from './directions';
import {isSolved} from "./puzzle-solver";

const NUMER_OF_SHUFFLES = 100;

/**
 * Shuffles the given board.
 * Shuffling is done by starting from a valid position and moving the empty tile randomly.
 * This way, we are sure that after shuffle the puzzle will be in valid state (i.e. can be solved).
 */
export const shuffleBoard = (board) => {
  const size = board.length;
  const emptyTile = findEmptyTilePosition(board);

  let shuffleCounter = 0;
  while (shuffleCounter < NUMER_OF_SHUFFLES || isSolved(board)) {
    const directionIndex = Math.floor(Math.random() * 4);
    const direction = directions[directionIndex];

    const newRow = emptyTile.row + direction.row;
    const newCol = emptyTile.col + direction.col;

    if (newRow >= 0 && newRow < size && newCol >= 0 && newCol < size) {
      swap(board, emptyTile.row, emptyTile.col, newRow, newCol);
      emptyTile.row = newRow;
      emptyTile.col = newCol;
      ++shuffleCounter;
    }
  }
};