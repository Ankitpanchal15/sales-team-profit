import React from 'react';

const FriendListBlock = ({ avatar, name, designation, msg, online, typing }) => {
    return (
        <>
            <li>
                <div className="avtar-wrap">
                    <img className="img-fluid rounded-circle" src={avatar} />
                    <div className="icon-status" style={{ color: online ? "#1bb934" : "#e68a2f" }} >
                        <i className="fas fa-dot-circle"></i>
                    </div>
                </div>
                <div className="text-wrap">
                    <h4>{name}</h4>
                    <p> {typing ? <span className="text-white">Typing...</span> : designation}</p>
                </div>
                <span className="badge badge-primary rounded-circle">{msg}</span>
            </li>

        </>
    )
}

export default FriendListBlock;