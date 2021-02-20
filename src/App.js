import React,{useState} from 'react';
import './App.css'
import FilesView from './components/filesView/FilesView';
import Header from './components/Header';
import Sidebar from './components/sidebar/Sidebar';
import SideIcons from './components/sideicons/SideIcons';
import Button from '@material-ui/core/Button';
import GoogleDrive from './media/drive img.png';
import {auth, provider} from './firebase';

function App() {
  const [user, setUser] = useState();

  const handleLogin = () =>{
    if(!user){
      auth.signInWithPopup(provider).then((result)=>{
        setUser(result.user);
      })
    }
  }
  return (
    <div className="App">
      {
        user ? 
        (
          <>
          <Header/>
          <div className="app_main">
            <Sidebar/>
            <FilesView/>
            <SideIcons/>
          </div>
          </>
        ) :
        (
            <div className="app_login">
              <img src={GoogleDrive} alt="Google Drive"/>
              <h1>Welcome To React Google Drive Clone</h1>
              <Button onClick={handleLogin} variant="contained" color="primary">Log In</Button>
            </div>
        )
      }
      
    </div>
  );
}

export default App;
