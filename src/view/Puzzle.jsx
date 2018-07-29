import React from 'react';
import styled from 'styled-components';
import { switchProp } from 'styled-tools';

const StyledPuzzle = styled.div`
  display: inline-flex;
  flex-direction: column;
  border-top: 1px solid black;
  border-left: 1px solid black;
`;

const Row = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: space-even;
`;

const Cell = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  background-color: #ffffcc;
  background-color: ${switchProp('value', {
  0: 'transparent',
})};
`;

const Puzzle = ({ board }) => {
  const rows = board.map((row, rowIndex) => (
    <Row key={rowIndex}>
      {row.map((value, colIndex) => <Cell key={colIndex} value={value}>{value !== 0 ? value : ''}</Cell>)}
    </Row>
  ));

  return <StyledPuzzle>{rows}</StyledPuzzle>
};

export default Puzzle;