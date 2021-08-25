import './App.css';
import { GameStateProvider } from "./contexts/game-state";
import Rules from "./components/Rules/Rules";
import Game from "./components/Game/Game";
import Controls from "./components/Controls/Controls";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Conway's the Game of Life in React</h1>
                <h2>Implemented in React</h2>
                <Rules/>
            </header>
            <GameStateProvider>
                <Controls/>
                <Game/>
            </GameStateProvider>
        </div>
    );
}

export default App;
