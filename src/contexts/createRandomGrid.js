/**
 * Assign all the cells random values for whether they are active or not
 * using the probActive value
 */
const createRandomGrid = (n, probActive) => {
    const grid = []

    for (let i = 0; i < n; i++) {
        const row = []
        for (let j = 0; j < n; j++) {
            row.push(Math.random() < probActive)
        }
        grid.push(row)
    }

    return grid
}

export default createRandomGrid
