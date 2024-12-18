import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Sidebar from "./components/Sidebar";

import ResponsiveTable from "./components/ReponsiveTable";
import BeforeAndAfter from "./components/BeforeAndAfter/BeforeAndAfter";

function App() {
  return (
    <div className="d-flex w-100">
      <Sidebar />

      <div className=" h-auto w-100 ">
        <ResponsiveTable />
        <BeforeAndAfter />
      </div>
    </div>
  );
}

export default App;
