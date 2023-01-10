import axios from 'axios'
import { useEffect, useState } from 'react'

import './App.css';
import Login from './Login'
import Content from './Content'

const { REACT_APP_API_URL_DEV, REACT_APP_API_URL_PROD, NODE_ENV } = process.env;
const baseUrl = NODE_ENV === 'production' ? REACT_APP_API_URL_PROD : REACT_APP_API_URL_DEV;


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const renderLogin = () => {
    if (!isLoggedIn) {
      return <Login setIsLoggedIn={setIsLoggedIn}/>
    }
  }

  const renderContent = () => {
    if (isLoggedIn) {
      return <Content />
    }
  }

  return (
    <div className='App'>
      <div className='header-container'>
        <img className='logo' src='/network_structure.png' />
        <h1 className='header'>Sound Graph</h1>
      </div>
      <div className='body-container'>
        {renderLogin()}
        {renderContent()}
      </div>
    </div>
  );
}

export default App;
