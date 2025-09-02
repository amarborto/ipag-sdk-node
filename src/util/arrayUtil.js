class ArrayUtil {
  static get(path, obj, defaultValue = null) {
    const keys = path.split('.');
    let result = obj;
    for (const key of keys) {
      if (result === null || result === undefined) {
        return defaultValue;
      }
      result = result[key];
    }
    return result === undefined ? defaultValue : result;
  }

  static extractStrings(data) {
    return Object.values(data).reduce((acc, value) => {
      if (typeof value === 'string' && isNaN(value)) {
        return acc.concat(value);
      } else if (typeof value === 'object' && value !== null) {
        return acc.concat(ArrayUtil.extractStrings(value));
      }
      return acc;
    }, []);
  }

  static isArray(value) {
    return Array.isArray(value);
  }
  
  static isEmpty(array) {
    return !Array.isArray(array) || array.length === 0;
  }
}

module.exports = ArrayUtil;
