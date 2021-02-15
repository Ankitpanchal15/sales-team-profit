import React from 'react';

const Events = () => {
    return (
        <>
            <div className="card card profile-card event-card mt-4 p-4">
            <h5 className="mb-3">Upcoming Events with Jordan</h5>
            <ul className="list-unstyled">
                <li>
                    <div className="event-text">
                        <h3>Super Photography 2016</h3>
                        <p>January 13th, Vienna - 6:30 PM</p>
                    </div>
                    <div className="badge-wrap">
                        <span className="badge badge-primary">Photography</span>
                    </div>
                </li>

                <li>
                    <div className="event-text">
                        <h3>Photox Expo</h3>
                        <p>March 28th, Paris - 7:30 PM</p>
                    </div>
                    <div className="badge-wrap">
                        <span className="badge badge-info">Design</span>
                    </div>
                </li>

            </ul>
            </div>
        </>
    )
}

export default Events;