
import React, { useState, createContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, theme: isDarkMode ? darkTheme : lightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const lightTheme = {
  container: { backgroundColor: '#FFF' },
  text: { color: '#000' },
};

const darkTheme = {
  container: { backgroundColor: '#333' },
  text: { color: '#FFF' },
};

export default ThemeContext;
