import './Post.css'
import imageTest from '../../images/testImage.png'
import heartIcon from '../../images/heart.png'
import heartFilledIcon from '../../images/heart-filled.png'
import shareIcon from '../../images/share.png'
import bookmarkIcon from '../../images/bookmark.png'
import bookmarkFilledIcon from '../../images/bookmark-filled.png'
import sendIcon from '../../images/send.png'
import React, {useState} from 'react'

function Post(props) {
    const [heartState, setHeartIcon] = useState(heartIcon);

    function heartHandler() {
        if (heartState === heartIcon) {
            setHeartIcon(heartFilledIcon)
        } else {
            setHeartIcon(heartIcon)
        }
    
    }

    const [bookmarkState, setBookmarkIcon] = useState(bookmarkIcon);

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
                    <div className='post-image-button'>
                        <img className='post-image-button-photo' src={imageTest} alt="" />
                    </div>
                    <p>Furdinand</p>
                </div>
                <div className='post-image'>
                    <img className='post-image-button-photo' src={imageTest} alt="" />
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
                        <p className="post-title" >Baita dia esse!</p>
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