import React from 'react'
import CarouselModel from 'infinite-react-carousel'
import StorieButton from '../StorieButton/StorieButton'
import './Carousel.css'
import dolor from 'dolor'

function Carousel() {
    
    let storiesQuantity = 8
    let carouselItems = []
    for (let i = 0; i < storiesQuantity; i++) {
      
        let storieTemplate = <StorieButton key={i} link={`/profile`} linkState={{profilePicture: `https://picsum.photos/1024?random=${Math.random()}`, profileName: dolor.words(1)}} alt={"Foto de perfil"} />
      
        carouselItems.push(storieTemplate)
      }

    return (
        <div className="carousel-box">
            <div className="content-wrapper">
                <CarouselModel className="storie-box" duration={1000} adaptiveHeight={false} arrows={false} arrowsBlock={false} initialSlide={1} slidesToShow={5} wheel={true} wheelScroll={2}>
                {carouselItems}
                </CarouselModel>
            </div>
        </div>
    )
}

export default Carousel