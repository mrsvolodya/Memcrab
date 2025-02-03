import { useContext } from "react";
import { DataTable } from "./components/DataTable/DataTable";
import { RangeComponent } from "./components/RangeComponent/RangeComponent";
import { TableContext } from "./store/TableContext";
import style from "./App.module.scss";

const App = () => {
  const { inputRange } = useContext(TableContext);
  return (
    <div className={style.page}>
      <header>
        <RangeComponent />
      </header>
      <main>
        <section className={style.page_tableSection}>
          {inputRange.N >= 1 && inputRange.M >= 1 && <DataTable />}
        </section>
      </main>
    </div>
  );
};

export default App;
