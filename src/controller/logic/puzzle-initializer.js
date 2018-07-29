/**
 * Initializes a two dimensional board with the given size.
 * Default size is 4.
 * After initialization, the board is in solved state.
 */
export const initializeBoard= (size = 4) => {
  const board = [];
  const sizeSquared = size * size;
  for (let r = 0; r < size; ++r) {
    const row = [];
    for (let c = 0; c < size; ++c) {
      const value = (r * size + c + 1) % sizeSquared;
      row.push(value);
    }
    board.push(row);
  }
  return board;
};