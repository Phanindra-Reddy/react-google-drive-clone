import React from 'react'
import '../../css/Sidebar.css';

import ArrowRightIcon from '@material-ui/icons/ArrowRight'

const SidebarItems = ({arrow, icon, label}) => {
    return (
        <div className="sidebarItems">
            <div className="sidebarItem_arrow">
                {arrow && <ArrowRightIcon/>}
            </div>
            <div className="sidebarItem_main">
                {icon}
                <p>{label}</p>
            </div>
        </div>
    )
}

export default SidebarItems
