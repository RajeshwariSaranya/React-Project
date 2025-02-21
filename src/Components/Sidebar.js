import React, { useState, useEffect } from "react";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from "react-icons/bs";
import "./Sidebar.css";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  // State to track whether the product list is visible or not
  const [showProducts, setShowProducts] = useState(false);

  // State to track whether the theme options are visible or not
  const [showThemes, setShowThemes] = useState(false);

  // State to track the current theme (Light or Dark)
  const [currentTheme, setCurrentTheme] = useState("Light");

  // Toggle function for showing/hiding product list
  const handleProductClick = () => {
    setShowProducts(!showProducts);
  };

  // Toggle function for showing/hiding theme options
  const handleThemeClick = () => {
    setShowThemes(!showThemes);
  };

  // List of products
  const products = ["Tomato", "Diesel", "Gold"];

  // List of themes
  const themes = ["Light", "Dark"];

  // Action for each product item
  const handleProductAction = (product) => {
    // For demonstration, log the product name
    console.log(`${product} clicked!`);
  };

  // Action to change the theme
  const handleThemeChange = (theme) => {
    // Set the current theme in state
    setCurrentTheme(theme);

    // Apply the theme to the body (or any parent element) by toggling classes
    if (theme === "Dark") {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
    } else {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
    }
  };

  // Ensure the correct theme is applied when the component is mounted
  useEffect(() => {
    if (currentTheme === "Dark") {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
    } else {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
    }
  }, [currentTheme]);

  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={handleProductClick}>
            <BsFillArchiveFill className="icon" /> Products
          </a>
          {/* Conditionally render the product list */}
          {showProducts && (
            <ul>
              {products.map((product, index) => (
                <li key={index}>
                  <a href="#" onClick={() => handleProductAction(product)}>
                    {`${index + 1}. ${product}`}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li className="sidebar-list-item">
          <a href="#" onClick={handleThemeClick}>
            <BsFillGrid3X3GapFill className="icon" /> Theme
          </a>
          {/* Conditionally render the theme list */}
          {showThemes && (
            <ul>
              {themes.map((theme, index) => (
                <li key={index}>
                  <a href="#" onClick={() => handleThemeChange(theme)}>
                    {`${index + 1}. ${theme}`}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsFillGearFill className="icon" /> Setting
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
