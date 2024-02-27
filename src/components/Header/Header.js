import Logo from "../../assets/logo/BrainFlix-logo.svg"
import Avatar from "../../assets/images/mohan-muruge.jpg"
import { Link } from "react-router-dom"
/*This component is for the header section of the page*/
const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <div className="site-header">
          <div className="site-header__logo">
            <Link to="/">
              <img src={Logo} alt="BrainFlix-logo" />
            </Link>
          </div>
          <div className="site-header__input">
            <input className="site-header__input--search" type="text" placeholder="Search" />
            <div className="site-header__avatar hidden">
              <img className="site-header__avatar--img" src={Avatar} alt="Image" />
            </div>
            <Link className="noUnderline" to="/UploadVideo">
              <button className="site-header__input--button hidden1">UPLOAD</button>
            </Link>
          </div>
          <div className="site-header__avatar">
            <img className="site-header__avatar--img hidden1" src={Avatar} alt="Image" />
          </div>
          <Link className="noUnderline" to="/UploadVideo">
            <button className="site-header__input--button button hidden">UPLOAD</button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
