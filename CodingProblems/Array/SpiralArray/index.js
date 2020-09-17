/**
 * Given a positive integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

 Example:

 Input: 3
 Output:
 [
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
 ]
 * @param {number} n
 * @return {number[][]}
 */
let generateMatrix = function (n) {
    // directions: right, down, left, up
    let dir = [[0, +1], [+1, 0], [0, -1], [-1, 0]];

    let matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));

    let di = 0, r = 0, c = 0;
    for (let i = 0; i < n * n; i++) {
        matrix[r][c] = i + 1;
        let tempR = r + dir[di][0],
            tempC = c + dir[di][1];
        // If the array is out of bound or we can go next or not changed direction
        if (matrix[tempR] == null || matrix[tempR][tempC] == null || matrix[tempR][tempC] !== 0) {
            di = (di + 1) % 4;
        }
        r += dir[di][0];
        c += dir[di][1];
    }
    return matrix;
}

let result1 = generateMatrix(3);

result1.forEach(item => {
    console.log("")
    item.forEach(item => console.log(item));
});
