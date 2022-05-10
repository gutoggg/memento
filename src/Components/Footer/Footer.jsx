import './Footer.css'
import inverseLogo from '../../images/logo-inverse.svg'


function Footer() {
   
    return (
        <div className="footer-box">
            <div className="content-wrapper">
                <img src={inverseLogo} alt="Memento logo" />
            </div>
        </div>
    )
  }
  
  export default Footer