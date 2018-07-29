import React from 'react';
import styled from 'styled-components';
import { switchProp } from 'styled-tools';

const PuzzleSolvedIndicator = styled.div`
  border: 20px solid ${switchProp('isSolved', {
    true: 'green',
    false: 'red',
  })};
`;

const StyledPuzzle = styled.div`
  display: inline-flex;
  flex-direction: column;
  border-top: 1px solid black;
  border-left: 1px solid black;
`;

const Row = styled.div`
  display: inline-flex;
  flex-direction: row;
`;

const Cell = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  background-color: #ffffcc;
  background-color: ${switchProp('value', {
  0: 'transparent',
})};
`;

const Puzzle = ({ board, moveTileAtPosition, isSolved }) => {
  const rows = board.map((row, rowIndex) => (
    <Row key={rowIndex}>
      {row.map((value, colIndex) =>
        <Cell key={colIndex}
              onClick={() => moveTileAtPosition(rowIndex, colIndex)}
              value={value}>{value !== 0 ? value : ''}</Cell>)}
    </Row>
  ));

  return (
    <PuzzleSolvedIndicator isSolved={isSolved}>
      <StyledPuzzle>{rows}</StyledPuzzle>
    </PuzzleSolvedIndicator>
  );
};

export default Puzzle;