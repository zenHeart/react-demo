/**
 * 实现上述 tic toc 棋盘的效果
 */
import ReactDOM from 'react-dom';
import React from 'react';

function Square (props) {
  return (
    <button className="square" onClick={props.onClick}>{props.value}</button>
  );
}

class Board extends React.Component {
  renderSquare (i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick (i)}
      />
    );
  }

  render () {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare (0)}
          {this.renderSquare (1)}
          {this.renderSquare (2)}
        </div>
        <div className="board-row">
          {this.renderSquare (3)}
          {this.renderSquare (4)}
          {this.renderSquare (5)}
        </div>
        <div className="board-row">
          {this.renderSquare (6)}
          {this.renderSquare (7)}
          {this.renderSquare (8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  
	
  renderGameInfo (status,moves) {
    return (
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    );
  }
  handleClick (i) {
    if (this.state.squares[i]) {
      console.log ('already has piece');
      return;
    }
    let current = this.state.squares.slice ();
    current[i] = this.state.xIsNext ? 'X' : 'O';

    this.setState ({
      squares: current,
      xIsNext: !this.state.xIsNext,
    });
  }
  constructor (props) {
    super (props);
    this.state = {
      squares: Array (9).fill (null),
      xIsNext: true,
    };
  }
  render () {
    return (
      <div className="game">
        <Board
          squares={this.state.squares}
          onClick={i => this.handleClick (i)}
        />
        {this.renderGameInfo('demo',1)}
      </div>
    );
  }
}

ReactDOM.render (<Game />, document.getElementById ('root1'));
