import { useState } from "react";
import { Link } from "react-router-dom";
import TonexaLogo from '../assets/TonexaLogo.png';
import { Moon, Sun, Bell } from 'lucide-react';
import Notification from "./Notification";
import { useSelector, useDispatch } from "react-redux";
import { darkMode, lightMode } from "../Redux/Actions/modeActions";
import type { RootState } from "../Redux/Reducers/rootReducer"; 
import type { AppDispatch } from "../Redux/store";

export default function Navbar() {

  const mode = useSelector((state: RootState) => state.mode.mode);
  const dispatch = useDispatch<AppDispatch>();

  const [notification, setNotification] = useState<boolean>(false);
  const [profileOption, setprofileOption] = useState<boolean>(false);
   
  const handleToggle = () => dispatch(mode ? lightMode() : darkMode());

  //type of navSubitems
  interface NavSubItem {
    text: string;
    isActive: boolean;
    path: string;
  }

  //type of Navitem
  interface NavItem {
    img: string;
    Name: string;
    NavsubItems: NavSubItem[];
    profile: string;
  }

  //Object containing navitem
  const navitems: NavItem = {
    img: TonexaLogo,
    Name: "Tonexa",
    NavsubItems: [
      { text: "Home", isActive: false, path: "/home" },
      { text: "About", isActive: false, path: "/about" },
      { text: "Services", isActive: false, path: "/services" },
      { text: "Contact", isActive: false, path: "/contact" },
    ],
    profile: "", 
  };

  //destructuring some keys from object
  const { img, Name, profile } = navitems;

  const [navsubItems, setNavsubItems] = useState<NavSubItem[]>(
    navitems.NavsubItems
  );

  const handleLink = (index: number) => {
    const updated = navsubItems.map((item, i) => ({
      ...item,
      isActive: i === index,
    }));
    setNavsubItems(updated);
  };

  return (
    <div className={`flex justify-between items-center h-16 px-6 absolute top-0 w-full py-3 z-50 border-b  ${mode ? "border-black/20" : "border-white/25" }`}>
      <div className="flex items-center gap-1">
        <img src={img} alt="Logo" className="h-8" />
        <h1 className="text-2xl font-extrabold font-roboto tracking-wider antialiased">{Name}</h1>
      </div>

      <div className="flex gap-6">
        {navsubItems.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            onClick={() => handleLink(index)}
            className={`transition-colors duration-200 ${
              item.isActive ? "text-amber-400 font-semibold" : ""
            }`}
          >
            {item.text}
          </Link>
        ))}
      </div>

      <div className={`w-xs py-1 px-2.5 rounded-md h-8 ${mode ? 'bg-black/20' : 'bg-white/20'}`}>
        <input type="text" className="w-full outline-none h-full " placeholder="Search . . . ." />
      </div>

      <div className="flex items-center gap-8">
        <div onClick={handleToggle}>{mode ? <Moon strokeWidth={2} size={20} /> : <Sun size={20} strokeWidth={2} />}</div>
        <div className="" onMouseEnter={() =>{setNotification(true)}}  onMouseLeave={() =>{setNotification(false)}}><Bell strokeWidth={2} size={20} />{notification ? <Notification/> :<></>}</div>
        <div>
          <img src={profile} alt="Profile" className="w-8 h-8 rounded-full" onClick={() => { setprofileOption(!profileOption) }} />
          {profileOption ? 
          <div className={`fixed right-5 top-16 rounded-md bg-inherit w-fit p-6 flex flex-col gap-2 border   ${mode ? 'border-black/20' : 'border-white/25'}`}>
          <div>
            <span>Account</span>
          </div>
          <div>
            <span>Settting</span>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="">Theme</h1>
            <div className="flex gap-2">
              <div className="h-6 w-6 bg-[#F46B45] rounded-full" />
              <div className="h-6 w-6 bg-[#4776E6] rounded-full" />
              <div className="h-6 w-6 bg-[#99A5FF] rounded-full" />
              <div className="h-6 w-6 bg-[#E1F7F9] rounded-full" />
            </div>
          </div>
        </div> : <></>}
        </div>
      </div>


    </div>
  );
}
