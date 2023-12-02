import React, { useRef } from 'react';
import './contact.css';
import '../../index.css';
import useAnimateOnObserve from '../../Custom-Hooks/useAnimateOnObserve';
import emailjs from '@emailjs/browser';
import emailCreds from './emailCreds.js';
function Contact() {
    const contactListItems = useRef([]);
    const contactForm = useRef(null);
    useAnimateOnObserve(contactListItems, 'contact-list-animation', {
        rootMargin: '0px',
        threshold: 0.1,
    });
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            emailCreds.credentials.service,
            emailCreds.credentials.template,
            contactForm.current,
            emailCreds.credentials.key
        )
        .then(
                () => {
                    alert('Email was successfully sent to Harris Greenstein!');
                },
                () => {
                    alert('Email was not successfully sent, please try again');
                }
            )
    }

    return (
        <section id="contact" className="contact-container">
            <h1 className="contact-header">Contact Me</h1>
            <div className="contact-form">
                <form ref={contactForm}
                onSubmit={sendEmail}>
                    <ul className="contact-form-list">
                        <li
                            className="contact-form-half"
                            ref={(element) =>
                                (contactListItems.current[0] = element)
                            }
                        >
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                required
                            />
                        </li>
                        <li
                            className="contact-form-half"
                            ref={(element) =>
                                (contactListItems.current[1] = element)
                            }
                        >
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                            />
                        </li>
                        <li
                            className="contact-form-half"
                            ref={(element) =>
                                (contactListItems.current[2] = element)
                            }
                        >
                            <input
                                type="text"
                                placeholder="Subject"
                                name="subject"
                                required
                            />
                        </li>
                        <li
                            className="contact-form-textarea"
                            ref={(element) =>
                                (contactListItems.current[3] = element)
                            }
                        >
                            <textarea
                                placeholder="Message"
                                name="message"
                                required
                            />
                        </li>
                        <li
                            className="contact-form-submit"
                            ref={(element) =>
                                (contactListItems.current[4] = element)
                            }
                        >
                            <input
                                type="submit"
                                className="contact-submit-button"
                                value="SEND"
                            />
                        </li>
                    </ul>
                </form>
            </div>
        </section>
    );
}

export default Contact;
