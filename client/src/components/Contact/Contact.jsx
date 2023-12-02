import React, {useRef, useEffect} from 'react';
import './contact.css';
import '../../index.css';
import useAnimateOnObserve from '../../Custom-Hooks/useAnimateOnObserve';
function Contact() {
    const contactListItems = useRef([]);
    useAnimateOnObserve(contactListItems, 'contact-list-animation', {rootMargin: '0px', threshold: 0.1});
    
    return (
        <section id="contact" className="contact-container">
            <h1 className="contact-header">Contact Me</h1>
            <div className="contact-form">
                <ul className="contact-form-list">
                    {['name', 'email', 'message', 'submit'].map((field, index) => (
                        <li
                            className="contact-form-item"
                            ref={(el) => (contactListItems.current[index] = el)}
                            key={field}
                        >
                            {field === 'message' ? (
                                <textarea placeholder="Message" name={field} required />
                            ) : field === 'submit' ? (
                                <input type="submit" className="contact-submit-button" value="SEND" />
                            ) : (
                                <input
                                    type={field === 'email' ? 'email' : 'text'}
                                    name={field}
                                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                                    required
                                />
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Contact;
