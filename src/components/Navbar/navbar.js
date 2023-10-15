import './navbar.css';
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'
import contactImg from '../../assets/contact.png'
import menu from '../../assets/menu.png'
import { useState } from 'react';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenu">
        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Skills</Link>
        <Link activeClass="active" to="works" spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Portfolio</Link>
        {/* <Link className='desktopMenuListItem'>Clients</Link> */}
      </div>
      <button className="desktopMenuBtn" onClick={() => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
      }}>
        <img src={contactImg} alt="contact img"
          className="desktopMenuImg" />Contact Me
      </button>

      <img src={menu} alt="Mobile Menu" className="mobMenu" onClick={() => setShowMenu(!showMenu)} />
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Home</Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Skills</Link>
        <Link activeClass="active" to="works" spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Portfolio</Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Contact</Link>
      </div>
    </nav >
  )
}
export default Navbar;