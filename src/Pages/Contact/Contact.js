import React, { useState,useRef } from 'react';
import "./Contact.scss"
import emailjs from '@emailjs/browser';

const Contact = () => {
    let [name, setName] = useState()
    let [email, setEmail] = useState()
    let [comments, setComments] = useState()

    const form = useRef();

    const handleSubmit  = e =>{
        const newData = {name, email, comments}
       
       
    }
    

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_2natv1r', 'template_dzduswh', form.current, 'user_tve3WtBVfEKVjvfrqtDtj')
          .then((result) => {
              console.log(result.text);
              
          }, (error) => {
              console.log(error.text);
          });
          e.preventDefault()
      };
    
    return (
        <div>
            <section id="contact">
                <div className="contact-box">
                    <div className="contact-links">
                        <h2>CONTACT</h2>
                        <div className="links">
                            <div className="link">
                                <a>
                                    <img className='contact-img' src="https://i.postimg.cc/m2mg2Hjm/linkedin.png" alt="linkedin" />
                                </a>
                            </div>
                            <div className="link">
                                <a><img className='contact-img' src="https://i.postimg.cc/YCV2QBJg/github.png" alt="github" /></a>
                            </div>
                            <div className="link">
                                <a><img className='contact-img' src="https://i.postimg.cc/W4Znvrry/codepen.png" alt="codepen" /></a>
                            </div>
                            <div className="link">
                                <a><img className='contact-img' src="https://i.postimg.cc/NjLfyjPB/email.png" alt="email" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form-wrapper">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="form-item">
                                <input type="text" 
                                className='contact-input'
                                name="from_name"
                                onChange={(e) => setName(e.target.value)} required />
                                <label className='label'>Name:</label>
                            </div>
                            <div className="form-item">
                                <input type="text"
                                className='contact-input' 
                                name="reply_to"
                                onChange={(e) => setEmail(e.target.value)} required />
                                <label className='label'>Email:</label>
                            </div>
                            <div className="form-item">
                                <textarea className='contact-input' 
                                name="message"
                                onChange={(e) => setComments(e.target.value)} required></textarea>
                                <label className='label'>Message:</label>
                            </div>
                            <button className="submit-btn">Send</button>
                        </form>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Contact;