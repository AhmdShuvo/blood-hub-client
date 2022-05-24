import React, { useState } from 'react';
import "./Contact.scss"

const Contact = () => {
    let [name, setName] = useState()
    let [email, setEmail] = useState()
    let [comments, setComments] = useState()

    

    const handleSubmit  = e =>{
        const newData = {name, email, comments}
        console.log(newData);
        e.preventDefault()
    }
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
                        <form onSubmit={handleSubmit}>
                            <div className="form-item">
                                <input type="text" 
                                className='contact-input'
                                name="sender"
                                onChange={(e) => setName(e.target.value)} required />
                                <label>Name:</label>
                            </div>
                            <div className="form-item">
                                <input type="text"
                                className='contact-input' 
                                name="email"
                                onChange={(e) => setEmail(e.target.value)} required />
                                <label>Email:</label>
                            </div>
                            <div className="form-item">
                                <textarea className='contact-input' 
                                name="message"
                                onChange={(e) => setComments(e.target.value)} required></textarea>
                                <label>Message:</label>
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