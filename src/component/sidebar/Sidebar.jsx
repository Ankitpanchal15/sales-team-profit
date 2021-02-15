import React from 'react';
import FriendList from './FriendList';
import Menu from './Menu';
import SearchBar from './SearchBar';

import Avatar1 from '../../images/avatar-1.png';
import Avatar2 from '../../images/avatar-2.png';
import Avatar3 from '../../images/avatar-3.png';
import Avatar4 from '../../images/avatar-4.png';
import Avatar5 from '../../images/avatar-5.png';

const Sidebar = () => {
    return(
        <>
        <div className="navbar-collapse d-block " id="sidebar">
            <div className="sidebar-left d-flex">
         

            <button className="navbar-toggler d-xl-none  navbar-btn" type="button" data-toggle="collapse" data-target="#sidebar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-chevron-left"></i>
            <i className="fas fa-chevron-right"></i>
            </button>

            <div className="d-flex m-0 w-100  ">
                <div className="sidebar-column-1">
                <div className="user-list">
                    <div className="user-image rounded mb-3">
                        <img className="rounded-circle img-fluid" src={Avatar1} alt="user pic" />
                    </div>
                    <div className="user-image rounded mb-3 active">
                        <img className="rounded-circle img-fluid" src={Avatar2} alt="user pic" />
                    </div>
                    <div className="user-image rounded mb-3">
                        <img className="rounded-circle img-fluid" src={Avatar3} alt="user pic" />
                    </div>
                    <div className="user-image rounded mb-3">
                        <img className="rounded-circle img-fluid" src={Avatar4} alt="user pic" />
                    </div>
                    <div className="user-image rounded mb-3">
                        <img className="rounded-circle img-fluid" src={Avatar5} alt="user pic" />
                    </div>
                </div>
                <div className="bottom-icon-group">
                    <a href="##"><i className="fas fa-th-large"></i></a>
                    <a href="##"><i className="fas fa-cog"></i></a>
                    
                </div>
                </div>
                <div className="sidebar-column-2 pt-30">

                <Menu />
                <SearchBar/>
                <FriendList />

                </div>

               

                   

              

                

            </div>
            </div> 
            </div>
        </>
    )
}

export default Sidebar;