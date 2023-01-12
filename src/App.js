import logo from './logo.svg';
import './App.css';

function App() {
  const board = [[0, 2, 3, 0], [2, 2, 1, 0], [0, 0, 0, 0]];

  return (
    <div className="App">
      <div>
        {board.map((row, i) => (
          <div key={i}>
            {row.map((col, j) => (
              <span key={j}>{col}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
