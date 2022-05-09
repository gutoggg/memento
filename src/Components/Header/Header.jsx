import './Header.css'
import logo from '../../images/logo.svg'
import addPost from '../../images/add-button.svg'

function Header() {
   
    return (
        <div className="header-box">
            <div className="content-wrapper">
                <img src={logo} alt="Memento logo" />
                <img src={addPost} alt="Add post icon"/>
            </div>
        </div>
    )
  }
  
  export default Header