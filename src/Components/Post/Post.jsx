import './Post.css'
import heartIcon from '../../images/heart.png'
import heartFilledIcon from '../../images/heart-filled.png'
import shareIcon from '../../images/share.png'
import bookmarkIcon from '../../images/bookmark.png'
import bookmarkFilledIcon from '../../images/bookmark-filled.png'
import sendIcon from '../../images/send.png'
import React, { useRef, useState } from 'react'
import { Box } from '@mui/material'
import StorieButton from '../StorieButton/StorieButton'
import dolor from 'dolor'

function Post(props) {
    const commentField = useRef()
    const [commentState, setCommentState] = useState([])
    const [heartState, setHeartIcon] = useState(heartIcon)
    const [bookmarkState, setBookmarkIcon] = useState(bookmarkIcon)

    function addComment(e) {
        const newComment = commentField.current.value
        const newCommentPhoto = `https://picsum.photos/1024?random=${Math.random()}`
        const newCommentObject = {
            Comment: newComment,
            Picture: newCommentPhoto
        }
        let newComments = commentState.concat([newCommentObject])
        commentField.current.value = ""
        setCommentState(newComments)
    }

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
                        <input ref={commentField} className='post-comment-input' type="text" placeholder='Adicionar comentário' />
                        <img onClick={addComment} className='post-footer-icon' src={sendIcon} alt="" />
                    </div>
                    <div className='post-comments'>
                        {commentState.map((commentObject, index) => {
                            return <Box key={index} sx={{ display: 'flex', flexFlow: 'row nowrap', alignItems: 'center' }}>
                                <StorieButton style={{ maxHeight: '25px', maxWidth: '25px', margin: '.25rem' }} link={`/profile`} linkState={{ profilePicture: commentObject.Picture, profileName: dolor.words(1) }} alt={"Foto de perfil"} />
                                <p className='post-comment' >{commentObject.Comment}</p>
                            </Box>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post