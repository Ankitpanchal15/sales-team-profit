import React from 'react';
import Avatar1 from '../../images/avatar-1.png';
import Avatar2 from '../../images/avatar-2.png';
import Avatar3 from '../../images/avatar-3.png';
import Avatar4 from '../../images/avatar-4.png';
import Avatar5 from '../../images/avatar-5.png';

const UserList = () => {
    return(
        <>
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

        </>
    )
}

export default UserList;