import './PostContainer.css'
import Post from '../Post/Post'
import React from 'react';


function PostContainer(props) {
    return (
        <div className="post-container-box">
            <div className="content-wrapper">
                <div className='post-container-content'>
                    {
                        props.statePosts.map((post, index) => {
                            return (
                                <Post key={index} profileName={post.profileName} profilePicture={post.profilePicture} photo={post.photo} title={post.title} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default PostContainer