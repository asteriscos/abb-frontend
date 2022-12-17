import React, { useEffect } from 'react';
import './App.scss';
import './common.scss';
import Main from './views/main';

function App() {

  useEffect(() => {
    setTimeout(() => window.location.reload(), 10000)
  }, [])

  return <div className="app-container"><Main /></div>;
}

export default App;
