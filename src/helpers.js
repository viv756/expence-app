// Loacl Storage
export const fetchdata = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

// delete item
export const deleteItem = ({ key }) => {
  return localStorage.removeItem(key);
};
