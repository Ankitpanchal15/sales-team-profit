import React from "react";
import {NavLink  } from "react-router-dom";

const Menu = () => {
    return(
        <>
        <div className="sidebar-menu ">
                    <h4 className="px-30 display-6 ">Menu</h4>
                    <ul className="nav flex-column">
                        <li className="nav-item"><NavLink exact className="nav-link" to="/">Profit</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/explore">Explore</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/profile">Profile</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/videos">Videos</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/invite">Invite <span className="badge badge-primary float-right">54</span></NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/music">Music</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/candidates">Candidates</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/calendar">Calendar</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/feedback">Feedback</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/help">Help</NavLink></li>
                    </ul>
                    </div>

        </>
    )
}

export default Menu;