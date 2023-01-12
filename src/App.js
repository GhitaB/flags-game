import logo from './logo.svg';
import './App.css';

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

  const current_position = {row: 1, col: 1};

  const block_type = (row, col, a_type) => {
    const block = {0: 'empty', 1: 'wall', 2: 'start', 3: 'flag'}[a_type];
    let class_name = block;
    if(current_position.row == row && current_position.col == col) {
      class_name += " now";
      console.log("DDDDDDDDDD");
    }
    return class_name;
  };


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
        <button>Up</button>
        <button>Down</button>
        <button>Left</button>
        <button>Right</button>
      </div>

    </div>
  );
}

export default App;
