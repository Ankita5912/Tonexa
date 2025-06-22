// redux/reducers/rootReducer.ts
import { combineReducers } from "redux";
import modeReducer from "./modeReducer";

const rootReducer = combineReducers({
  mode: modeReducer,

});

export type RootState = ReturnType<typeof rootReducer>; // ✅ this is your actual RootState
export default rootReducer;
