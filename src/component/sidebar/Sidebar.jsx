import React from 'react';
import FriendList from './FriendList';
import Menu from './Menu';
import SearchBar from './SearchBar';
import UserList from './UserList';



const Sidebar = () => {
    return (
        <>
            <div className="navbar-collapse d-block " id="sidebar">
                <div className="sidebar-left d-flex">
                    <button className="navbar-toggler d-xl-none  navbar-btn" type="button" data-toggle="collapse" data-target="#sidebar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-chevron-left"></i>
                        <i className="fas fa-chevron-right"></i>
                    </button>

                    <div className="d-flex m-0 w-100  ">
                        <div className="sidebar-column-1">
                            <UserList />
                            <div className="bottom-icon-group">
                                <a href="##"><i className="fas fa-th-large"></i></a>
                                <a href="##"><i className="fas fa-cog"></i></a>
                            </div>
                        </div>

                        <div className="sidebar-column-2 pt-30">
                            <Menu />
                            <SearchBar />
                            <FriendList />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar;