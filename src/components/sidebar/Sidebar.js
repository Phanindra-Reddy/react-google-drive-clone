import React from 'react'
import '../../css/Sidebar.css';

import NewFileButton from './NewFileButton';
import SidebarItems from './SidebarItems';

import AccessTimeIcon from '@material-ui/icons/AccessTime';
import DeleteIcon from '@material-ui/icons/Delete';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import CloudOutlinedIcon from '@material-ui/icons/CloudOutlined';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';


const Sidebar = () => {
    return (
        <div className="sidebar">
            {/* New File Button */}
            <NewFileButton/>

            {/* Sidebar Items */}
            <div className="sidebar_items">
                <SidebarItems arrow icon ={<InsertDriveFileIcon/>} label={"My Drive"} />
                <SidebarItems icon={<PeopleAltOutlinedIcon/>} label={"Shared with me"}/>
                <SidebarItems icon={<AccessTimeIcon/>} label={"Recent"}/>
                <SidebarItems icon={<StarBorderIcon/>} label={"Starrred"}/>
                <SidebarItems icon={<DeleteIcon/>} label={"Bin"}/>
                <hr/>
                <SidebarItems icon={<CloudOutlinedIcon/>} label={"Storage"}/>
            </div>
        </div>
    )
}

export default Sidebar;
