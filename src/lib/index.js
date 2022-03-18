export const setDataInLocalStorage = (key, data) => {
  //set items in local storage
  localStorage.setItem(key, JSON.stringify(data));
};

export const getDataInLocalStorage = (key) => {
  //retrieve items from local storage
  return JSON.parse(localStorage.getItem(key)) || null;
};
