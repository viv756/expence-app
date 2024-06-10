import { calculateSpentByBudget, formatCurrency, formatPercenteage } from "../helpers";

const BudgetItem = ({ budget }) => {
  const { id, name, amount, color } = budget;
  const spent = calculateSpentByBudget(id);
  return (
    <div className="budget" style={{"--accent":color}}>
      <div className="progress-text">
        <h3>{name}</h3>
        <p>{formatCurrency(amount)} Budgeted</p>
      </div>
      <progress max={amount} value={spent}>
        {/* persentage */}
        {formatPercenteage(spent / amount)}
      </progress>
      <div className="progress-text">
        <small>{formatCurrency(spent)}spent</small>
        <small>{formatCurrency(amount - spent)}remaining</small>
      </div>
    </div>
  );
};

export default BudgetItem;
