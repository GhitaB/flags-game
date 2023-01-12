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

  const block_type = (number) => {
    return {0: 'empty', 1: 'wall', 2: 'start', 3: 'flag'}[number];
  };

  return (
    <div className="App">
      <div className="board">
        {board.map((row, i) => (
          <div key={i} className="row">
            {row.map((col, j) => (
              <div key={j} className={block_type(col)}>
                {block_type(col)}
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
