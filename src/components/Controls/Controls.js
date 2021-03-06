import React from 'react'
import './Controls.css'
import Button from "./Button/Button";
import { useGameDispatch } from "../../contexts/game-state";
import { CLEAR_GRID, RANDOMIZE_GRID, START_TICKER, STOP_TICKER } from "../../contexts/context-types.constants";

const Controls = ({ className }) => {
    const dispatch = useGameDispatch()
    const startTicker = () => dispatch({ type: START_TICKER })
    const stopTicker = () => dispatch({ type: STOP_TICKER })
    const randomizeGrid = () => dispatch({ type: RANDOMIZE_GRID })
    const clearGrid = () => dispatch({ type: CLEAR_GRID })

    return (
        <div class={ "controls" }>
            <Button onClick={ randomizeGrid }>Random Grid</Button>
            <Button onClick={ clearGrid }>Clear Grid</Button>
            <Button onClick={ startTicker }>Start Simulation</Button>
            <Button onClick={ stopTicker }>Stop Simulation</Button>
        </div>
    )
}

export default React.memo(Controls)
