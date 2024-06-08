const generateRandomColor = () => {
  const existinBudgetsLength = fetchdata("budgets")?.length ?? 0;

  return `${existinBudgetsLength +34} 65% 50%`
};

// Loacl Storage
export const fetchdata = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const createBudget = ({ name, amount }) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    amount: +amount,
    color: generateRandomColor(),
  };
  const existinBudgets = fetchdata("budgets") ?? [];
  return localStorage.setItem("budgets", JSON.stringify([...existinBudgets, newItem]));
};

// delete item
export const deleteItem = ({ key }) => {
  return localStorage.removeItem(key);
};
