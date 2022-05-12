import './StorieButton.css'

function StorieButton(props) {
    return (
        <div >
            <div style={props.style} id='storie-button'>
                <img className='storie-photo' style={props.style} src={props.image} alt={props.alt}/>
            </div>
        </div>
    )
}

export default StorieButton