/**
 * Shallow copy object
 * 
 * @param {*} obj 
 * @returns shallowed copy object
 */
const shallowCopy = (obj) => {
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
const deepCopy = (obj) => {
  let result = obj;
  if (typeof obj === 'object' || obj !== null) {
    result = recursiveShallowCopy(obj);
  }
  return result;
};

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