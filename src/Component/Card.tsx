import type { RootState } from "../Redux/Reducers/rootReducer";
import { useSelector } from "react-redux";

interface MusicCardPropType {
  trackUrl: string,
  trackName :string
}

export default function MusicCard({trackUrl , trackName} : MusicCardPropType) {

  const mode = useSelector((state : RootState) => state.mode.mode)
  return (
    <div className={` max-h-64 min-h-60 flex flex-col gap-2 transition-opacity ease-in-out min-w-48 p-3 rounded-md  ${mode ? 'bg-[#eeeeeec9] ' : 'hover:bg-gradient-to-b from-10% to-[#50505047] bg-blend-color-burn shadow-md'}`}>
      <img src={trackUrl} className={`h-40 rounded-xl shadow-2xl ${mode ? '':'shadow-black'}`}></img>
      <div >{trackName}</div>
    </div>
  );
}
