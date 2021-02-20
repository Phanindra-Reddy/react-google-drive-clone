import React from 'react'
import '../../css/FilesView.css';

import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';

const FileCard = ({id, name}) => {
    return (
        <div className="fileCard" key={id}>
            <div className="fileCard-top">
                <InsertDriveFileIcon style={{fontSize:130}}/>
            </div>
            <div className="fileCard-bottom">
                <p>{name}</p>
            </div>
        </div>
    )
}

export default FileCard;
