import Logo from "../../assets/logo/BrainFlix-logo.svg"
import Avatar from "../../assets/images/mohan-muruge.jpg"
const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <div className="site-header">
          <div className="site-header__logo">
            <img src={Logo} alt="BrainFlix-logo" />
          </div>
          <div className="site-header__input">
            <input className="site-header__input--search" type="text" placeholder="Search" />
            <div className="site-header__avatar hidden">
              <img className="site-header__avatar--img" src={Avatar} alt="Image" />
            </div>
            <button className="site-header__input--button button hidden1">UPLOAD</button>
          </div>
          <div className="site-header__avatar">
            <img className="site-header__avatar--img hidden1" src={Avatar} alt="Image" />
          </div>
          <button className="site-header__input--button button hidden">UPLOAD</button>
        </div>
      </div>
    </header>
  )
}

export default Header
