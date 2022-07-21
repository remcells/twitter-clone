import React from 'react';
import SidebarOption from './SidebarOption';
import './Sidebar.css';
import home from '../../icons/home';
import twitterIcon from '../../icons/twitter';
import hashtag from '../../icons/hashtag';
import notification from '../../icons/notification';
import messages from '../../icons/messages';
import bookmark from '../../icons/bookmark';
import list from '../../icons/lists';
import profile from '../../icons/profile';
import viewbox from '../../icons/viewbox';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div>{twitterIcon}</div>
      <SidebarOption icon={home} text="Home" />
      <SidebarOption icon={hashtag} text="Explore" />
      <SidebarOption icon={notification} text="Notifications" />
      <SidebarOption icon={messages} text="Messages" />
      <SidebarOption icon={bookmark} text="Bookmarks" />
      <SidebarOption icon={list} text="Lists" />
      <SidebarOption icon={profile} active text="Profile" />
      <SidebarOption icon={viewbox} text="More" />
      <button className="btn-tweet">Tweet</button>
    </div>
  );
};

export default Sidebar;
