import React from "react"
import './Rules.css'

const Rules = () => {
    return (
        <div class="rules">
            <h3>Rules of the Game:</h3>
            <ol>
                <li>An inactive (gray) cell will become active (yellow) in the next iteration, if and only if it has 3 active
                    neighbors.</li>
                <li>An active cell will only survive if it has exactly 2 or 3 active neighbors (diagonals included).
                    Otherwise it will die from underpopulation or overpopulation.</li>
                <li>Click on any cells you like to turn them active/inactive.</li>
            </ol>
        </div>
    )
}

export default Rules
