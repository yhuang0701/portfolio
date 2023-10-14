import './contact.css';
import FacebookIcon from '../../assets/facebook-icon.png';
import InstagramIcon from '../../assets/instagram.png';
import TwitterIcon from '../../assets/twitter.png';
import YoutubeIcon from '../../assets/youtube.png';

const Contact = () => {
  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contaceDesc">Please fill out the form below to discuss any work opportunities.</span>
        <form className="contactForm">
          <input type="text" className="name" placeholder="Your Name" />
          <input type="email" className="email" placeholder="Your Email" />
          <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
          <button type="submit" value="Send" className="submitBtn">Submit</button>
          <div className="links">
            <img src={FacebookIcon} alt="Facebook Icon" className="link" />
            <img src={TwitterIcon} alt="Twitter Icon" className="link" />
            <img src={InstagramIcon} alt="Instagram Icon" className="link" />
            <img src={YoutubeIcon} alt="Youtube Icon" className="link" />
          </div>
        </form>
      </div>
    </section>
  )
}
export default Contact