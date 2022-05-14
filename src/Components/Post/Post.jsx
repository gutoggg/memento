import './Post.css'
import imageTest from '../../images/testImage.png'
import heartIcon from '../../images/heart.png'
import heartFilledIcon from '../../images/heart-filled.png'
import shareIcon from '../../images/share.png'
import bookmarkIcon from '../../images/bookmark.png'
import bookmarkFilledIcon from '../../images/bookmark-filled.png'
import sendIcon from '../../images/send.png'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Post(props) {

    const [heartState, setHeartIcon] = useState(heartIcon)
    const [bookmarkState, setBookmarkIcon] = useState(bookmarkIcon)
    function heartHandler() {
        if (heartState === heartIcon) {
            setHeartIcon(heartFilledIcon)
        } else {
            setHeartIcon(heartIcon)
        }

    }

    function bookmarkHandler() {
        if (bookmarkState === bookmarkIcon) {
            setBookmarkIcon(bookmarkFilledIcon)
        } else {
            setBookmarkIcon(bookmarkIcon)
        }

    }
    return (
        <div className="post-box">
            <div className="post-wrapper">
                <div className='post-header'>
                    {props.profilePicture}
                    <p>{props.profileName}</p>
                </div>
                <div className='post-image'>
                    {props.photo}
                </div>
                <div className='post-footer'>
                    <div className='post-footer-icons'>
                        <img onClick={heartHandler} className='post-footer-icon post-footer-icon-heart' src={heartState} alt="" />
                        <span>
                            <img className='post-footer-icon' src={shareIcon} alt="" />
                            <img onClick={bookmarkHandler} className='post-footer-icon' src={bookmarkState} alt="" />
                        </span>

                    </div>
                    <div className='post-footer-title'>
                        <p className="post-title" >{props.title}</p>
                    </div>
                    <div className='post-footer-comment'>
                        <input className='post-comment-input' type="text" placeholder='Adicionar comentário' />
                        <img className='post-footer-icon' src={sendIcon} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post