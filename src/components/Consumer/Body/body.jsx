import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import './body.css'
import Heading from '../../../utils/Heading'
import data from '../../../data.json'

const Body = () => {
    let [Restaurant, setRestaurant] = useState([]);
    let [filteredCard, setFilteredCard] = useState([]);
    let [SearchText, setSearchText] = useState("");

    function searchCard() {
        const lowercaseSearchText = SearchText.toLowerCase();

        setFilteredCard(Restaurant.filter((card) => card?.info?.name.toLowerCase().includes(lowercaseSearchText)));
    }
    useEffect(() => {
        setRestaurant(data);
        setFilteredCard(data);
    }, []);
    console.log(Restaurant);
    return (
        <>
            <div className="restaurant-container">
                <h1>Restaurants with online food delivery in Bangalore</h1>
                <span className="search-container">
                    <input
                        type="text"
                        placeholder='Search here ...'
                        value={SearchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                            searchCard(e.target.value);
                        }}
                    />
                </span>

                <button className='btn' onClick={() => {
                    setFilteredCard(Restaurant.sort((a, b) => {
                        const deliveryTimeA = a?.info?.sla?.deliveryTime || 0;
                        const deliveryTimeB = b?.info?.sla?.deliveryTime || 0;

                        return deliveryTimeA - deliveryTimeB;
                    }));
                }}>Fast Delivery</button>
                <button className='btn' onClick={() => {
                    setFilteredCard(Restaurant.filter((card) => card.info.avgRating > 4.0))
                }}>Rating 4.0+</button>
                <button className='btn'>Pure Veg</button>
                <button className='btn'>Rs. 300-Rs. 600</button>
                <button className='btn'>Less than Rs. 300</button>
                <div className="food-cards-container">
                    {filteredCard.map((hotel) => {
                        return (
                            <Card
                                key={hotel.info.id}
                                image={hotel.info.cloudinaryImageId}
                                cuisines={hotel?.info?.cuisines?.join(",") || ""}
                                name={hotel.info.name}
                                avgRating={hotel.info.avgRating}
                                deliveryTime={hotel?.info?.sla?.slaString || "10 mins"}
                            />
                        );
                    })}
                </div>
            </div >
            {/* <div className="restaurant-container">
                <Heading heading="Top restaurant chains in Bangalore" />
                <div className="restaurant-cards-container">
                    {data.map((hotel) => {
                        return (
                            <Card
                                key={hotel.info.id}
                                image={hotel.info.cloudinaryImageId}
                                cuisines={hotel?.info?.cuisines?.join(",") || ""}
                                name={hotel.info.name}
                                avgRating={hotel.info.avgRating}
                                deliveryTime={hotel?.info?.sla?.slaString || "10 mins"}
                            />
                        );
                    })}
                </div>
            </div> */}
        </>
    )
}

export default Body
