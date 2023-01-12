import './App.css';
import React, { useState } from 'react';

function App() {
  const levels = {
    0: [
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 2, 1],
    [1, 1, 1, 1]
    ],

    1: [
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 1, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 2, 1],
    [1, 1, 1, 1]
    ],

    2: [
    [1, 1, 1, 1, 1, 1],
    [1, 0, 0, 1, 2, 1],
    [1, 1, 0, 1, 0, 1],
    [1, 0, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1]
    ],

    3: [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 2, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]
  };

  // Current level
  const [level, setLevel] = useState(0);

  // Current position in map
  const [currentPosition, setCurrentPosition] = useState({row: 1, col: 1});

  // Message
  const [successMessage, setSuccessMessage] = useState("msg-no");

  // Next level
  const [nextLevel, setNextLevel] = useState("disabled");

  const block_type = (row, col, a_type) => {
    // Convert map value to class name for a position in map
    const block = {0: 'empty', 1: 'wall', 2: 'start', 3: 'flag'}[a_type];
    let class_name = block;
    if(currentPosition.row === row && currentPosition.col === col) {
      class_name += " now";
    }
    return class_name;
  };

  const check_direction = (direction) => {
    // return the value in map for a wanted direction
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

    return levels[level][row][col];
  }

  const button_class = (direction) => {
    // return the updated button class name for this moment in game
    const check = check_direction(direction);
    if (check === 1) {
      return "disabled";
    } else {
      return "enabled";
    }
  }

  const check_goal = (row, col) => {
    if (levels[level][row][col] === 2) {
      setSuccessMessage("msg-yes");
      setNextLevel("enabled");
    } else {
      setSuccessMessage("msg-no");
    }
  }

  const move = (direction) => {
    // update current position based on direction (no validation included)
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
    check_goal(row, col);
  }

  return (
    <div className="App">
      <h1>Level 1</h1>
      <p>Go to blue destination clicking the buttons.</p>
      <div className="board">
        {levels[level].map((row, i) => (
          <div key={i} className="row">
            {row.map((col, j) => (
              <div key={j} className={block_type(i, j, col)}>
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

        <div>
          <button className={nextLevel} onClick={() => {
            setLevel(level + 1);
            setCurrentPosition({row: 1, col: 1});
            setSuccessMessage("msg-no");
            setNextLevel("disabled");
          }}>
            Next level
          </button>
        </div>
      </div>

      <div className={successMessage}>
        Ați ajuns la destinație.
      </div>
    </div>
  );
}

export default App;
