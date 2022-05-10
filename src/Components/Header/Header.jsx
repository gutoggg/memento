import './Header.css'
import logo from '../../images/logo.svg'
import addPost from '../../images/add-button.svg'
import React from 'react';
import AddPostModal from '../AddPostModal/AddPostModal'

function Header(props) {
    const [modalOpen, setModalOpen] = React.useState(false);

    function addPostHandler(e) {
        console.log(props.postContainer)
        setModalOpen(!modalOpen)
    }

    return (
        <div className="header-box">
            <div className="content-wrapper">
                <img src={logo} alt="Memento logo" />
                <img onClick={addPostHandler} src={addPost} alt="Add post icon" />
            </div>
            <AddPostModal openHandler={addPostHandler} openState={modalOpen}/>
        </div>
    )
}

export default Header
