import React from 'react';
import './contact.css';

function Contact() {
    return (
        <section id="contact" className="contact-container">
            <h1 className="contact-header">Contact Me</h1>
            <div className="contact-form">
                <ul className="contact-form-list">
                    <li className="contact-form-half">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            required
                        />
                    </li>
                    <li className="contact-form-half">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                        />
                    </li>
                    <li>
                        <textarea
                            placeholder="Message"
                            name="message"
                            required> </textarea>
                    </li>
                    <li>
                        <input type="submit" className="contact-submit-button" vaule="SEND" />
                    </li>
                </ul>
            </div>
        </section>
    );
}
export default Contact;
