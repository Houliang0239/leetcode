// 给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。

// 请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。

// 注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。为了应对这种情况，nums1 的初始长度为 m + n，其中前 m 个
// 元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。

// 示例 1：

// 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// 输出：[1,2,2,3,5,6]
// 解释：需要合并 [1,2,3] 和 [2,5,6] 。
// 合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // 估计leetcode不支持这种赋值。。。
  // nums1 = nums1.concat(nums2).sort().splice(n, m+n)
  // return nums1
  if (m == 0) {
    if (n != 0) {
      for (let i = 0; i < n; i++) {
        nums1[i] = nums2[i];
      }
    }
    else return;
  }

  if (n == 0) {
    return;
  }

  let index2 = n - 1;
  let index = 1;
  for (let i = m - 1; i >= 0; i--) {
    if (index2 < 0) break;
    if (nums1[i] > nums2[index2]) {
      nums1[n + m - index] = nums1[i];
      index++;
    } else {
      nums1[n + m - index] = nums2[index2];
      index++;
      index2--;
      i++;
    }
  }
  if (index2 >= 0) {
    for (let i = 0; i <= index2; i++) {
      nums1[i] = nums2[i];
    }
  }
  return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

console.log(merge([0], 0, [1], 1));

console.log(merge([1, 0], 1, [2], 1));
console.log(merge([2, 0], 1, [1], 1));
