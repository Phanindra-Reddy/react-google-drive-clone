import React from 'react'
import '../css/Header.css'

import DriveLogo from '../media/drive img.png';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import OfflinePinOutlinedIcon from '@material-ui/icons/OfflinePinOutlined';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpIcon from '@material-ui/icons/HelpOutline'
import AppIcon from '@material-ui/icons/Apps';
import Avatar from '@material-ui/core/Avatar';
import myPhoto from '../media/my photo.jpg';


function Header() {
    return (
        <div className="header">
            <div className="header_logo">
               <img src={DriveLogo} alt="drive_logo"/>
               <span>Drive</span>
            </div>
            <div className="header_searchContainer">
                <div className="header_searchbar">
                    <SearchIcon className="searchIcon"/>
                    <input type="text" className="inputFeild" placeholder="Search in Drive"/>
                    <ArrowDropDownIcon className="arrowDropDown"/>
                </div>
            </div>
            <div className="header_icons">
                <div className="header_help_icons">
                    <span><OfflinePinOutlinedIcon/></span>
                    <span><HelpIcon/></span>
                    <span><SettingsIcon/></span>
                </div>
                <div className="header_profile_icons">
                    <span><AppIcon/></span>
                    <span><Avatar src={myPhoto} alt="user profile"/></span>
                </div>
   
            </div>
        </div>
    )
}

export default Header
