import { useContext } from "react";
import { DataTable } from "./components/DataTable/DataTable";
import { RangeComponent } from "./components/RangeComponent/RangeComponent";
import { TableContext } from "./store/TableContext";

const App = () => {
  const { tableSize } = useContext(TableContext);
  return (
    <div>
      <RangeComponent />
      <div>{tableSize.N >= 1 && tableSize.M >= 1 && <DataTable />}</div>
    </div>
  );
};

export default App;
