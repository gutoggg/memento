import './PostContainer.css'
import Post from '../Post/Post'
import React from 'react';
import testImage from '../../images/testImage.png'
import { LoremPicsum } from "react-lorem-picsum";


function PostContainer(props) {

    let posts = [
        {
            profilePicture:<LoremPicsum className='post-image-button-photo' width={1024} random  />,
            profileName:'gutoggg',
            photo:<LoremPicsum className='post-image-button-photo' width={1024} random  />,
            title:'Teste'
        }
    ]

    const [statePosts, setModalOpen] = React.useState(posts);

    return (
        <div ref={props.referencia} className="post-container-box">
            <div className="content-wrapper">
               <div className='post-container-content'>
                   { 
                   posts.map((post, index) => {
                       return (
                            <Post key={index} profileName={post.profileName} profilePicture={post.profilePicture} photo={post.photo} title={post.title}  /> 
                       )
                   })
                   }
               </div>
            </div>
        </div>
    )
}

export default PostContainer