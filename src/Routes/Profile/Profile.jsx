import '../../reset.css'
import '../../main.css'
import './Profile.css'
import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import { Link, Outlet, useParams } from "react-router-dom"
import { Box } from '@mui/material'
import StorieButton from '../../Components/StorieButton/StorieButton'
import imageTest from '../../images/testImage.png'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'


function Profile(props) {
    let params = useParams();
    const itemData = [
        {
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            title: 'Breakfast',
        },
        {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            title: 'Burger',
        },
        {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            title: 'Camera',
        },
        {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            title: 'Coffee',
        },
        {
            img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
            title: 'Hats',
        },
        {
            img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
            title: 'Honey',
        },
        {
            img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
            title: 'Basketball',
        },
        {
            img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
            title: 'Fern',
        },
        {
            img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
            title: 'Mushrooms',
        },
        {
            img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
            title: 'Tomato basil',
        },
        {
            img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
            title: 'Sea star',
        },
        {
            img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
            title: 'Bike',
        },
    ];
    return (
        <div className="page-wrapper">
            <Header hasButton={false} />
            <Box className='profile-header'>
                <StorieButton className='teste' style={{ maxWidth: '150px', maxHeight: '150px', width: '30vw', height: '30vw' }} image={imageTest} alt={"Foto de perfil"} />
                <Box className='profile-header-text-box'>
                    <p className='profile-header-name'>Furdinand</p>
                    <p>Curto rações e ossos, mas admito que muitas vezes faço loucuras e como um whiskas sachê.</p>
                </Box>
            </Box>
            <Box className='stats-box'>
                <Box>
                    <p>6</p>
                    <p>[publicações]</p>
                </Box>
                <Box>
                    <p>127</p>
                    <p>[seguidores]</p>
                </Box>
                <Box>
                    <p>243</p>
                    <p>[seguindo]</p>
                </Box>
            </Box>
            <Box className='profile-grid'>
                <ImageList sx={{ width: '100%', height: 'auto', rowHeight:'150vw' }} cols={3} >
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img 
                                src={`${item.img}`}
                                srcSet={`${item.img}`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
            <Footer />
            <Outlet />
        </div>
    )
}

export default Profile
