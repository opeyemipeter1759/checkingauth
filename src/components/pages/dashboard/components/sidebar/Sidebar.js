import React from "react";
import "./Sidebar.css";
import logo from "../../assets/logo.svg";
import dashboard from "../../assets/home-icon-whitr.png";
import invest from "../../assets/2.svg";
import savest from "../../assets/3.svg";
import transcations from "../../assets/4.svg";
import refferals from "../../assets/5.svg";
import accounts from "../../assets/6.svg";
import logout from "../../assets/Logout.svg";

import SidebarContent from "./SidebarContent";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
          <h1>OVest</h1>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
        <SidebarContent image={dashboard} title="Dashboard" />
        <SidebarContent image={invest} title="Invest" />
        <SidebarContent image={savest} title="Savest" />
        <SidebarContent image={transcations} title="Transactions" />
        <SidebarContent image={refferals} title="Referrals" />
        <SidebarContent image={accounts} title="Account" />

        <div className="sidebar__logout">
          <img src={logout} alt="" />
          <a href="#">Log out</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
