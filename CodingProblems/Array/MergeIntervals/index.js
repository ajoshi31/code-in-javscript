/*
LEET CODE 56. Merge Intervals
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping
intervals, and return an array of the non-overlapping intervals that cover all the intervals
in the input.

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
*/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {

    let res = []
    if (intervals.length === 0) {
        return res;
    }

    // Sorting based on starting position
    intervals.sort((a, b) => a[0] - b[0]);

    let [start, end] = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        
        if (intervals[i][0] <= end) {
            end = Math.max(end, intervals[i][1]);
        } else {
            res.push([start, end]);
            [start, end] = intervals[i];
        }
    }
    res.push([start, end]);
    return res;
};

let intervals = [[1, 3], [8, 10], [2, 6], [15, 18]];
console.log(merge(intervals));