import React from 'react';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import Logo from '../../assets/Swiggy_logo.png';
import Lunch from '../../assets/Lunch.jpeg';
import '../../styles/hero.css';

const Button = (props)=> {
    return (
        <button className={props.classes}>{props.name}</button>
    )
}

const HSEC1 = () => {
    return (
        <div className="hsec1">
            <img className="logo" src={Logo} alt="swiggylogo" />
            <div className="button-sect">
                <Button classes={'login-btn'} name={'Login'} />
                <Button classes={'sign-up-btn'} name={'Sign up'} />
            </div>
        </div>
    );
};

const HSEC2 = () => {
    return (
        <div className="hsec2">
            <h1 className="heading-hsec2"><span className="animation-heading"></span></h1>
            <p className="dull-text">Order food from favourite restaurants near you.</p>
        </div>
    );
};

const HSEC3 = () => {
    return (
        <div className="hsec3">
            <div className="input-container">
                <div className="inputPlocate">
                    <input className="input-box" type="text" placeholder="Enter your delivery location" />
                    <div className="locate-btn">
                       < GpsFixedIcon/>
                        <span> &nbsp; &nbsp;Locate Me</span>
                    </div>
                </div>
                <Button classes={'find-food-btn'} name={'Find Food'} />
            </div>
        </div>
    );
};

const HSEC4 = () => {
    return (
        <div className="hsec4">
            <h3 className="hsec4-h3">POPULAR CITIES IN INDIA</h3>
            <ul className="list-para">
                <li className="list-content-hsec4"><a className="list-item-hsec4" href="#city">Ahmedabad</a></li>
                <li className="list-content-hsec4"><a className="list-item-hsec4" href="#city">Bangalore</a></li>
                <li className="list-content-hsec4"><a className="list-item-hsec4" href="#city">Chennai</a></li>
                <li className="list-content-hsec4"><a className="list-item-hsec4" href="#city">Delhi</a></li>
                <li className="list-content-hsec4"><a className="list-item-hsec4" href="#city">Gurgaon</a></li>
                <li className="list-content-hsec4"><a className="list-item-hsec4" href="#city">Hyderabad</a></li>
                <li className="list-content-hsec4"><a className="list-item-hsec4" href="#city">Kolkata</a></li>
                <li className="list-content-hsec4"><a className="list-item-hsec4" href="#city">Mumbai</a></li>
                <li className="list-content-hsec4"><a className="list-item-hsec4" href="#city">Pune</a></li>
                <li className="list-content-hsec4"><a className="list-item-hsec4" href="#city">& more</a></li>
            </ul>
        </div>
    );
};

const Hero = () => {
    return (
        <div className="herosection">
            <div className="hero-subsec">
                <HSEC1 />
                <HSEC2 />
                <HSEC3 />
                <HSEC4 />
            </div>
        </div>
    );
};

export default Hero;
