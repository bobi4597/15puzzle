export default class GameController {
  constructor(size) {
    this.board = [[]];
    // fixme: initialize the board
  }

  getBoard() {
    return this.board;
  }

  resetPuzzle() {
    // fixme: should reset/shuffle the puzzle
  }

  moveTile(rowIndex, colIndex) {
    // fixme: should move the tile at the given location (if possible)
  }

  isPuzzleSolved() {
    // fixme: check whether the puzzle is solved
  }

  printPuzzle() {
    // fixme: print the puzzle
  }
}