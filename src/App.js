import React, { Component } from 'react';
import styled from 'styled-components';
import { switchProp } from 'styled-tools';
import Puzzle from './view/Puzzle';
import GameController from "./controller/game-controller";

const Main = styled.main`
  display: flex;
  justify-content: center;
`;

const PuzzleWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin-top: 20px;
  opacity: ${switchProp('isSolving', {
    true: '0.6',
    false: '1',
})}
`;

const StyledButton = styled.button`
  width: 100%;
  margin-top: 20px;
  padding: 10px;
  font-size: 20px; 
`;

const PuzzleSolvingIndicator = styled.div`
  display: inline-block;
  margin-top: 20px;
  text-align: center;
`;

const PuzzleSolvingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

class App extends Component {

  constructor(props) {
    super(props);
    this.gameController = new GameController(4);
    this.state = {
      board: this.gameController.getBoard(),
      isSolving: false,
    }
  }

  restartGame() {
    this.gameController.resetPuzzle();
    this.setState({
      ...this.state,
      board: this.gameController.getBoard(),
      isSolving: false,
    })
  }

  moveTileAtPosition(rowIndex, colIndex) {
    this.gameController.moveTile(rowIndex, colIndex);
    this.setState({
      ...this.state,
      board: this.gameController.getBoard(),
    })
  }

  solveGame() {
    this.movesToSolveTheGame = this.gameController.solvePuzzle();
    this.setState({
      ...this.state,
      isSolving: true,
    });
    this.invtervalId = setInterval(
      () => this.solveGameNextMove(),
      200
    );
  }

  solveGameNextMove() {
    if (this.movesToSolveTheGame.length === 0) {
      clearInterval(this.invtervalId);
      this.setState({
        ...this.state,
        isSolving: false,
      });
    } else {
      this.moveTileAtPosition(this.movesToSolveTheGame[0].row, this.movesToSolveTheGame[0].col);
      this.movesToSolveTheGame.splice(0, 1);
    }
  }

  render() {
    const { board, isSolving } = this.state;
    return (
      <Main>
        <PuzzleWrapper isSolving={isSolving}>
          {isSolving && <PuzzleSolvingOverlay/>}
          <Puzzle board={board}
                  moveTileAtPosition={(rowIndex, colIndex) => this.moveTileAtPosition(rowIndex, colIndex)}
                  isSolved={this.gameController.isPuzzleSolved()}
          />
          <StyledButton onClick={() => this.restartGame()}>Restart</StyledButton>
          <StyledButton onClick={() => this.solveGame()}>Solve</StyledButton>
          {isSolving && <PuzzleSolvingIndicator>Solving... (please wait)</PuzzleSolvingIndicator>}
        </PuzzleWrapper>
      </Main>
    );
  }
}

export default App;
