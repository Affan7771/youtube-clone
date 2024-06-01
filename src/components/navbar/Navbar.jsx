import React from 'react'
import "./Navbar.css"
import MenuIcon from "../../assets/menu.png"
import Logo from "../../assets/logo.png"
import searchIcon from "../../assets/search.png"
import uploadIcon from "../../assets/upload.png"
import moreIcon from "../../assets/more.png"
import notificationIcon from "../../assets/notification.png"
import profileIcon from "../../assets/jack.png"

const Navbar = ({setSidebar}) => {
    return (
        <nav className="flex-div">
            <div className="flex-div nav-left">
                <img 
                    src={MenuIcon} 
                    className="menu-icon" 
                    alt="menu-icon" 
                    onClick={() => setSidebar(prev => prev === false ? true : false)}
                />
                <img src={Logo} className="logo" alt="logo" />
            </div>

            <div className="nav-middle flex-div">
                <div className="search-box flex-div">
                    <input type="text" placeholder="Search..." name="" id="" />
                    <img src={searchIcon} alt="search" />
                </div>
            </div>

            <div className="nav-right flex-div">
                <img src={uploadIcon} alt="" />
                <img src={moreIcon} alt="" />
                <img src={notificationIcon} alt="" />
                <img src={profileIcon} className='user-icon' alt="" />
            </div>
        </nav>
    )
}

export default Navbar