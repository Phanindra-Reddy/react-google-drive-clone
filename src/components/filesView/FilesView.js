import React,{useState,useEffect} from 'react'
import '../../css/FilesView.css';
import {db} from '../../firebase';
import FileCard from './FileCard';
import FileItem from './FileItem';

const FilesView = () => {

    const [files, setFiles] = useState([]);

    useEffect(()=>{
        db.collection('myfiles').onSnapshot(snapshot => {
            setFiles(snapshot.docs.map(doc => ({
                id:doc.id,
                item:doc.data(),
            })))
        })
    },[])

    return (
        <div className="filesView">
            <div className="filesView_row">
                {
                    files.slice(0,5).map(({id,item})=>{
                        return <FileCard key={id} id={id} name={item.caption}/>
                    })
                }
            </div>
            <div className="filesView_titles">
                <div className="filesView_title_left">
                    <p>Name</p>
                </div>
                <div className="filesView_title_right">
                    <p>Last Modified</p>
                    <p>Files size</p>
                </div>
            </div>
            {
                files.map(({id,item})=>(
                    <FileItem id={id} caption={item.caption} timeStamp={item.timeStamp} fileUrl={item.fileUrl} size={item.size}/>
                ))
            }
        </div>
    )
}

export default FilesView
