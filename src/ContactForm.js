import React from 'react'
import './ContactForm.css'

function ContactForm() {
    return (
        <div className="contactForm">
            <form className="form">
                <div className="first__row">
                    <span className="text__fields">
                        <label >FirstName</label>
                        <input type="text" />
                    </span>
                    <span className="text__fields">
                        <label>LastName</label>
                        <input type="text" />
                    </span>
                </div>

                <div className="second__row">
                    <span className="text__fields">
                        <label>E-mail</label>
                        <input type="email" />
                    </span>
                    <span className="text__fields">
                        <label>Phone</label>
                        <input type="phone" />
                    </span>
                </div>

                <div className="message text__fields">
                    <label>Message</label>
                    <textarea name="message" rows="10" cols="80">
                        
                    </textarea>
                </div>

                <button className="submit__button" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ContactForm
