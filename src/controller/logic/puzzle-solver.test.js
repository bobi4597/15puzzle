import {boardToStr, isSolved, manhattanDistance, solve, strToBoard} from "./puzzle-solver";

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

describe ('Tests for the solve function (aStar)', () => {
  it ('should solve the board with size 3', () => {
    // Given
    const board = [[1, 2, 3], [4, 5, 6], [0, 7, 8]];
    // When
    const tilesToClick = solve(board);
    // Then
    expect(tilesToClick).toHaveLength(2);
    expect(tilesToClick[0]).toEqual({row: 2, col: 1});
    expect(tilesToClick[1]).toEqual({row: 2, col: 2});
  });

  it ('should solve the board with size 4', () => {
    // Given
    const board = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [0, 13, 14, 15]];
    // When
    const tilesToClick = solve(board);
    // Then
    expect(tilesToClick).toHaveLength(3);
    expect(tilesToClick[0]).toEqual({row: 3, col: 1});
    expect(tilesToClick[1]).toEqual({row: 3, col: 2});
    expect(tilesToClick[2]).toEqual({row: 3, col: 3});
  });

  it ('should solve the board with size 4 medium', () => {
    // Given
    const board = [[0, 2, 3, 4], [1, 6, 7, 8], [5, 10, 11, 12], [9, 13, 14, 15]];
    // When
    const tilesToClick = solve(board);
    // Then
    expect(tilesToClick).toHaveLength(6);
    expect(tilesToClick[0]).toEqual({row: 1, col: 0});
    expect(tilesToClick[1]).toEqual({row: 2, col: 0});
    expect(tilesToClick[2]).toEqual({row: 3, col: 0});
    expect(tilesToClick[3]).toEqual({row: 3, col: 1});
    expect(tilesToClick[4]).toEqual({row: 3, col: 2});
    expect(tilesToClick[5]).toEqual({row: 3, col: 3});
  });

  it ('should solve the board with size 4 complex', () => {
    // Given
    const board = [[6, 2, 8, 9], [1, 5, 4, 3], [13, 14, 10, 15], [7, 0, 12, 11]];
    // When
    const tilesToClick = solve(board);
    // Then
    expect(tilesToClick).toHaveLength(38);
    // the last move must be the bottom-right tile
    expect(tilesToClick[37]).toEqual({row: 3, col: 3});
  });
});

describe ('Tests the manhattan distance function', () => {
  it ('should calculate manhattan distance for a give board', () => {
    // Given
    const board = [[1, 2, 5], [3, 0, 6], [7, 4, 8]];
    // When/Then
    expect(manhattanDistance(board)).toEqual(8);
  });
  it ('should calculate manhattan distance for a give board', () => {
    // Given
    const board = [[1, 2, 3], [4, 5, 6], [7, 8, 0]];
    // When/Then
    expect(manhattanDistance(board)).toEqual(0);
  });
});

describe ('Tests for the board-to-string conversion', () => {
  it ('should convert board to string', () => {
    // Given
    const board = [[1, 2, 3], [4, 5, 6], [7, 8, 0]];
    // When/Then
    expect(boardToStr(board)).toEqual('1,2,3,4,5,6,7,8,0');
  })
});

describe ('Tests for the string-to-board conversion', () => {
  it ('should convert string to board', () => {
    // Given
    const str = '1,2,3,4,5,6,7,8,0';
    const size = 3;
    // When
    const board = strToBoard(str, size);
    // Then
    expect(board.length).toEqual(3);
    expect(board[0][0]).toEqual(1);
    expect(board[0][1]).toEqual(2);
    expect(board[0][2]).toEqual(3);
    expect(board[1][0]).toEqual(4);
    expect(board[1][1]).toEqual(5);
    expect(board[1][2]).toEqual(6);
    expect(board[2][0]).toEqual(7);
    expect(board[2][1]).toEqual(8);
    expect(board[2][2]).toEqual(0);
  })
});
