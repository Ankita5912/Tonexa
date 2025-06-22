export const ORANGE_THEME = "ORANGE_THEME";
export const BLUE_THEME = 'BLUE_THEME';
export const PURPLE_THEME = 'PURPLE_THEME';
export const GRAY_THEME = 'GRAY-THEME';

export interface ThemePayload {
  primaryColor: string;
  secondaryColor: string;
  textColor: string;
}

export interface orangeThemeAction {
  type: typeof ORANGE_THEME
  payload : ThemePayload
}

export interface blueThemeAction {
  type: typeof BLUE_THEME
  payload : ThemePayload
}

export interface purpleThemeAction {
  type: typeof PURPLE_THEME
  payload : ThemePayload
}

export interface grayThemeAction {
  type: typeof GRAY_THEME,
  payload : ThemePayload
}


export type ThemeActionTypes = orangeThemeAction | blueThemeAction | purpleThemeAction | grayThemeAction;

export const orangeTheme = (payload: ThemePayload): orangeThemeAction => ({ type: ORANGE_THEME, payload});
export const blueTheme = (payload: ThemePayload): blueThemeAction => ({ type: BLUE_THEME, payload });
export const purpleTheme = (payload : ThemePayload): purpleThemeAction => ({ type: PURPLE_THEME, payload });
export const grayTheme = (payload: ThemePayload): grayThemeAction => ({ type: GRAY_THEME, payload });