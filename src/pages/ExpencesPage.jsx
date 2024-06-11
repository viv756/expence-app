import { useLoaderData } from "react-router-dom";
import { deleteItem, fetchdata } from "../helpers";
import Table from "../components/Table";
import { toast } from "react-toastify";

export function expencesLoader() {
  const expences = fetchdata("expences");

  return { expences };
}

export async function expenceAction({ request }) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  if (_action === "deleteExpence") {
    try {
      deleteItem({
        key: "expences",
        id: values.expenceId,
      });
      return toast.success("Expence deleted!");
    } catch (error) {
      throw new Error("There was a problem deleting your expence.");
    }
  }
}

const ExpencesPage = () => {
  const { expences } = useLoaderData();
  return (
    <div className="grid-lg">
      <h1>All Expences</h1>
      {expences && expences.length > 0 ? (
        <div className="grid-md">
          <h2>
            Recent Expences <small>({expences.length} total)</small>
          </h2>
          <Table expences={expences} />
        </div>
      ) : (
        <p>No Expenses to show</p>
      )}
    </div>
  );
};

export default ExpencesPage;
