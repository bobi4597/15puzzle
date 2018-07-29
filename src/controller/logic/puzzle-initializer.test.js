import { initializeBoard } from './puzzle-initializer';

describe ('Tests for the puzzle initializer', () => {

  it ('Should initialize a board with size 2', () => {
    // Given/When
    const board = initializeBoard(2);
    // Then
    expect(board.length).toEqual(2);
    board.forEach(row => expect(row.length).toEqual(2));

    expect(board[0][0]).toEqual(1);
    expect(board[0][1]).toEqual(2);
    expect(board[1][0]).toEqual(3);
    expect(board[1][1]).toEqual(0);
  });

  it ('Should initialize a board with size 3', () => {
    // Given/When
    const board = initializeBoard(3);
    // Then
    expect(board.length).toEqual(3);
    board.forEach(row => expect(row.length).toEqual(3));

    expect(board[0][0]).toEqual(1);
    expect(board[0][1]).toEqual(2);
    expect(board[0][2]).toEqual(3);
    expect(board[1][0]).toEqual(4);
    expect(board[1][1]).toEqual(5);
    expect(board[1][2]).toEqual(6);
    expect(board[2][0]).toEqual(7);
    expect(board[2][1]).toEqual(8);
    expect(board[2][2]).toEqual(0);
  });

  it ('Should initialize a board with size 4', () => {
    // Given/When
    const board = initializeBoard(4);
    // Then
    expect(board.length).toEqual(4);
    board.forEach(row => expect(row.length).toEqual(4));

    expect(board[0][0]).toEqual(1);
    expect(board[0][1]).toEqual(2);
    expect(board[0][2]).toEqual(3);
    expect(board[0][3]).toEqual(4);
    expect(board[1][0]).toEqual(5);
    expect(board[1][1]).toEqual(6);
    expect(board[1][2]).toEqual(7);
    expect(board[1][3]).toEqual(8);
    expect(board[2][0]).toEqual(9);
    expect(board[2][1]).toEqual(10);
    expect(board[2][2]).toEqual(11);
    expect(board[2][3]).toEqual(12);
    expect(board[3][0]).toEqual(13);
    expect(board[3][1]).toEqual(14);
    expect(board[3][2]).toEqual(15);
    expect(board[3][3]).toEqual(0);
  });

  it ('Should initialize a board with size 4 when no parameter is passed', () => {
    // Given/When
    const board = initializeBoard();
    // Then
    expect(board.length).toEqual(4);
    board.forEach(row => expect(row.length).toEqual(4));
  });

});

