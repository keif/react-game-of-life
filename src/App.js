import './App.css';
import Game from "./components/Game/Game";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Conway's the Game of Life in React</h1>
            </header>
            <Game/>
        </div>
    );
}

export default App;
