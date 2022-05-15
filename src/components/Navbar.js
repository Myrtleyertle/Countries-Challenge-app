import React from "react";


const Navbar = ({ darkMode, switchTheme}) => {
    return (
        <nav className="navbar">
        <div>
          <h1 className="navtitle">Where in the World</h1>
        </div>
        <div className="darkMode">
          <button onClick={switchTheme}>
            {darkMode ? "🌝 Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      </nav>
    );
};
export default Navbar;