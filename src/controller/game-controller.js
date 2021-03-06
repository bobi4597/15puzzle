import { initializeBoard } from './logic/puzzle-initializer';
import {shuffleBoard} from "./logic/puzzle-shuffler";
import {isSolved, solve} from './logic/puzzle-solver';
import {printPuzzle} from './logic/puzzle-printer';
import {moveTile} from "./logic/tile-mover";

export default class GameController {
  constructor(size) {
    this.size = size;
    this.board = initializeBoard(this.size);
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

  solvePuzzle() {
    return solve(this.board);
  }

  printPuzzle() {
    return printPuzzle(this.board);
  }
}