import './App.css';
import React, { useState } from 'react';

function App() {
  const board = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ];

  const [currentPosition, setCurrentPosition] = useState({row: 1, col: 1});

  const block_type = (row, col, a_type) => {
    const block = {0: 'empty', 1: 'wall', 2: 'start', 3: 'flag'}[a_type];
    let class_name = block;
    if(currentPosition.row === row && currentPosition.col === col) {
      class_name += " now";
    }
    return class_name;
  };


  const check_direction = (direction) => {
    let row = currentPosition.row;
    let col = currentPosition.col;

    if (direction === 'up') {
      row -= 1;
    }

    if (direction === 'down') {
      row += 1;
    }

    if (direction === 'left') {
      col -= 1;
    }

    if (direction === 'right') {
      col += 1;
    }

    return board[row][col];
  }

  const button_class = (direction) => {
    const check = check_direction(direction);
    if (check === 1) {
      return "disabled";
    } else {
      return "enabled";
    }
  }

  const move = (direction) => {
    let row = currentPosition.row;
    let col = currentPosition.col;

    if (direction === 'up') {
      row -= 1;
    }

    if (direction === 'down') {
      row += 1;
    }

    if (direction === 'left') {
      col -= 1;
    }

    if (direction === 'right') {
      col += 1;
    }

    setCurrentPosition({row: row, col: col});
  }

  return (
    <div className="App">
      <div className="board">
        {board.map((row, i) => (
          <div key={i} className="row">
            {row.map((col, j) => (
              <div key={j} className={block_type(i, j, col)}>
                {block_type(i, j, col)}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="controls">
        <button className={button_class("up")} onClick={() => move("up")}>
          Up
        </button>
        <button className={button_class("down")} onClick={() => move("down")}>
          Down
        </button>
        <button className={button_class("left")} onClick={() => move("left")}>
          Left
        </button>
        <button className={button_class("right")} onClick={() => move("right")}>
          Right
        </button>
      </div>

    </div>
  );
}

export default App;
