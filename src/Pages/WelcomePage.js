import React,{useState} from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import Home from "../Components/Home";

import "./WelcomePage.css";



const WelcomePage = () => {


  const [openSidebar, setOpenSidebar] = useState(false);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };
  return (
    <div>
      <Header />
       {/* Open Sidebar Button */}
       <span className="menu-icon" onClick={toggleSidebar}>
        ☰
      </span>

      {/* Sidebar Component */}
      <Sidebar openSidebarToggle={openSidebar} OpenSidebar={toggleSidebar} />
      <Home />
      <p>
        Go back to <Link to="/login">Login</Link>
      </p>
      
      
    </div>
  );
};

export default WelcomePage;