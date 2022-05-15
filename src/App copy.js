import Countries from "./routes/Countries";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import './App.css';
import Country from "./routes/Country";
import Navbar from "./components/Navbar";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  const [darkMode, setDarkMode] = useState(false);
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setDarkMode((prevState) => !prevState);
  };

  return (
    <div className="App" style={{height: "100vh"}} data-theme={theme}>
      <Navbar darkMode={darkMode} switchTheme={switchTheme}/>
      <Router>
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/Countries/:name" element={<Country />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
