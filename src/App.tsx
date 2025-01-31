import "./App.css";
import { DataTable } from "./components/DataTable/DataTable";
import { RangeComponent } from "./components/RangeComponent/RangeComponent";

const App = () => {
  return (
    <>
      <div>
        <RangeComponent />
        <DataTable />
      </div>
    </>
  );
};

export default App;
