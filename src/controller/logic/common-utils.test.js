import { findEmptyTilePosition, swap } from './common-utils';

describe ('Tests for the findEmptyTilePosition function', () => {
  it ('should find the empty tile', () => {
    // Given
    const board = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [0, 13, 14, 15]];
    // When
    const emptyTile = findEmptyTilePosition(board);
    // Then
    expect(emptyTile).toEqual({row: 3, col: 0});
  });

  it ('should find the empty tile', () => {
    // Given
    const board = [[0, 2, 3, 4], [1, 6, 7, 8], [5, 10, 11, 12], [9, 13, 14, 15]];
    // When
    const emptyTile = findEmptyTilePosition(board);
    // Then
    expect(emptyTile).toEqual({row: 0, col: 0});
  });

  it ('should throw exception if there is no empty tile', () => {
    // Given
    const board = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
    // When/Then
    expect(() => {
      findEmptyTilePosition(board)
    }).toThrowError();
  });
});

describe ('Tests for the swap function', () => {
  it ('should swap two elements of the board', () => {
    // Given
    const board = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [0, 13, 14, 15]];
    expect(board[3][0]).toEqual(0);
    expect(board[3][1]).toEqual(13);
    // When
    swap(board, 3, 0, 3, 1);
    // Then
    expect(board[3][0]).toEqual(13);
    expect(board[3][1]).toEqual(0);
  });

  it ('should swap two elements of the board', () => {
    // Given
    const board = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [0, 13, 14, 15]];
    expect(board[2][0]).toEqual(9);
    expect(board[3][0]).toEqual(0);
    // When
    swap(board, 2, 0, 3, 0);
    // Then
    expect(board[2][0]).toEqual(0);
    expect(board[3][0]).toEqual(9);
  });
});