import './StorieButton.css'

function StorieButton(props) {
    return (
        <div>
            <div id='storie-button'>
                <img className='storie-photo' src={props.image} alt={props.alt}/>
            </div>
        </div>
    )
}

export default StorieButton