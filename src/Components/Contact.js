import React, { useState } from 'react'
import '../CssFolder/Contact.css'
import {NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

function Contact() {
  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [message , setMessage] = useState("");
  
  const [update, setUpdate] = useState(true);
  const handlerSubmit = (e) =>{
    setUpdate(false);
    e.preventDefault();
    const contactDetails = { name , email , message}; 
    
    fetch('http://localhost:8000/contact',{
      method:'POST',
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify(contactDetails)
    }).then(()=>{
      NotificationManager.success(" your details added ! "," done ",3000)
       setUpdate(true)
       setEmail("");
       setMessage("");
       setName("");
    })
  }

  return (
    <section
  className="section-bg"
  data-scroll-index={7}
>
  <div className="overlay pt-100 pb-100 ">
    <div className="containers">
      <div className="row">
        <div className="col-lg-6 d-flex align-items-center">
          <div className="contact-info">
            <h2 className="contact-title">Have Any Questions?</h2>
            <p>Please feel free to reach out to us using the contact information provided below. We are happy to assist you with any inquiries, feedback, or requests you may have. Our team will get back to you as soon as possible. Thank you for your interest!
            </p>
            <ul className="contact-info">
              <li>
                <div className="info-left">
                  <i className="fas fa-mobile-alt" />
                </div>
                <div className="info-right">
                  <h4>+91 8238211904</h4>
                </div>
              </li>
              <li>
                <div className="info-left">
                  <i className="fas fa-at" />
                </div>
                <div className="info-right">
                  <h4>Carpoint@gmail.com</h4>
                </div>
              </li>
              <li>
                <div className="info-left">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <div className="info-right">
                  <h4>432 Shrivatav ,New Delhi, INDIA</h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6 d-flex align-items-center">
          <div className="contact-form">
            {/*Contact Form*/}
            <form id="contact-form" onSubmit={handlerSubmit}>
              <input
                type="hidden"
                name="form-name"
                defaultValue="contactForm"
              />
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="first-name"
                      value={name}
                      placeholder="Enter Your Name *"
                      required="required"
                      style={{"border":"1px solid black"}}
                    onChange={e => setName(e.target.value)}/>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      value={email}
                      id="email"
                      placeholder="Enter Your Email *"
                      required="required"
                      style={{"border":"1px solid black"}}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea
                      rows={4}
                      name="message"
                      value={message}
                      className="form-control"
                      id="description"
                      placeholder="Enter Your Message *"
                      required="required"
                      defaultValue={""}
                      style={{"border":"1px solid black"}}
                      onChange={e => setMessage(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  {/*contact button*/}
                  <button className="btn-big btns btn-bg" style={{"border":"1px solid black"}} >
                  {(!update ?
              <div class="spinner-border text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
         : "Send Us" )} <i className="fas fa-arrow-right" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Contact;