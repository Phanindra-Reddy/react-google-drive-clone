import React from 'react'
import '../../css/FileItem.css';

import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';

const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];


const FileItem = ({id,caption,timeStamp,fileUrl,size}) => {

    const fileDate = `${timeStamp?.toDate().getDate()} ${months[timeStamp?.toDate().getMonth()+1]} ${timeStamp?.toDate().getFullYear()}`

    const getReadableFilesizeString = (fileSizeInBytes) => {
        let i = -1;
        const byteUnits = ['KB','MB','GB','TB','PB','EB','ZB','YB'];
        do{
            fileSizeInBytes = fileSizeInBytes / 1024;
            i++;
        }while(fileSizeInBytes > 1024);

        return Math.max(fileSizeInBytes,0.1).toFixed(1) + byteUnits[i];
    }

    return (
        
        <div className="fileItem" key={id}>
            <a  href={fileUrl} target="_blank" rel="noreferrer" download>
                <div className="fileItem-left">
                    <InsertDriveFileIcon/>
                    <p>{caption}</p>
                </div>
                <div className="fileItem-right">
                    <p>{fileDate}</p>
                    <p>{getReadableFilesizeString(size)}</p>
                </div>
            </a>
        </div>
    )
}

export default FileItem;
