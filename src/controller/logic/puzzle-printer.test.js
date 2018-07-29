import {printPuzzle} from "./puzzle-printer";

describe ('Tests for the printPuzzle function', () => {
  it ('should print the solved puzzle', () => {
    // Given
    const board = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 0]];
    // When
    const output = printPuzzle(board);
    // Then
    const lines = output.split(/\n/);
    expect(lines.length).toEqual(5); // 5 because of the new line character on the last line
    expect(lines[0]).toEqual('[   1   2   3   4]');
    expect(lines[1]).toEqual('[   5   6   7   8]');
    expect(lines[2]).toEqual('[   9  10  11  12]');
    expect(lines[3]).toEqual('[  13  14  15    ]');
  });

  it ('should print a not solved puzzle', () => {
    // Given
    const board = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 0, 11, 12], [13, 10, 14, 15]];
    // When
    const output = printPuzzle(board);
    // Then
    const lines = output.split(/\n/);
    expect(lines.length).toEqual(5); // 5 because of the new line character on the last line
    expect(lines[0]).toEqual('[   1   2   3   4]');
    expect(lines[1]).toEqual('[   5   6   7   8]');
    expect(lines[2]).toEqual('[   9      11  12]');
    expect(lines[3]).toEqual('[  13  10  14  15]');
  })
});