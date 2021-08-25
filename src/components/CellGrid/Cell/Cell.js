import React from 'react'
import './Cell.css'
import { TOGGLE_CELL } from "../../../contexts/context-types.constants";

const PreMemoizedCell = function Cell({ active, row, col, dispatch }) {
    const cellOnClick = () => dispatch({ type: TOGGLE_CELL, row, col })
    const activeClass = active ? `active` : null

    return (
        <button
            className={`cell ${activeClass}`}
            onClick={ cellOnClick }
        />
    )
}

const Cell = React.memo(PreMemoizedCell)

export default Cell
