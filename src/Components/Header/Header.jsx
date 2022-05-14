import './Header.css'
import logo from '../../images/logo.svg'
import addPost from '../../images/add-button.svg'
import React from 'react'
import AddPostModal from '../AddPostModal/AddPostModal'
import { Link } from "react-router-dom"
import Home from '../../Routes/Home/Home'
import MuiAlert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
})

function Header(props) {
    const [modalOpen, setModalOpen] = React.useState(false);
    const [openSuccess, setOpenSuccess] = React.useState(false)
    const [openCancel, setOpenCancel] = React.useState(false)

    const handleCloseSuccess = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }
        setOpenSuccess(false)
    }

    const handleCloseCancel = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }
        setOpenCancel(false)
    }

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
            <Snackbar open={openSuccess} autoHideDuration={3000} onClose={handleCloseSuccess}>
                <Alert onClose={handleCloseSuccess} severity="success" sx={{ width: '100%' }}>
                    Postagem criada com sucesso!
                </Alert>
            </Snackbar>
            <Snackbar open={openCancel} autoHideDuration={3000} onClose={handleCloseCancel}>
                <Alert onClose={handleCloseCancel} severity="error" sx={{ width: '100%' }}>
                    Postagem Cancelada.
                </Alert>
            </Snackbar>
            <div className="content-wrapper">
                <Link to={'/'}>
                    <img src={logo} alt="Memento logo" />
                </Link>
                <img style={style} onClick={addPostHandler} src={addPost} alt="Add post icon" />
            </div>
            <AddPostModal addPost={props.addPost} openHandler={addPostHandler} setOpenCancel={setOpenCancel} setOpenSuccess={setOpenSuccess} openState={modalOpen} />

        </div>
    )
}

export default Header
