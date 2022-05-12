import './AddPostModal.css'
import { styled } from '@mui/material/styles'
import React from 'react'
import personIcon from '../../images/person.png'
import pictureIcon from '../../images/picture.png'
import { Box, Stack, Button, Modal, Avatar, IconButton } from '@mui/material';
import TextField from '@mui/material/TextField'

const Input = styled('input')({
    display: 'none',
});

function AddPostModal(props) {

    const [selectedProfileImage, setSelectedProfileImage] = React.useState('')
    const [selectedPostImage, setselectedPostImage] = React.useState('')

    const [imageProfileUrl, setProfileImageUrl] = React.useState(personIcon)
    const [imagePostUrl, setPostImageUrl] = React.useState(pictureIcon)

    const [modalProfileName, setModalProfileName] = React.useState("")
    const [modalTitle, setModalTitle] = React.useState("")

    function onCloseHandle(e) {
        props.openHandler()
        setProfileImageUrl(personIcon)
        setPostImageUrl(pictureIcon)
    }

    function onPostHandle() {
        props.addPost({
            profilePicture: <img className='post-image-button-photo' alt={selectedProfileImage.name} src={imageProfileUrl} />,
            profileName: modalProfileName,
            photo: <img className='post-image-button-photo' alt={selectedPostImage.name} src={imagePostUrl} />,
            title: modalTitle
        })
        onCloseHandle()
    }

    React.useEffect(() => {
        if (selectedProfileImage) {
            setProfileImageUrl(URL.createObjectURL(selectedProfileImage))
        }
    }, [selectedProfileImage])

    React.useEffect(() => {
        if (selectedPostImage) {
            setPostImageUrl(URL.createObjectURL(selectedPostImage))
        }
    }, [selectedPostImage])

    return (
        <Modal onClose={onCloseHandle} disableEnforceFocus={false} disableEscapeKeyDown={false} open={props.openState} className='post-modal' disableAutoFocus={true}>
            <Box className='post-modal-box'>
                <Box className='post-modal-header'>
                    <label htmlFor="icon-button-file">
                        <Input accept="image/*" id="icon-button-file" type="file" onChange={e => setSelectedProfileImage(e.target.files[0])} />
                        <IconButton color="primary" aria-label="upload picture" component="span">
                            <Avatar className='post-modal-profile-icon' alt={selectedProfileImage.name} src={imageProfileUrl} />
                        </IconButton>
                    </label>
                    <TextField value={modalProfileName} className='post-modal-header-input' label="Usuário" size="small" margin='none' onChange={(e) => {
                        setModalProfileName(e.target.value)
                    }} />
                </Box>
                <Box className='post-modal-photo-box'>
                    <label htmlFor="post-button-file">
                        <Input accept="image/*" id="post-button-file" type="file" onChange={e => setselectedPostImage(e.target.files[0])} />
                        <IconButton className='post-modal-photo-parent' color="primary" aria-label="upload picture" component="span">
                            <img className='post-modal-photo' alt={selectedPostImage.name} src={imagePostUrl} />
                        </IconButton>
                    </label>
                </Box>
                <Box className='post-modal-title'>
                    <TextField value={modalTitle} className='post-modal-header-input' label="Título" size="small" margin='none' onChange={(e) => {
                        setModalTitle(e.target.value)
                    }} />
                </Box >
                <Box className='post-modal-buttons'>
                    <Stack justifyContent="space-between" direction="row" >
                        <Button onClick={onCloseHandle} variant="contained" color="error">
                            cancel
                        </Button>
                        <Button onClick={onPostHandle} variant="contained" color="success">
                            post
                        </Button>
                    </Stack>
                </Box>
            </Box>
        </Modal>
    )
}

export default AddPostModal
