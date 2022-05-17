import { Link } from 'react-router-dom'
import './StorieButton.css'

function StorieButton(props) {

    if (props.link !== undefined) {
        return (
            <div >
                <div style={props.style} id='storie-button'>
                    <Link to={props.link} state={props.linkState}>
                        <img className='storie-photo'  src={props.linkState.profilePicture} alt={props.alt} />
                    </Link> 
                </div>
            </div>
        )
    } else {
        return (
            <div >
                <div style={props.style} id='storie-button'>
                    <img className='storie-photo' style={props.style} src={props.image} alt={props.alt} />
                </div>
            </div>
        )
    }
}

export default StorieButton