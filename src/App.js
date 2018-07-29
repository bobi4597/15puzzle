import React, { Component } from 'react';
import styled from 'styled-components';
import Puzzle from './view/Puzzle';
import GameController from "./controller/game-controller";

const PuzzleWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

const StyledButton = styled.button`
  width: 100%;
  margin-top: 20px;
  padding: 10px;
  font-size: 20px; 
`;

class App extends Component {

  constructor(props) {
    super(props);
    this.gameController = new GameController(4);
    this.state = {
      board: this.gameController.getBoard(),
    }
  }

  restartGame() {
    this.gameController.resetPuzzle();
    this.setState({
      ...this.state,
      board: this.gameController.getBoard(),
    })
  }

  moveTileAtPosition(rowIndex, colIndex) {
    this.gameController.moveTile(rowIndex, colIndex);
    this.setState({
      ...this.state,
      board: this.gameController.getBoard(),
    })
  }

  render() {
    const { board } = this.state;
    return (
      <PuzzleWrapper>
        <Puzzle board={board}
                moveTileAtPosition={(rowIndex, colIndex) => this.moveTileAtPosition(rowIndex, colIndex)}
                isSolved={this.gameController.isPuzzleSolved()}
        />
        <StyledButton onClick={() => this.restartGame()}>Restart</StyledButton>

      </PuzzleWrapper>
    );
  }
}

export default App;
