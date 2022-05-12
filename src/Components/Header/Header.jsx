import './Header.css'
import logo from '../../images/logo.svg'
import addPost from '../../images/add-button.svg'
import React from 'react'
import AddPostModal from '../AddPostModal/AddPostModal'
import { Link } from "react-router-dom"
import Home from '../../Routes/Home/Home'


function Header(props) {
    const [modalOpen, setModalOpen] = React.useState(false);

    function addPostHandler(e) {
        setModalOpen(!modalOpen)
    }

    let style = {

    }

    if (props.hasButton === false) {
        style = { display: 'none' }
    }

    return (
        <div className="header-box">
            <div className="content-wrapper">
                <Link to={'/'}>
                    <img src={logo} alt="Memento logo" />
                </Link>
                <img style={style} onClick={addPostHandler} src={addPost} alt="Add post icon" />
            </div>
            <AddPostModal addPost={props.addPost} openHandler={addPostHandler} openState={modalOpen} />
        </div>
    )
}

export default Header
