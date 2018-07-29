import {initializeBoard} from "./puzzle-initializer";
import {shuffleBoard} from "./puzzle-shuffler";
import {isSolved} from "./puzzle-solver";

describe ('Tests for the shuffleBoard function', () => {
  it ('shoud shuffle a board of size 2', () => {
    const board = initializeBoard(2);
    shuffleBoard(board);
    // check that all elements are still in the board
    const set = new Set();
    board.forEach(row => row.forEach(value => set.add(value)));
    expect(set.size).toEqual(4);
    // the board should not be solved
    expect(isSolved(board)).toEqual(false);
  });

  it ('shoud shuffle a board of size 3', () => {
    const board = initializeBoard(3);
    shuffleBoard(board);
    // check that all elements are still in the board
    const set = new Set();
    board.forEach(row => row.forEach(value => set.add(value)));
    expect(set.size).toEqual(9);
    expect(isSolved(board)).toEqual(false);
  });

  it ('shoud shuffle a board of size 4', () => {
    const board = initializeBoard(4);
    shuffleBoard(board);
    // check that all elements are still in the board
    const set = new Set();
    board.forEach(row => row.forEach(value => set.add(value)));
    expect(set.size).toEqual(16);
    expect(isSolved(board)).toEqual(false);
  });
});