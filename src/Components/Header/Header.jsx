import './Header.css'
import logo from '../../images/logo.svg'
import addPost from '../../images/add-button.svg'
import personIcon from '../../images/person.png'
import pictureIcon from '../../images/picture.png'
import { TextField, Box } from '@mui/material';
import { Modal, Avatar, IconButton } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

const addPostRef = React.createRef();

const Input = styled('input')({
    display: 'none',
});

const styleModal = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

const style = {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'flex-start',
    width: '80%',
    height: '80%',
    bgcolor: 'var(--color-2)',
    border: '1px solid var(--color-6)',
    boxShadow: 24,
    padding: '1rem',
    borderRadius: '15px',
};

const style2 = {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
};

console.log(AddAPhotoIcon)

function Header() {
    const [modalOpen, setModalOpen] = React.useState(false);
    const [selectedProfileImage, setSelectedProfileImage] = React.useState('');
    const [selectedPostImage, setselectedPostImage] = React.useState('');

    const [imageProfileUrl, setProfileImageUrl] = React.useState(personIcon);
    const [imagePostUrl, setPostImageUrl] = React.useState(pictureIcon);

    function addPostHandler(e) {
        setModalOpen(!modalOpen)
    }

    React.useEffect(() => {
        if (selectedProfileImage) {
            setProfileImageUrl(URL.createObjectURL(selectedProfileImage));
        }
    }, [selectedProfileImage]);

    React.useEffect(() => {
        if (selectedPostImage) {
            setPostImageUrl(URL.createObjectURL(selectedPostImage));
        }
    }, [selectedPostImage]);

    return (
        <div className="header-box">
            <div className="content-wrapper">
                <img src={logo} alt="Memento logo" />
                <img onClick={addPostHandler} ref={addPostRef} src={addPost} alt="Add post icon" />
            </div>
            <Modal onClose={addPostHandler} disableEnforceFocus={false} disableEscapeKeyDown={false} open={modalOpen} sx={styleModal} disableAutoFocus={true}>
                <Box sx={style}>
                    <div style={style2}>
                        <label htmlFor="icon-button-file">
                            <Input accept="image/*" id="icon-button-file" type="file" onChange={e => setSelectedProfileImage(e.target.files[0])} />
                            <IconButton color="primary" aria-label="upload picture" component="span">
                                <Avatar alt={selectedProfileImage.name} src={imageProfileUrl} />
                            </IconButton>
                        </label>
                        <TextField label="Usuário" defaultValue="" size="small" margin='none' />
                    </div>
                    <div style={style2}>
                        <label style={{width:'100%'}}  htmlFor="post-button-file">
                            <Input  accept="image/*" id="post-button-file" type="file" onChange={e => setselectedPostImage(e.target.files[0])} />
                            <IconButton style={{width:'100%'}}  color="primary" aria-label="upload picture" component="span">
                                <img  style={{width:'100%', height:'300px', objectFit:'cover'}} alt={selectedPostImage.name} src={imagePostUrl} />
                            </IconButton>
                        </label>
                    </div>
                </Box>
               
            </Modal>
        </div>
    )
}

export default Header