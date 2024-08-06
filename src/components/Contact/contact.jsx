import React, { useRef } from 'react';
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import FaceBookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YouTubeTcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        console.log("Sending email...");

        emailjs.sendForm('service_kkff899', 'template_erugoyl', form.current, 'YKf5d57SzPLuVFo9pwdwM')
            .then((result) => {
                console.log('Success:', result.text);
                e.target.reset();  // Reset form fields
                alert('Email sent successfully!');
            })
            .catch((error) => {
                console.error('Failed to send email:', error);
                alert('Failed to send email. Please check the console for errors.');
            });
    };

    return (
        <div>
            <section id='contactPage'>
            <div id="clients">
                    <h1 className='contactPageTitle'>My Clients</h1>
                    <p className='clientDesc'>I have had the pleasure of working with some great clients.</p>
                    <div className="clientImgs">
                        <img src={Walmart} alt="Walmart" className="clientImg" />
                        <img src={Adobe} alt="Adobe" className="clientImg" />
                        <img src={Microsoft} alt="Microsoft" className="clientImg" />
                        <img src={Facebook} alt="Facebook" className="clientImg" />
                    </div>
                </div>
                <div id="contact">
                    <h1 className="contactPageTitle">Contact Me</h1>
                    <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                    <form className="contactForm" ref={form} onSubmit={sendEmail}>
                        <input type="text" className="name" placeholder='Your Name' name='your_name' required />
                        <input type="email" className="email" placeholder='Your Email' name='your_email' required />
                        <textarea className="msg" name="message" rows="5" placeholder='Your Message' required></textarea>
                        <button type='submit' className="submitBtn">Submit</button>
                        <div className="links">
                            <img src={FaceBookIcon} alt="Facebook" className="link" />
                            <img src={TwitterIcon} alt="Twitter" className="link" />
                            <img src={YouTubeTcon} alt="YouTube" className="link" />
                            <img src={InstagramIcon} alt="Instagram" className="link" />
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Contact;
