import React from 'react';

import './App.css';
import Feed from './Feed';
import Header from './Header';
import SideBar from './SideBar';
import Widgets from './Widgets';
import Login from './Login';
import { useStateValue } from './StateProvider';
function App() {
  const [{ user }, dispath] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
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
