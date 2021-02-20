import React from 'react';
import '../../css/SideIcons.css';

import AddIcon from '@material-ui/icons/Add';
import calender from '../../media/calender.png';
import keep from '../../media/google-keep.jpg';
import task from '../../media/Google-Tasks.png';

const SideIcons = () => {
    return (
        <div className="sideIcons">
            <div className="sideIcons-top">
                <img src={calender} alt="google calender"/>
                <img src={keep} alt="google keep"/>
                <img src={task} alt="google task"/>
            </div>
            <hr/>
            <div className="sideIcons-plusIcon">
                <AddIcon/>
            </div>
        </div>
    )
}

export default SideIcons;
