import React, { Component } from 'react';
import CarouselModel from 'infinite-react-carousel';
import './Carousel.css'

function Carousel() {
    return (
        <div className="carousel-box">
            <div className="content-wrapper">
                <CarouselModel className="storie-button" duration={1000} adaptiveHeight={false} arrows={false} arrowsBlock={false} initialSlide={true} slidesToShow={4} wheel={true} wheelScroll={2}>
                    <div>
                        <div id='storie-button'>
                            
                        </div>
                    </div>
                    <div>
                        <div id='storie-button'>
                           
                        </div>
                    </div>
                    <div>
                        <div id='storie-button'>
                            
                        </div>
                    </div>
                    <div>
                        <div id='storie-button'>
                          
                        </div>
                    </div>
                    <div>
                        <div id='storie-button'>
                            
                        </div>
                    </div>
                    <div>
                        <div id='storie-button'>
                            
                        </div>
                    </div>
                    <div>
                        <div id='storie-button'>
                            
                        </div>
                    </div>
                    
                  
                </CarouselModel>
            </div>
        </div>
    )
}

export default Carousel