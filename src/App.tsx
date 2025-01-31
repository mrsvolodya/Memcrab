import { useContext } from "react";
import { DataTable } from "./components/DataTable/DataTable";
import { RangeComponent } from "./components/RangeComponent/RangeComponent";
import { TableContext } from "./store/TableContext";

const App = () => {
  const { range } = useContext(TableContext);
  return (
    <>
      <div>
        <RangeComponent />
        {range.N >= 1 && range.M >= 1 && <DataTable />}
      </div>
    </>
  );
};

export default App;
