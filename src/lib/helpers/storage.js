export const setLocalStorage = (key, values) => {
  localStorage.setItem(key, JSON.stringify(values));
};

export const getLocalStorage = (key) =>
  JSON.parse(localStorage.getItem(key)) || null;

export const removeLocalStorageItem = (key) => localStorage.removeItem(key);
