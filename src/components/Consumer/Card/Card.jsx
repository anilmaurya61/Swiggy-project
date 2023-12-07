import React from 'react'
import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import './Card.css';

const Card = (params) => {
    return (
        <>
            <div className="card-container">
               <div className="img-container">
                    <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+params.image} alt="" />
               </div>
               <h1>{params.name}</h1>
               <div className="rating-time">
                {<StarPurple500Icon/>} {params.avgRating} - {params.deliveryTime}
               </div>
               <p>{params.cuisines}</p>
            </div>
        </>
    )
}

export default Card;
