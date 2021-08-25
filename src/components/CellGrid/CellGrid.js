import React from 'react'
import './CellGrid.css'

const CELL_SIZE = 20
const BOARD_WIDTH = 800
const BOARD_HEIGHT = 600

const CellGrid = () => {
    const styles = {
        backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`,
        height: `${BOARD_HEIGHT}px`,
        width: `${BOARD_WIDTH}px`,
    }

    return <>
        <div className="CellGrid" style={styles}></div>
    </>;
}

export default CellGrid
