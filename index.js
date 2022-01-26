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