import { useLoaderData } from "react-router-dom";
import { fetchdata } from "../helpers";
import Table from "../components/Table"

export function expencesLoader() {
  const expences = fetchdata("expences");

  return { expences };
}

const ExpencesPage = () => {
  const {expences} = useLoaderData()
  return <div className="grid-lg">
    <h1>All Expences</h1>
    {
      expences&& expences.length>0
        ? (
          <div className="grid-md">
            <h2>Recent Expences  <small>({expences.length} total)</small></h2>
           <Table expences={expences}/>
          </div>
):<p>No Expenses to show</p>
    }
  </div>;
};

export default ExpencesPage;
