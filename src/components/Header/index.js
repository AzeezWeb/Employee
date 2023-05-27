import React from "react";
import { AiOutlineSearch, AiOutlinePoweroff} from 'react-icons/ai'
import { IoIosNotificationsOutline} from 'react-icons/io'
import { FiMessageSquare } from 'react-icons/fi'
import './Header.css'

function Header() {

  return ( 
    <header>
      <div className="search">
        <AiOutlineSearch className="search-icon"/>
        <input placeholder="Search topics" />
      </div>
      <div className="header-icons"> 
      <IoIosNotificationsOutline/> 
      <FiMessageSquare/>
      <AiOutlinePoweroff/>
      </div>
    </header>
    
   );
}

export default Header;