import './contact.css';
import FacebookIcon from '../../assets/facebook-icon.png';
import InstagramIcon from '../../assets/instagram.png';
import TwitterIcon from '../../assets/twitter.png';
import YoutubeIcon from '../../assets/youtube.png';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sk5tjgf', 'template_76sy09s', form.current, 'zBtj_FcNHrGWWsaD4')
      .then((result) => {
        console.log(result.text);
        e.target.reset();
        alert("Email Sent!")
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contaceDesc">Please fill out the form below to discuss any work opportunities.</span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your Name" name="from_name" />
          <input type="email" className="email" placeholder="Your Email" name="from_email" />
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