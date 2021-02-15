import React from 'react';
import FriendListBlock from './FriendListBlock';
import FetchData from '../../Hooks/FetchData';



const FriendList = () => {

    const { data:friend, error } = FetchData('https://profitsales-f6634-default-rtdb.firebaseio.com/User/Jordan%20Jackson/friends.json');

    return (
        <>
            <div className="friends-list-block px-30">
                <div className="d-flex align-items-center justify-content-between mb-4">
                    <h3 className="display-6 m-0">Friends</h3>
                    <button className="btn text-secondary p-0 "><i className="fas fa-cog"></i></button>
                </div>
                <ul className="friend-list list-unstyled">
                    {
                      friend &&  friend.map(data => {
                            return  <FriendListBlock
                                avatar={data.avatar}
                                key ={data.id}
                                name={data.name}
                                designation={data.designation}
                                typing={data.isTyping}
                                online={data.isonline}
                                msg={data.message}
                            />
                        })
                    }
                </ul>

            </div>

        </>
    )
}

export default FriendList;