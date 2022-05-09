import React, { Component } from 'react';
import CarouselModel from 'infinite-react-carousel';
import StorieButton from '../StorieButton/StorieButton'
import './Carousel.css'
import imageTest from '../../images/testImage.png'

function Carousel() {
    return (
        <div className="carousel-box">
            <div className="content-wrapper">
                <CarouselModel className="storie-box" duration={1000} adaptiveHeight={false} arrows={false} arrowsBlock={false} initialSlide={true} slidesToShow={5} wheel={true} wheelScroll={2}>
                    <StorieButton image={imageTest} />
                    <StorieButton image={imageTest} />
                    <StorieButton image={imageTest} />
                    <StorieButton image={imageTest} />
                    <StorieButton image={imageTest} />
                    <StorieButton image={imageTest} />
                    <StorieButton image={imageTest} />
                </CarouselModel>
            </div>
        </div>
    )
}

export default Carousel