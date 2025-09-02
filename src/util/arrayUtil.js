const get = (path, obj, defaultValue = null) => {
  const keys = path.split('.');
  let result = obj;
  for (const key of keys) {
    if (result === null || result === undefined) {
      return defaultValue;
    }
    result = result[key];
  }
  return result === undefined ? defaultValue : result;
};

const extractStrings = (data) => {
    return Object.values(data).reduce((acc, value) => {
        if (typeof value === 'string' && isNaN(value)) {
            return acc.concat(value);
        } else if (typeof value === 'object' && value !== null) {
            return acc.concat(extractStrings(value));
        }
        return acc;
    }, []);
};


module.exports = { get, extractStrings };
