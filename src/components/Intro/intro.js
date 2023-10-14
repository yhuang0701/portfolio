import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">I am
          <span className="introName"> Yichen</span>
          <br />
          Website Developer
        </span>
        <p className="introPara">First year Master student at UIUC. Passionate about developing <br />my careers in Software Engineer / Machine Learning Engineer.</p>
        <Link>
          <button className="btn">
            <img src={btnImg} alt="Hire Me" className="btnImg" />
            Hire Me
          </button>
        </Link>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  )
}
export default Intro;