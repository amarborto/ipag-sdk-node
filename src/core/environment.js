const PathUtil = require('../util/pathUtil');
const CompositePath = require('../path/compositePath');

class Environment extends CompositePath {
  constructor(url) {
    super();
    this.url = url.replace(new RegExp(`${PathUtil.PATH_SEPARATOR}$`), '');
  }

  getBaseUrl() {
    return this.url;
  }

  getUrlPath(path) {
    return [this.getBaseUrl(), path.replace(new RegExp(`^${PathUtil.PATH_SEPARATOR}`), '')].join(PathUtil.PATH_SEPARATOR);
  }

  setParent(parent) {
    throw new Error("An environment is not supposed to have a parent path");
  }

  getParent() {
    return null;
  }

  joinPath(relative) {
    return this.getUrlPath(relative);
  }

  getPath() {
    return this.getUrlPath('');
  }
}

module.exports = Environment;
