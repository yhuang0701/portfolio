import './navbar.css';
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenu">

      </div>
      <button className="desktopMenuBtn">
        <img src="" alt="" className="desktopMenuing" />Contact Me
      </button>
    </nav>
  )
}
export default Navbar;