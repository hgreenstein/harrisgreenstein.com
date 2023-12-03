import React, { useRef, useState } from 'react';
import './contact.css';
import '../../index.css';
import useAnimateOnObserve from '../../Custom-Hooks/useAnimateOnObserve';
import emailjs from '@emailjs/browser';
import emailCreds from './emailCreds.js';
import Spinner from 'react-bootstrap/Spinner';
function Contact() {
    const contactListItems = useRef([]);
    const contactForm = useRef(null);
    const [emailLoading, setEmailLoading] = useState(false);
    useAnimateOnObserve(contactListItems, 'contact-list-animation', {
        rootMargin: '0px',
        threshold: 0.1,
    });
    const sendEmail = (e) => {
        e.preventDefault();
        setEmailLoading(true);
        emailjs
            .sendForm(
                emailCreds.credentials.service,
                emailCreds.credentials.template,
                contactForm.current,
                emailCreds.credentials.key
            )
            .then(
                () => {
                    alert('Email was successfully sent to Harris Greenstein!');
                    setEmailLoading(false);
                    contactForm.current.reset();
                },
                () => {
                    alert('Email was not successfully sent, please try again');
                    setEmailLoading(false);
                }
            );
    };

    return (
        <section id="contact" className="contact-container">
            <h1 className="contact-header">Contact Me</h1>
            <h4 className="contact-message">📬 Interesting in talking more? Reach out and let's start a conversation!</h4>
            <div className="contact-form">
                <form ref={contactForm} onSubmit={sendEmail}>
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
                            {emailLoading ? (
                                <div className="contact-form-spinner">
                                    <Spinner
                                        animation="border"
                                        variant="danger"
                                    />
                                </div>
                            ) : (
                                <input
                                    type="submit"
                                    className="contact-submit-button"
                                    value="Send"
                                />
                            )}
                        </li>
                    </ul>
                </form>
            </div>
        </section>
    );
}

export default Contact;
