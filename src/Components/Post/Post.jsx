import './Post.css'
import imageTest from '../../images/testImage.png'

function Post(props) {
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

                    </div>
                    <div className='post-footer-title'>

                    </div>
                    <div className='post-footer-comment'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post