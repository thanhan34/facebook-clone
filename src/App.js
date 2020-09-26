import React from 'react';

import './App.css';
import Feed from './Feed';
import Header from './Header';
import SideBar from './SideBar';
import Widgets from './Widgets'
function App() {
  const user = "An Doan";
  return (
    <div className="app">
      {!user ? (
        <h1>Login</h1>
      ) :
        <>
          <Header />
          <div className="app__body">
            <SideBar />
            <Feed />
            <Widgets />
          </div>
        </>
      }

    </div>
  );
}

export default App;
