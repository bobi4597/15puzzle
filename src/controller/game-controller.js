import { initializeBoard } from './logic/puzzle-initializer';
import {shuffleBoard} from "./logic/puzzle-shuffler";

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
    // fixme: check whether the puzzle is solved
  }

  printPuzzle() {
    // fixme: print the puzzle
  }
}