import React from "react"
import { useGameDispatch, useGameState } from "../../contexts/game-state";
import CellGrid from "../CellGrid/CellGrid";

const Game = () => {
    const [ { n, dimension, grid }, dispatch ] = [ useGameState(), useGameDispatch() ]

    const styles = {
        gridTemplateColumns: `repeat(${ n }, 1fr)`,
        gridTemplateRows: `repeat(${ n }, 1fr)`,
        height: dimension,
        width: dimension,
    }

    return <div className="CellGrid" style={ styles }>
        <CellGrid grid={ grid } dispatch={ dispatch }/>
    </div>;
}

export default Game
