import './contact.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_fpqgza8', 'template_am5qpv8', form.current, 'hOb15OECpNcxiPZen')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    
    return (
        <>
            <div className='container'>
                <div className='contact-form'>
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li>
                                <input type='text' name='user_name' placeholder='Name' required></input>
                            </li>
                            <li>
                                <input type='email' name='user_email' placeholder='Email' required></input>
                            </li>
                            <li>
                                <input type='text' name='user_subject' placeholder='Subject' required></input>
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required></textarea>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value='SUBMIT'></input>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact