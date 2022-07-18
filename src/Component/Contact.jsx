import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('portfolio', 'template_dqbx3pr', form.current, '6-7C49GvosPmM7ylP')
            .then((result) => {
                //   console.log(result.text);
                alert('Thank You, I am shortly contact with you');
            }, (error) => {
                //   console.log(error.text);
                alert('Oops!. Try again later');
            });
    };


    return (
        <section className='contact' id='contact'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h1 className='title'>Get in Touch</h1>
                        <div className='title-bar'></div>
                    </div>
                    <div className='col-12 col-lg-6'>
                        <h3>Contact Info</h3>
                        <ul>
                            <li>
                                <i className='uil uil-outgoing-call'></i>
                                <span className='info-details'>
                                    <h6>Phone</h6>
                                    <span className='info-value'><a href='tel:+201014707932'> +20 1014707932</a></span>
                                </span>
                            </li>
                            <li>
                                <i className='uil uil-envelope-edit'></i>
                                <span className='info-details'>
                                    <h6>Email</h6>
                                    <span className='info-value'><a href='mailto:raghademaad163@gmail.com'> raghademaad163@gmail</a></span>
                                </span>
                            </li>
                            <li>
                                <i className='uil uil-location-pin-alt'></i>
                                <span className='info-details'>
                                    <h6>Location</h6>
                                    <span className='info-value'> Cairo, Egypt</span>
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className='col-12 col-lg-6'>
                        <h3 className='m-mr-30'>Message Me</h3>
                        <form ref={form} onSubmit={sendEmail}>
                            <label for='name' className='form-label'>Name</label>
                            <input type='text' name='name' className='form-control mb-20' id='name' placeholder='Your Name' required />
                            <label for='email' className='form-label'>Email address</label>
                            <input type='email' name='email' className='form-control mb-20' id='email' placeholder='name@example.com' required />
                            <label for='mobile' className='form-label'>Mobile</label>
                            <input type='text' name='message' className='form-control mb-20' id='text' placeholder='+20 100-000-0000' required />
                            <input type="submit" value="Send" className='read-more' />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;