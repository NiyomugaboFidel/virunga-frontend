"use client";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface DarkModeContextProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

interface DarkModeProviderProps {
  children: ReactNode;
}

export const DarkModeContext = createContext<DarkModeContextProps>({
  isDarkMode: false,
  toggleDarkMode: () => {},
});

export const useDarkMode =  () => {
    return useContext(DarkModeContext)
}

const DarkModeProvider: React.FC<DarkModeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
