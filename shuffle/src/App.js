import React, { useEffect} from 'react';
import './App.css';
import { DashBoard } from './dashboard';
import {Login} from './components/login/login.component'

const code = new URLSearchParams(window.location.search).get('code')

function App() {

  return (
    <div className="App">
    {
      code ? 
      (<DashBoard code={code}/>)
      :
      (<Login />)
    }
    </div>
  );
}

export default App;