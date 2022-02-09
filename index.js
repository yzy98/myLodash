function MyLodash() {
  /**
 * Shallow copy object
 * 
 * @param {*} obj 
 * @returns shallowed copy object
 */
  this.shallowCopy = function(obj) {
    let result = obj;
    if (typeof obj === 'object' || obj !== null) {
      result = {...obj};
    }
    return result;
  };

  /**
   * Deep copy object
   * 
   * @param {*} obj 
   * @returns deep copied object
   */
  this.deepCopy = function(obj) {
    let result = obj;
    if (typeof obj === 'object' || obj !== null) {
      result = recursiveShallowCopy(obj);
    }
    return result;
  };

  /**
   * check all data types
   * 
   * @param {*} obj 
   * @returns data type (including null, array...)
   */
  this.typeOf = function(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
  }

  /**
   * camelize string
   * 
   * @param {string} str target string
   * @param {string} interval e.g. '-', '_'
   * @returns camelized string
   */
  this.camelize = function(str, interval) {
    return str
      .split(interval)
      .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
      .join('');
  }

  /**
   * ascend sort number array
   * 
   * @param {array} arr number array
   * @returns ascending array
   */
  this.ascendSort = function(arr) {
    return arr.sort((a, b) => a - b);
  }

  /**
   * descend sort number array
   * 
   * @param {array} arr number array
   * @returns descending array
   */
  this.descendSort = function(arr) {
    return arr.sort((a, b) => b - a);
  }

  /**
   * binary search
   * 
   * @param {*} arr 
   * @param {*} target 
   * @param {*} start 
   * @param {*} end 
   * @returns index of target in the arr, not found them return -1
   */
  this.binarySearch = function(arr, target, start, end = arr.length - 1) {
    const mid = Math.floor((start + end) / 2);

    if (target == arr[mid]) {
      return mid;
    }

    if (start >= end) {
      return -1;
    }

    return target < arr[mid]
      ? this.binarySearch(arr, target, start, mid - 1)
      : this.binarySearch(arr, target, mid + 1, end);
  }

  /**
   * get permutations of provided array
   * 
   * @param {*} arr 
   * @returns array of permutations
   */
  this.getPermutations = function(arr) {
    let permArr = [],
        usedChars = [];

    function permute(input) {
      let i, ch;
      for (i = 0; i < input.length; i++) {
        ch = input.splice(i, 1)[0];
        usedChars.push(ch);
        if (input.length == 0) {
          permArr.push(usedChars.slice());
        }
        permute(input);
        input.splice(i, 0, ch);
        usedChars.pop();
      }
      return permArr
    };

    return permute(arr);
  }
}

const myLodash = new MyLodash();
export default myLodash;

/**
 * Helper method for deep copy
 * 
 * @param {*} obj 
 * @returns 
 */
const recursiveShallowCopy = (obj) => {
  const copy = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      // value type object, keep recursing
      copy[key] = recursiveShallowCopy(obj[key]);
    } else {
      copy[key] = obj[key];
    }
  }
  return copy;
};