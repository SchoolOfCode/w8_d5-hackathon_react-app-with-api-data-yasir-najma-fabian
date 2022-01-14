import React from 'react';
import Input from '../Input';
import BannerLogo from '../../BannerImg.jpeg'
import "./Banner.css"

function Banner() {
    return (
        <header>
            <img src={`${BannerLogo}`}/>
        </header>
    )
}



export default Banner