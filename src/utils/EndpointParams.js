const windowKey = 'endpoint_params';

function getInstance() {
  if (!window[windowKey]) {
    window[windowKey] = {};
  }

  return window[windowKey];
}

export default {
  setParam: function setParam(key, value) {
    const instance = getInstance();

    instance[key] = value;
  },
  getParam: function getParam(key) {
    const instance = getInstance();

    return instance[key];
  },
  getParams: function getParams() {
    return getInstance();
  },
  clearParam: function clearParam(key) {
    const instance = getInstance();

    delete instance[key];
  },
  clearParams: function clearParams() {
    window[windowKey] = null;
  },
};
