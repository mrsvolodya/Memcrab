import { useContext } from "react";
import { DataTable } from "./components/DataTable/DataTable";
import { RangeComponent } from "./components/RangeComponent/RangeComponent";
import { TableContext } from "./contexts/TableContext";
import "./App.scss";

const App = () => {
  const { inputRange } = useContext(TableContext);
  return (
    <div className="page">
      <header>
        <RangeComponent />
      </header>
      <main>
        <section className="page__table-section">
          {inputRange.N >= 1 && inputRange.M >= 1 && <DataTable />}
        </section>
      </main>
    </div>
  );
};

export default App;
