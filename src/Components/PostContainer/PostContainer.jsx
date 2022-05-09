import './PostContainer.css'
import Post from '../Post/Post'

function PostContainer(props) {
    return (
        <div className="post-container-box">
            <div className="content-wrapper">
               <div className='post-container-content'>
                 <Post/> 
                 <Post/>  
                 <Post/>    
               </div>
            </div>
        </div>
    )
}

export default PostContainer