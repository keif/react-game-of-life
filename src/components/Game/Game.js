import React from 'react'
import './Game.css'

const CELL_SIZE = 20
const BOARD_WIDTH = 800
const BOARD_HEIGHT = 600

const Game = () => {
    const styles = {
        backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`,
        height: `${BOARD_HEIGHT}px`,
        width: `${BOARD_WIDTH}px`,
    }

    return <>
        <div className="Board" style={styles}></div>
    </>;
}

export default Game
