let arr = [1, 8, 6, 2, 5, 4, 8, 3, 7]

function maxArea(height) {
    let result = 0;
    let left = 0;
    let right = height.length - 1;
    while (right - left > 0) {
        if (height[left] >= height[right]) {
            result = Math.max(result, Math.min(height[left], height[right]) * (right - left));
            right--;
        } else {
            result = Math.max(result, Math.min(height[right], height[left]) * (right - left));
            left++;
        }
    }
    return result;
}

maxArea(arr)