import React, { useState } from 'react';

const CardItem = ({value,title,percentage,status}) => {
    const [inc,setInc] = useState(
        status === "increase" ? true : false  
    ); 
    return (
        <>
            <div className={`card text-center  ${!inc && "decrease" }  `}>
                <div className="card-body px-2">
                    <h3>{value}</h3>
                    <h5>{title}</h5>
                </div>
                <div className="card-footer px-2">
                    <p> <i className="fas fa-play-circle"></i> {percentage} {status}</p>
                </div>
            </div>
        </>
    )
}

export default CardItem;