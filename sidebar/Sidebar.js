import React from 'react';
import './Sidebar.css';

import Dashboard from './images/Dashboard.png';
import Courses from './images/icon222.png';
import Assignments from './images/Assignments.png';
import Announcements from './images/Announcements.png';
import Certificate from './images/Certificate.png';
import logo from './images/logo.png'

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <hr class="seperator"/>
      <ul>
        <li>
          <img src={Dashboard} alt="Dashboard" /> <span>Dashboard</span>
        </li>
        <li>
          <img src={Courses} class="co1" alt="Courses" /> <span>Courses</span>
        </li>
        <li>
          <img src={Assignments} alt="Assignments" /> <span>Assignments</span>
        </li>
        <li>
          <img src={Announcements} alt="Announcements" /> <span>Announcements</span>
        </li>
        <li>
          <img src={Certificate} alt="Certificate" /> <span>Certificate</span>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;