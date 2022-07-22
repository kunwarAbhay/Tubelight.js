/**
 *
 * @param {Array} arr, a sorted array
 * @param {number} target, target will be searched in the array
 * @param {number} start, Optional, search from start index in the array
 * @param {number} end , Optional, search to end index in the array
 * @returns {number}, index of the target element in the array. -1 if target not found
 */

const binarySearch = (arr, target, start, end) => {
  let low = start || 0;
  let high = end || arr.length - 1;
  let mid;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);

    if (arr[mid] < target) {
      low = mid + 1;
    } else if (arr[mid] > target) {
      high = mid - 1;
    } else {
      return mid;
    }
  }

  return -1;
};

module.exports = binarySearch;
