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