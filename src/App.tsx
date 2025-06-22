import { BrowserRouter } from "react-router-dom";
import Navbar from "./Component/Navbar";
// import Sidebar from "./Component/Sidebar";
// import { lightMode, darkMode } from "./Redux/Actions/modeActions";
import type { RootState } from "./Redux/Reducers/rootReducer";
import { useSelector } from "react-redux";

function App() {
  
  const mode = useSelector((state: RootState) => state.mode.mode)


  return (
    <div className={`h-screen w-screen ${mode ? "bg-white text-black/85" :"bg-black text-white/90"}`}>
      <BrowserRouter>
        <Navbar />
        {/* <div className="h-screen w-screen grid grid-cols-6 grid-rows-5 overflow-hidden">
        <div className="col-span-5 col-start-2 col-end-7">
          <Navbar/>
        </div>
         <div className="row-span-5 row-start-1 ">
          <Sidebar/>
        </div>

      </div> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
