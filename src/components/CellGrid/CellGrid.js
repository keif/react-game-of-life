import React from 'react'
import './CellGrid.css'
import Cell from "./Cell/Cell";

const CellGrid = ({ grid, dispatch }) => {
    return (
        <>
            { grid.map((row, rowIdx) => {
                return row.map((active, colIdx) => (
                    <Cell
                        key={ `${ rowIdx }-${ colIdx }` }
                        row={ rowIdx }
                        col={ colIdx }
                        active={ active }
                        dispatch={ dispatch }
                    />
                ))
            }) }
        </>
    )
}

export default CellGrid
