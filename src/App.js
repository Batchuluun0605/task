import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className=" d-flex w-auto ">
      <Sidebar />
      <div className="  text-white w-100 "></div>
    </div>
  );
}

export default App;
