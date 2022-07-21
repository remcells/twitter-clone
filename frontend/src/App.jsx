import './App.css';
import Sidebar from './components/SideBar/Sidebar';
import Feed from './components/Feed/Feed';
import Widgets from './components/Widgets';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  return (
    <div className="app">
      <Sidebar></Sidebar>
      <Feed></Feed>
      <Widgets></Widgets>
    </div>
  );
}

export default App;
