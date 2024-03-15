// usage for getting = key : '_tkn'
export const getFromLocalStorage = (key) => {
  return window.localStorage.getItem(key);
};

// usage for setting = key: '_tkn':'token'
export const setToLocalStorage = (key, value) => {
  window.localStorage.setItem(key, value);
};

export const overwriteToLocalStorage = (key, value) => {
  window.localStorage.setItem(key, value);
};

export const removeKeyFromLocalStorage = (key) => {
  window.localStorage.removeItem(key);
};
