import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// import Sidebar from "./components/Sidebar";

import ResponsiveTable from "./components/ReponsiveTable";
import BeforeAndAfter from "./components/BeforeAndAfter/BeforeAndAfter";
import Grid from "./components/Grid/Grid";
import Text from "./components/Text/Text";
import Img from "./components/Img/Img";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="d-flex w-100 align-items-start">
      <div className=" position-sticky">
        <Sidebar />
      </div>

      <div className=" h-auto w-100 ">
        {/* <ResponsiveTable />
        <BeforeAndAfter /> */}
        {/* <Grid /> */}
        {/* <Text /> */}
        <Img />
      </div>
    </div>
  );
}

export default App;
