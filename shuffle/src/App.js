import React, { useEffect,useState} from 'react';
import './App.css';
import { getAccessToken } from './utils/spotify';
import { DashBoard } from './dashboard';
import {Login} from './components/login/login.component'

function App() {
  const [token,setToken] = useState(null);
  useEffect(() => {
    setToken(getAccessToken);
  },[])
  return (
    <div className="App">
    {
      token ?
      (<DashBoard accessToken={token}/>)
      :
      (<Login />)
    }
    </div>
  );
}

export default App;