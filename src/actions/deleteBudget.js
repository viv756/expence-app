import { redirect } from "react-router-dom";
import { deleteItem, getAllMatchingItems } from "../helpers";
import { toast } from "react-toastify";

export function deleteBudget({ params }) {
  try {
    deleteItem({
      key: "budgets",
      id: params.id,
    });

    const associatedExpences = getAllMatchingItems({ category: "expences", key: "budgetId", value: params.id });

    associatedExpences.forEach((expence) => {
      deleteItem({
        key: "expences",
        id: expence.id,
      });
    });

    toast.success("Budget deleted successfully!.");
  } catch (error) {
    throw new Error("There was a problem deleting your budget.");
  }

  return redirect("/");
}
