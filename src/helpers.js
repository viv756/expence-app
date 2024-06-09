export const waait = () => {
  return new Promise((res) => setTimeout(res, Math.random() * 2000));
};

// color
const generateRandomColor = () => {
  const existinBudgetsLength = fetchdata("budgets")?.length ?? 0;

  return `${existinBudgetsLength + 34} 65% 50%`;
};

// Loacl Storage
export const fetchdata = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

// create budget
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

// create expence
export const createExpence = ({ name, amount,budgetId }) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    amount: +amount,
    budgetId:budgetId
  };

  const existingExpences = fetchdata("expences") ?? [];
  return localStorage.setItem("expences", JSON.stringify([...existingExpences, newItem]));
};
// delete item
export const deleteItem = ({ key }) => {
  return localStorage.removeItem(key);
};
