import React from 'react';
import './SidebarOption.css';

const SidebarOption = ({ active, text, icon }) => {
  return (
    <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
      {icon}
      <h2>{text}</h2>
    </div>
  );
};

export default SidebarOption;
