import React from 'react';
import {NavLink} from "react-router-dom";
import {FiSearch} from "react-icons/fi";

const Header = () => {
    return (
       <header>
           <div className="container">
               <div className="header">
                  <p>Restaurant</p>
                   <div className="header--nav">
                       <NavLink to={`/`}>
                           interior
                       </NavLink>
                       <NavLink to={`/`}>
                           About Us
                       </NavLink>
                       <NavLink to={`/`}>
                           Menu
                       </NavLink>
                       <NavLink to={`/`}>
                           Contacts
                       </NavLink>
                       <button>
                           <FiSearch/>
                       </button>
                   </div>

               </div>
           </div>
       </header>
    );
};

export default Header;