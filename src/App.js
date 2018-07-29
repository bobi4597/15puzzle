import React, { Component } from 'react';
import Puzzle from './view/Puzzle';
import GameController from "./controller/game-controller";

class App extends Component {

  constructor(props) {
    super(props);
    this.gameController = new GameController(4);
    this.state = {
      board: this.gameController.getBoard(),
    }
  }

  render() {
    const { board } = this.state;
    return (
      <Puzzle board={board} />
    );
  }
}

export default App;
