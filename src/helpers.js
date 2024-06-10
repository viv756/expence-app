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
export const createExpence = ({ name, amount, budgetId }) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    amount: +amount,
    budgetId: budgetId,
  };

  const existingExpences = fetchdata("expences") ?? [];
  return localStorage.setItem("expences", JSON.stringify([...existingExpences, newItem]));
};
// delete item
export const deleteItem = ({ key }) => {
  return localStorage.removeItem(key);
};

// total spent by budget
export const calculateSpentByBudget = (budgetId) => {
  const expenses = fetchdata("expences") ?? [];
  const budgetSpent = expenses.reduce((acc, expense) => {
    //  check if items expense.id=== budgetId i passed in
    if (expense.budgetId !== budgetId) return acc;
    // add the current amount to my total
    return (acc += expense.amount);
  }, 0);
  return budgetSpent;
};

// Formating
export const formatDateToLocaleString = (epoch) => {
  return new Date(epoch).toLocaleDateString()
}
// formating percentage
export const formatPercenteage = (amt) => {
  return amt.toLocaleString(undefined, {
    style: "percent",
    minimumFractionDigits: 0,
  });
};

// format currency
export const formatCurrency = (amt) => {
  return amt.toLocaleString(undefined, {
    style: "currency",
    currency: "INR",
  });
};
