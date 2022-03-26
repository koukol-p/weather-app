import { createContext, useReducer } from "react";
import { darkTheme, lightTheme } from "../theme/theme";
export const ThemeContext = createContext();

const themeReducer = (state, action) => {
  switch (action.type) {
    case "THEME_LIGHT":
      return { ...state, theme: lightTheme, currentTheme: "light" };
    case "THEME_DARK":
      return { ...state, theme: darkTheme, currentTheme: "dark" };
  }
};
export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, {
    currentTheme: "dark",
    theme: darkTheme,
  });

  const toggleTheme = (theme) => {
    switch (theme) {
      case "light": {
        dispatch({ type: "THEME_LIGHT" });
        break;
      }
      case "dark": {
        dispatch({ type: "THEME_DARK" });
        break;
      }
      default:
        return;
    }
  };
  return (
    <ThemeContext.Provider value={{ ...state, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
