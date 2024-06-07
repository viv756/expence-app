// Loacl Storage
export const fetchdata = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
