import { useContext } from "react";
import { DataTable } from "./components/DataTable/DataTable";
import { RangeComponent } from "./components/RangeComponent/RangeComponent";
import { TableContext } from "./store/TableContext";

const App = () => {
  const { inputRange } = useContext(TableContext);
  return (
    <div>
      <RangeComponent />
      <div>{inputRange.N >= 1 && inputRange.M >= 1 && <DataTable />}</div>
    </div>
  );
};

export default App;
