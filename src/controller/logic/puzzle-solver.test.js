import {isSolved} from "./puzzle-solver";

describe ('Tests for the isSolved function', () => {
  it ('should return true for a solved puzzle of size 3', () => {
    // Given
    const board = [[1, 2, 3], [4, 5, 6], [7, 8, 0]];
    // When/Then
    expect(isSolved(board)).toEqual(true);
  });

  it ('should return true for a solved puzzle of size 4', () => {
    // Given
    const board = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 0]];
    // When/Then
    expect(isSolved(board)).toEqual(true);
  });

  it ('should return false for a solved that is NOT puzzle', () => {
    // Given
    const board = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 0, 15]];
    // When/Then
    expect(isSolved(board)).toEqual(false);
  });

});