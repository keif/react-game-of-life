import React, { createContext, useContext, useEffect, useReducer } from 'react'
import createRandomGrid from "./createRandomGrid";

const NUM = 50
const PROB_ACTIVE = 0.3
const DIMENSION = 500
const INITIAL_STATE = {
    grid: createRandomGrid(NUM, PROB_ACTIVE),
    length: Math.floor(DIMENSION / NUM),
    n: NUM,
    probActive: PROB_ACTIVE,
    tickerStarted: false,
    dimension: DIMENSION,
}
const GameStateContext = createContext(INITIAL_STATE)
const GameDispatchContext = createContext(() => INITIAL_STATE)

export function GameStateProvider({ children }) {
    const [ state, dispatch ] = useReducer(reducer, INITIAL_STATE)

    useEffect(() => {
        let cancel = false
        if (state.tickerStarted) {
            const ticker = () => {
                dispatch({ type: 'STEP' })
                if (!cancel) window.requestAnimationFrame(ticker)
            }
            ticker()
        }

        return () => {
            cancel = true
        }
    }, [ state.tickerStarted ])

    return (
        <GameStateContext.Provider value={ state }>
            <GameDispatchContext.Provider value={ dispatch }>
                { children }
            </GameDispatchContext.Provider>
        </GameStateContext.Provider>
    )
}

export function useGameState() {
    return useContext(GameStateContext)
}

export function useGameDispatch() {
    return useContext(GameDispatchContext)
}

/*
  n: the row/column length for the grid
  probActive: probability that a cell becomes active when randomizing
  dimension: the dimension of the svg
  length: length is the length of each cell
  grid: an object containing the active state and a key
*/
const reducer = (state, action) => {
    switch (action.type) {
        case 'ClEAR_GRID':
            return {
                ...state,
                grid: clearCells(state.grid),
                tickerStarted: false
            }
        case 'RANDOMIZE_GRID':
            return {
                ...state,
                grid: createRandomGrid(state.n, state.probActive),
            }
        case 'STEP':
            return {
                ...state,
                grid: updateGrid(state.grid)
            }
        case 'START_TICKER':
            return {
                ...state,
                tickerStarted: true
            }
        case 'STOP_TICKER':
            return {
                ...state,
                tickerStarted: false
            }
        case 'TOGGLE_CELL':
            return {
                ...state,
                grid: toggleCell(state.grid, action.row, action.col)
            }
        default:
            return state
    }
}

/**
 * calculate how many of the neighbors are active
 */
const numberOfActiveNeighbors = (numberGrid, row, col) => {
    const gridSize = numberGrid.length
    let count = 0

    const prevRowIndex = wrapIndex(row - 1, gridSize)
    const nextRowIndex = wrapIndex(row + 1, gridSize)
    const prevColIndex = wrapIndex(col - 1, gridSize)
    const nextColIndex = wrapIndex(col + 1, gridSize)

    const prevRow = numberGrid[prevRowIndex]
    const nextRow = numberGrid[nextRowIndex]
    count += numberGrid[row][prevColIndex] + numberGrid[row][nextColIndex]
    count += prevRow[prevColIndex] + prevRow[col] + prevRow[nextColIndex]
    count += nextRow[prevColIndex] + nextRow[col] + nextRow[nextColIndex]

    return count
}

/**
 * If an index that is too small (< 0) or too large (> gridSize)
 * return the wrapped value.
 */
const wrapIndex = (index, gridSize) => {
    if (0 <= index && index < gridSize) {
        return index
    } else if (index === -1) {
        return gridSize - 1
    } else if (index === gridSize) {
        return 0
    } else {
        throw Error(`No logic for cases where index is ${ index }`)
    }
}

/**
 * Update all cells in the grid according to the Game of Life rules:
 * - Any live cell with fewer than two live neighbours dies, as if by underpopulation.
 * - Any live cell with two or three live neighbours lives on to the next generation.
 * - Any live cell with more than three live neighbours dies, as if by overpopulation.
 * - Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
 *
 * source: https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life
 */
const updateGrid = (grid) => {
    const numberGrid = grid.map(row => row.map(active => (active ? 1 : 0)))

    return grid.map((row, i) => row.map((active, j) => {
        const neighbors = numberOfActiveNeighbors(numberGrid, i, j)
        // Whether dead or alive, exactly 3 neighbors means you're alive
        // otherwise, only if you were alive and have 2 neighbors will you
        // still be alive. Beyond that all other cells should be dead
        return neighbors === 3 || (active && neighbors === 2)
    }))
}

/**
 * Activate (or deactivate) a single cell
 */
const toggleCell = (grid, row, col) => {
    const gridCopy = grid.map(row => [ ...row ])
    gridCopy[row][col] = !gridCopy[row][col]

    return gridCopy
}

/**
 * Deactivate all cells
 */
const clearCells = (grid) => grid.map(row => row.map(() => false))
