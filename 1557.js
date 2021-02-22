/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = (n, edges) => Array.from(edges.reduce((total, [, curr]) => { total.delete(curr); return total }, new Set(new Array(n).keys())))