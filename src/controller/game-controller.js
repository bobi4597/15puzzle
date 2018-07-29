import { initializeBoard } from './logic/puzzle-initializer';
import {shuffleBoard} from "./logic/puzzle-shuffler";
import {isSolved} from "./logic/puzzle-solver";

export default class GameController {
  constructor(size) {
    this.size = size;
    this.board = initializeBoard(size);
    shuffleBoard(this.board);
  }

  getBoard() {
    return this.board;
  }

  resetPuzzle() {
    this.board = initializeBoard(this.size);
    shuffleBoard(this.board);
  }

  moveTile(rowIndex, colIndex) {
    return moveTile(this.board, rowIndex, colIndex);
  }

  isPuzzleSolved() {
    return isSolved(this.board);
  }

  printPuzzle() {
    // fixme: print the puzzle
  }
}