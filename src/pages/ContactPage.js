import React from 'react';
import '../styles/contact.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>
        Have a question or need assistance? Our dedicated support team is here to help. Feel free to reach out to us using the contact information below, and we'll get back to you as soon as possible.
      </p>
      <div className="contact-info">
        <div className="contact-item">
          <i className="fas fa-map-marker-alt"></i>
          <h3>Address</h3>
          <p>123 Main Street<br />Anytown, USA 12345</p>
        </div>
        <div className="contact-item">
          <i className="fas fa-phone"></i>
          <h3>Phone</h3>
          <p>(555) 555-5555</p>
        </div>
        <div className="contact-item">
          <i className="fas fa-envelope"></i>
          <h3>Email</h3>
          <p>support@stockpulse.com</p>
        </div>
      </div>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactPage;