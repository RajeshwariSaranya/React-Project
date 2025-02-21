import React from "react";
import {Link} from "react-router-dom";
import Menubar from "../Models/Menubar";
import Footer from "../Models/Footer";
import "./HomePage.css";

const HomePage = () => {
    return (
      <div>
        <Menubar />
        <h1>WELCOME TO PRODUCT PREDICTION WEBSITE!</h1>
        <h6>organize your work and improve your performance with us here.</h6>
        <p>
        Go back to <Link to="/login">Login</Link>
       </p>
      <Footer />
      </div>
    );
  };
  
  export default HomePage;