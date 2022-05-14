import '../../reset.css'
import '../../main.css'
import './Profile.css'
import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import { Link, useLocation } from "react-router-dom"
import { Box } from '@mui/material'
import StorieButton from '../../Components/StorieButton/StorieButton'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import dolor from 'dolor';

let photos = []

const photoQuantity = 12
for (let i = 0; i < photoQuantity; i++) {
    photos.push(1)
}


function Profile(props) {

    let location = useLocation()

    return (
        <div className="page-wrapper">
            <Header hasButton={false} />
            <Box className='profile-header'>
                <StorieButton className='teste' style={{ maxWidth: '150px', maxHeight: '150px', width: '30vw', height: '30vw' }} image={location.state.profilePicture} alt={"Foto de perfil"} />
                <Box className='profile-header-text-box'>
                    <p className='profile-header-name'>{location.state.profileName}</p>
                    <p>{dolor.words(12)}.</p>
                </Box>
            </Box>
            <Box className='stats-box'>  
                <Box>
                    <p>{photoQuantity}</p>
                    <p>[publicações]</p>
                </Box>
                <Box>
                    <p>{Math.floor(Math.random() * 100)}</p>
                    <p>[seguidores]</p>
                </Box>
                <Box>
                    <p>{Math.floor(Math.random() * 1500)}</p>
                    <p>[seguindo]</p>
                </Box>
            </Box>
            <Box className='profile-grid'>
                <ImageList sx={{ width: '100%', height: 'auto', rowHeight: '150vw' }} cols={3} >
                    {photos.map((value, index) => { return (   <ImageListItem key={index}>
                        <img className='post-image-button-photo' src={`https://picsum.photos/1024?random=${Math.random()}`} />
                        </ImageListItem>)
                     
                    })}
                </ImageList>
            </Box>
            <Footer />
            
        </div>
    )
}

export default Profile
