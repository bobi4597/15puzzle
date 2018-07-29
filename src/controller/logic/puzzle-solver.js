import PriorityQueue from 'js-priority-queue';
import {initializeBoard} from './puzzle-initializer';
import {findEmptyTilePosition, swap} from './common-utils';
import directions from './directions';

export const isSolved = (board) => {
  const size = board.length;
  const squareOfSize = size * size;

  for (let rowIndex = 0; rowIndex < size; ++rowIndex) {
    for (let colIndex = 0; colIndex < size; ++colIndex) {
      const expectedValue = (rowIndex * size + colIndex + 1) % squareOfSize;
      if (board[rowIndex][colIndex] !== expectedValue) {
        return false;
      }
    }
  }

  return true;
};

export const solve = (board) => {
  const cameFrom = aStar(board);
  return extractSteps(cameFrom, board.length);
};

/**
 * The A* algorithm, using manhattan distance as heuristic function.
 */
const aStar = (board) => {

  const size = board.length;

  const gScore = new Map();
  const fScore = new Map();
  const openSet = new Set();
  const priorityQueue = new PriorityQueue({comparator: (n1, n2) => n1.fScore - n2.fScore});
  const closedSet = new Set();
  const cameFrom = new Map();

  const startNode = boardToStr(board);
  const goalNode = boardToStr(initializeBoard(size));

  gScore.set(startNode, 0);
  fScore.set(startNode, manhattanDistance(board));

  priorityQueue.queue({
    strNode: startNode,
    fScore: fScore.get(startNode),
  });
  openSet.add(startNode);

  while (priorityQueue.length > 0) {

    const current = priorityQueue.dequeue();
    openSet.delete(current.strNode);

    if (current.strNode === goalNode) {
      return cameFrom;
    }
    closedSet.add(current.strNode);

    const currentBoard = strToBoard(current.strNode, size);
    const emptyTile = findEmptyTilePosition(currentBoard);

    // for each neighbour
    for (let directionIndex = 0; directionIndex < 4; ++directionIndex) {
      const dir = directions[directionIndex];
      const neighbourRow = emptyTile.row + dir.row;
      const neighbourCol = emptyTile.col + dir.col;

      if (neighbourRow >= 0 && neighbourRow < size && neighbourCol >= 0 && neighbourCol < size) {
        const neighbourBoard = cloneBoard(currentBoard);
        swap(neighbourBoard, emptyTile.row, emptyTile.col, neighbourRow, neighbourCol);

        const neighbourNode = boardToStr(neighbourBoard);
        if (closedSet.has(neighbourNode)) {
          continue;
        }

        const neighbourTentativeGScore = gScore.get(current.strNode) + 1;

        gScore.set(neighbourNode, neighbourTentativeGScore);
        fScore.set(neighbourNode, gScore.get(neighbourNode) + manhattanDistance(neighbourBoard));

        // add the neighbour to the queue if it is not there, or if the current score is smaller than the previous
        if (!openSet.has(neighbourNode) || neighbourTentativeGScore < gScore.get(neighbourNode)) {
          cameFrom.set(neighbourNode, {
            parentNode: current.strNode,
            tileIndex: {
              row: neighbourRow,
              col: neighbourCol,
            },
          });
          openSet.add(neighbourNode);
          priorityQueue.queue({
            strNode: neighbourNode,
            fScore: fScore.get(neighbourNode),
          });
        }
      }
    }
  }
};

/**
 * Extracts the steps to solve the puzzle.
 * The cameFrom map contains entries of the following format:
 * node -> { parentNode, tileIndex: {row, col}}
 * Explanation: this means, which (row, col) to click on order to transition from parentNode to node.
 */
const extractSteps = (cameFrom, size) => {
  const tilesToClick = [];
  let goalNode = boardToStr(initializeBoard(size));
  let current = cameFrom.get(goalNode);
  while (current) {
    tilesToClick.push(current.tileIndex);
    current = cameFrom.get(current.parentNode);
  }
  return tilesToClick.reverse();
};

/**
 * Converts the board into string, by adding comma between the elements.
 */
export const boardToStr = (board) => {
  return board.map(row => row.join(',')).join(',');
};

/**
 * Reconstructs the board from the string.
 */
export const strToBoard = (str, size) => {
  const array = str.split(/,/).map(x => Number(x));
  const board = [];
  for (let i = 0; i < array.length; i += size) {
    board.push(array.slice(i, i + size));
  }
  return board;
};

export const cloneBoard = (board) => {
  return board.map((row) => row.slice());
};

/**
 * The heuristic function for the A* algorithm.
 */
export const manhattanDistance = (board) => {
  const size = board.length;
  let distance = 0;
  for (let rowIndex = 0; rowIndex < size; ++rowIndex) {
    for (let colIndex = 0; colIndex < size; ++colIndex) {
      const value = board[rowIndex][colIndex];
      if (value !== 0) {
        const rowSolved = Math.floor((value - 1) / size);
        const colSolved = (value - 1) % size;
        distance += Math.abs(rowIndex - rowSolved) + Math.abs(colIndex - colSolved);
      }
    }
  }
  return distance;
};