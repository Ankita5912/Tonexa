import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import {LogOut} from 'lucide-react';
// import { darkMode, lightMode } from "../Redux/Actions/modeActions";
import type { RootState } from "../Redux/Reducers/rootReducer";
// import type { AppDispatch } from "../Redux/store";
// import { logout } from "../Redux/Actions/authAction";
// import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

interface sidebarProp {
  value : boolean
}


export default function Sidebar({ value}: sidebarProp) {
  const mode = useSelector((state: RootState) => state.mode.mode);
  // const dispatch = useDispatch<AppDispatch>();
  
  // const theme = useSelector((state: RootState) => state.theme);
  // const user = useSelector((state: RootState) => state.auth.user);

  interface NavSubItem {
    text: string;
    isActive: boolean;
    path: string;
  }
  
  //type of Navitem
  interface NavItem {
    Name: string;
    NavsubItems: NavSubItem[];
    profile: string;
  }

  const navitems: NavItem = {
    Name: "Tonexa",
    NavsubItems: [
      { text: "Home", isActive: false, path: "/home"},
      { text: "Albums", isActive: false, path: "/albums"},
      { text: "Tracks", isActive: false, path: "/tracks"},
      { text: "Genre", isActive: false, path: "/genre"},
    ],
    profile: "",
  };

  const [navsubItems, setNavsubItems] = useState<NavSubItem[]>(
    navitems.NavsubItems
  );

  //function to change the color of nav bar items when particular link is open according to theme color
  const handleLink = (index: number) => {
    const updated = navsubItems.map((item, i) => ({
      ...item,
      isActive: i === index,
    }));
    setNavsubItems(updated);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth); //Firebase logout
      // Don't dispatch logout() here if you're using Firebase listener.
      // The listener will automatically dispatch logout().
      alert("logout successfull")
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };


  return (
    <div className={`h-full  sm:w-[20%] w-[50%] flex flex-col fixed z-30 sm:pl-10 pl-6 sm:px-8 px-4 sm:p-8 p-4 left-0  ${mode ? " bg-[#eeeeeec9]  text-[#444950] font-normal" : " bg-[#28282844] text-inherit"} ${value ?'flex':'hidden' }`}>
      {/* <div className="absolute right-8 top-20" onClick={()=> show(false)}><ArrowLeft size={18}/></div> */}
      <div className="flex flex-col gap-2 mt-20">
        {navsubItems.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            onClick={() => handleLink(index)}
            className={`transition-colors duration-200 antialiased tracking-wide font-poppins text-sm rounded-sm  p-1.5 ${
              item.isActive ? `text-[var(--primary-color)] font-medium ${mode ? 'bg-[]':'bg-[#50505047]'}` : ""
            }`}
          >
            {item.text}
          </Link>
        ))}
      </div>

      <div className="absolute bottom-5 flex gap-2 items-center cursor-pointer">
        <LogOut size={18}/>
        <div className="" onClick={handleLogout}>Logout</div>
      </div>

    </div>
  );
}
