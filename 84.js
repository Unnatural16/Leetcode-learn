var largestRectangleArea = function(heights) {
    if (!heights || !heights.length) return 0

    heights.unshift(0), heights.push(0)

    const stack = [] 
    let maxArea = 0
    
    for (let i = 0; i < heights.length; i++) {
        while (stack.length && heights[ stack[stack.length - 1] ] > heights[i]) {
            const j = stack.pop()
            maxArea = Math.max(maxArea, ( i - stack[stack.length - 1] - 1 ) * heights[j] )
        }
        stack.push(i)
    }

    return maxArea
}
