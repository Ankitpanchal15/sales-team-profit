import React, { useEffect, useState } from 'react';
import FetchData from '../../Hooks/FetchData';


const ProfileCard = () => {

    const { data: user, error } = FetchData('https://profitsales-f6634-default-rtdb.firebaseio.com/User/Jordan%20Jackson.json');

    return (
        <>
            
            
            {user && <div className="card profile-card p-2 bg-white">
                   
                <button className='btn rounded edit-button '>
                    <i className="fas fa-pen"></i>
                </button>
                <div className="cover-img">
                    <img className="img-fluid" src={user.cover} alt="cover" />
                </div>
                <div className="px-3">
                    <div className="user-img-name text-center">
                        <div className="img-wrap">
                            <img className='img-fluid' src={user.avatar} alt="profile" />
                        </div>
                        <h3>{user.name}</h3>
                        <p>{user.designation}</p>
                    </div>
                    <div className="user-details">

                        <div className="list-group-item">
                            <h5 className="">Email</h5>
                            <h3>{user.email}</h3>
                        </div>

                        <div className="list-group-item">
                            <h5>Mobile</h5>
                            <h3>{user.mobile}</h3>
                        </div>

                        <div className="list-group-item">
                            <h5>Skil Level</h5>
                            <h3>{user.skillLevel}</h3>
                        </div>

                        <div className="list-group-item">
                            <h5>Paid Out Limit</h5>
                            <div className="progress-wrap d-flex">
                                <div className="progress" >
                                    <div className="progress-bar"></div>
                                </div>
                                <h5><span>$580</span>/$750 </h5>
                            </div>
                        </div>

                        <div className="list-group-item">
                            <h5>Bio </h5>
                            <p>{user.bio}
                            </p>
                        </div>

                        <div className="list-group-item">
                            <h5>Skill </h5>
                            <p>
                                {
                                    user.skill.map((val, index) => {
                                        return <span key={index} className="badge ">{val}</span>
                                    })
                                }
                                {/* <span className="badge badge-primary">Photography</span>
                                <span className="badge badge-success">Teacher</span>
                                <span className="badge badge-secondary">Traveler</span>
                                <span className="badge badge-danger"> iOS</span> */}

                            </p>
                        </div>

                    </div>
                </div>

            </div>}
        </>
    )
}

export default ProfileCard;