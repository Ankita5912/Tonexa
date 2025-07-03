import { BrowserRouter } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Sidebar from "./Component/Sidebar";
// import { lightMode, darkMode } from "./Redux/Actions/modeActions";
import type { RootState } from "./Redux/Reducers/rootReducer";
import { useSelector } from "react-redux";
import { FirebaseListener } from "./FirebaseListener";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Home from "./Pages/Home";

function App() {
  const mode = useSelector((state: RootState) => state.mode.mode);
  const [showSidebar, setSidebar] = useState<boolean>(true);

  return (
    <div
      className={`h-screen w-screen ${
        mode ? "bg-white text-black/85" : "bg-black text-white/90"
      }`}
    >
      <BrowserRouter>
        <FirebaseListener>
          <div className="flex h-screen w-screen overflow-hidden">
            {/* Sidebar */}
            <Navbar />
            {/* Main content area */}
            <div
              className={`relative grid w-screen overflow-hidden grid-cols-5`}
            >
              
              <div className={` ${showSidebar ?'fixed':'hidden'}`}>
                <Sidebar value={showSidebar} />
              </div>

              <main className={`relative overflow-auto  mt-20 m-4 rounded-md ${mode? "" :"bg-[#28282844]"} ${showSidebar ?'col-start-2 col-span-4' : 'col-start-1 col-span-5'}`}>
              
                <div className="fixed md:flex hidden">
                  <div className="h-9 w-9 bg-[#282828ba] rounded-full place-items-center place-content-center" onClick={()=> setSidebar(false)}><ArrowLeft size={18}/></div>
                  <div className="h-9 w-9 bg-[#282828ba] rounded-full place-items-center place-content-center" onClick={()=> setSidebar(true)}><ArrowRight size={18}/></div>
                </div>
                
                <Home/>
              </main>
            </div>
          </div>
        </FirebaseListener>
      </BrowserRouter>
    </div>
  );
}

export default App;
