import React from 'react'
import CarouselModel from 'infinite-react-carousel'
import StorieButton from '../StorieButton/StorieButton'
import './Carousel.css'

function Carousel() {
    
    return (
        <div className="carousel-box">
            <div className="content-wrapper">
                <CarouselModel className="storie-box" duration={1000} adaptiveHeight={false} arrows={false} arrowsBlock={false} initialSlide={1} slidesToShow={5} wheel={true} wheelScroll={2}>
                    <StorieButton link={`/profile`} linkState={{profilePicture: `https://picsum.photos/1024?random=${Math.random()}`, profileName: 'testeCarousel1'}} alt={"Foto de perfil"} />
                    <StorieButton link={`/profile`} linkState={{profilePicture: `https://picsum.photos/1024?random=${Math.random()}`, profileName: 'testeCarousel1'}} alt={"Foto de perfil"} />
                    <StorieButton link={`/profile`} linkState={{profilePicture: `https://picsum.photos/1024?random=${Math.random()}`, profileName: 'testeCarousel1'}} alt={"Foto de perfil"} />
                    <StorieButton link={`/profile`} linkState={{profilePicture: `https://picsum.photos/1024?random=${Math.random()}`, profileName: 'testeCarousel1'}} alt={"Foto de perfil"} />
                    <StorieButton link={`/profile`} linkState={{profilePicture: `https://picsum.photos/1024?random=${Math.random()}`, profileName: 'testeCarousel1'}} alt={"Foto de perfil"} />
                    <StorieButton link={`/profile`} linkState={{profilePicture: `https://picsum.photos/1024?random=${Math.random()}`, profileName: 'testeCarousel1'}} alt={"Foto de perfil"} />
                    <StorieButton link={`/profile`} linkState={{profilePicture: `https://picsum.photos/1024?random=${Math.random()}`, profileName: 'testeCarousel1'}} alt={"Foto de perfil"} />
                </CarouselModel>
            </div>
        </div>
    )
}

export default Carousel