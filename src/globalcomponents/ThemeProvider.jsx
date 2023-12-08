import React, { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || false
  );

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  const setThemeMode = (mode) => setTheme(mode);

  return (
    <ThemeContext.Provider value={{ theme, setThemeMode }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

const useThemeHook = () => {
  const { theme, setThemeMode } = useContext(ThemeContext);
  return [theme, setThemeMode];
};

export { ThemeProvider, ThemeContext, useThemeHook };
