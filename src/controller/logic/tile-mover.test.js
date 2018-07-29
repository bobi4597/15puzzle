import {moveTile} from "./tile-mover";

describe ('Tests for the moveTile function', () => {
  it ('should move a tile that has empty tile as neighbour', () => {
    // Given
    const board = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 0]];
    expect(board[3][2]).toEqual(15);
    expect(board[3][3]).toEqual(0);
    // When
    const canMove = moveTile(board, 3, 2);
    // Then
    expect(canMove).toEqual(true);
    expect(board[3][2]).toEqual(0);
    expect(board[3][3]).toEqual(15);
  });

  it ('should not move a tile that does not have empty tile as neighbour', () => {
    // Given
    const board = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 0]];
    // When
    const canMove = moveTile(board, 0, 0);
    // Then
    expect(canMove).toEqual(false);
  });

  it ('should not move the empty tile', () => {
    // Given
    const board = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 0]];
    // When
    const canMove = moveTile(board, 3, 3);
    // Then
    expect(canMove).toEqual(false);
  });
});