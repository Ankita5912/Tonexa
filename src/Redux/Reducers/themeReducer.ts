import {
  ORANGE_THEME,
  BLUE_THEME,
  PURPLE_THEME,
  GRAY_THEME,
} from "../Actions/themeAction";
import type { ThemeActionTypes, ThemePayload } from "../Actions/themeAction";

const initialState: ThemePayload = {
  primaryColor: "#ffffff",
  secondaryColor: "#f0f0f0",
  textColor: "#000000",
};

const themeReducer = (
  state = initialState,
  action: ThemeActionTypes
): ThemePayload => {
  switch (action.type) {
    case ORANGE_THEME:
      return {
        primaryColor: "#F46B45",
        secondaryColor: "#EEA849",
        textColor: "#000000",
      };
    case BLUE_THEME:
      return {
        primaryColor: "#4776E6",
        secondaryColor: "#8E54E9",
        textColor: "#000000",
      };
    case PURPLE_THEME:
      return {
        primaryColor: "#99A5FF",
        secondaryColor: "#BE99FF",
        textColor: "#000000",
      };
    case GRAY_THEME:
      return {
        primaryColor: "#E1F7F9",
        secondaryColor: "#9EFFEF",
        textColor: "#000000",
      };
    default:
      return state;
  }
};

export default themeReducer;
